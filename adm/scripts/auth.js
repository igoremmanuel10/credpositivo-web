import { Router, Request, Response } from 'express';
import { verifySignature } from '../services/signature';
import { MPClient } from '../services/mpClient';
import { normalizeMPPayment } from '../services/normalize';
import prisma from '../lib/prisma';

const router = Router();
const mpClient = new MPClient(process.env.MP_ACCESS_TOKEN || '');
const WEBHOOK_SECRET = process.env.MP_WEBHOOK_SECRET || '';

router.post('/mercadopago', async (req: Request, res: Response) => {
    const headers = {
        'x-signature': req.headers['x-signature'] as string,
        'x-request-id': req.headers['x-request-id'] as string,
    };

    /**
     * 1. Resumo básico do corpo (Mercado Pago pode mandar data.id ou type/action)
     */
    const topic = req.body.type || req.body.topic;
    const resourceId = req.body.data?.id || req.query['data.id'];

    console.log(`[Webhook Received] Topic: ${topic}, Resource ID: ${resourceId}`);

    // Resposta rápida para evitar timeouts e re-entregas excessivas
    res.status(200).json({ received: true });

    /**
     * 2. Processamento assíncrono (não bloqueante para o Mercado Pago)
     */
    (async () => {
        try {
            // Validação de Assinatura
            if (!verifySignature(WEBHOOK_SECRET, headers, String(resourceId))) {
                console.error(`[Webhook Security] Invalid signature for resource ${resourceId}`);
                return;
            }

            // Idempotência
            const ts = headers['x-signature']?.split('ts=')[1]?.split(',')[0];
            const idempotencyKey = `mp:${topic}:${resourceId}:${ts}`;

            const existingEvent = await prisma.webhookEvent.findUnique({
                where: { eventIdempotencyKey: idempotencyKey }
            });

            if (existingEvent) {
                console.log(`[Webhook Dedupe] Event ${idempotencyKey} already processed.`);
                return;
            }

            // Registro Inicial
            const webhookEvent = await prisma.webhookEvent.create({
                data: {
                    mpTopic: topic,
                    mpResourceId: String(resourceId),
                    xRequestId: headers['x-request-id'],
                    eventIdempotencyKey: idempotencyKey,
                    rawBody: req.body,
                    status: 'received'
                }
            });

            // Busca Detalhes Reais no Mercado Pago
            let normalizedData = null;
            if (topic === 'payment') {
                const paymentData = await mpClient.getPayment(String(resourceId));
                normalizedData = normalizeMPPayment(paymentData);
            } else if (topic === 'merchant_order') {
                const orderData = await mpClient.getMerchantOrder(String(resourceId));
                // Adicionar lógica de normalização para order se necessário
                normalizedData = { type: 'merchant_order', raw: orderData };
            }

            // Atualização Final e "Disparo" (Log por enquanto)
            await prisma.webhookEvent.update({
                where: { id: webhookEvent.id },
                data: {
                    status: 'processed',
                    processedAt: new Date(),
                    normalizedEvent: normalizedData as any,
                }
            });

            console.log(`[Webhook Success] Event ${webhookEvent.id} processed and normalized.`);

            // Aqui integraria com o Credpositivo Core (ex: via fila ou RabbitMQ)
            // dispatchInternalEvent(normalizedData);

        } catch (error: any) {
            console.error(`[Webhook Error] ${error.message}`);
            // Log do erro no banco se o registro base existir
        }
    })();
});

export default router;
