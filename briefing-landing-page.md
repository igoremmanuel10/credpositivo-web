# BRIEFING — Landing Page Institucional CredPositivo
## Copy por André Copywriter | Design por Cláudia Designer

---

## DIRETRIZES VISUAIS (pra Cláudia)

### IDENTIDADE VISUAL — Seguir EXATAMENTE o design system do dashboard/login existente:

**Cores (do layout.css real):**
- Background body: `#0F1115`
- Background gradients: `radial-gradient(circle at 10% 10%, rgba(59,130,246,0.15), transparent 40%)` + `radial-gradient(circle at 90% 90%, rgba(34,197,94,0.1), transparent 40%)`
- Primary (azul): `#3B82F6`
- Accent (verde): `#22C55E`
- Promo green: `#00d4aa` / `#00f0c8` (gradientes)
- Glass card bg: `rgba(255,255,255,0.02)`
- Border glass: `rgba(255,255,255,0.08)`
- Text main: `#FFFFFF`
- Text muted: `#9CA3AF`
- Danger: `#EF4444`
- Warning: `#F59E0B`

**Tipografia:**
- Font: **Outfit** (Google Fonts) — `wght@300;400;500;600;700`
- NÃO usar Inter. Usar Outfit como no dashboard.

**Ícones:**
- Phosphor Icons (`https://unpkg.com/@phosphor-icons/web`)

**Efeitos (do dashboard):**
- Glass cards com `backdrop-filter: blur(12px)`
- Border radius: 20px nos cards, 12px nos botões
- Hover: `translateY(-4px)` + glow sutil
- Box shadow: `0 8px 32px rgba(0,0,0,0.5)`
- Botão primary: `box-shadow: 0 0 20px rgba(59,130,246,0.5)`

**Banner promo estilo** (inspiração do dashboard):
- Background: `linear-gradient(100deg, #0a0f1c, #0d1a2d, #0a1628, #081020)`
- Grid pattern overlay sutil
- Corner decorations com borders
- Badges com pill style (border-radius: 50px)

**Referências visuais para se inspirar:**
- Login: `/var/www/html/login/index.html` — split layout, gradiente azul escuro, glass effects
- Dashboard: `/var/www/html/dash/index.html` — glass cards, promo banners, sidebar
- Layout CSS: `/var/www/html/v2-assets/styles/layout.css` — design system completo
- Banner promo do dashboard: estilo "Comprando Rating Bancário, leva Limpa Nome Grátis"

- **Logo:** `assets/images/logo.png`
- **Hero image:** `assets/images/hero-woman.png`
- **Uma página HTML única**, completa, pronta pra usar
- **Todos os botões de ação** levam pra `https://www.credpositivo.com/cadastro`
- **Login** leva pra `https://www.credpositivo.com/login`
- **WhatsApp:** `https://api.whatsapp.com/send/?phone=5571936180654&text=Olá,+quero+saber+mais+sobre+o+CredPositivo`
- **Instagram:** @_credpositivo.com
- **CNPJ:** 35.030.967/0001-09
- **Arquivo final salvo em:** `/Users/igoremmanuel/Downloads/CredPositivo/landing-institucional.html`

---

## NAVEGAÇÃO

Links internos: Como funciona | Trilhas | Depoimentos | Afiliados | FAQ
Botões: [Entrar] → /login | [Cadastre-se] → /cadastro

---

## SEÇÃO 1 — HERO

**Badge:** +30 serviços especializados

**Headline:**
> Seu crédito travou. A gente destrava.

**Subheadline:**
> O CredPositivo é seu despachante financeiro digital. A gente analisa, resolve e evolui o seu perfil de crédito — pra você parar de ouvir "não" e começar a conquistar.

**CTA primário:** Fazer meu diagnóstico → /cadastro
**CTA secundário:** Como funciona → âncora

**Stats:**
- +30 serviços especializados
- 3 trilhas personalizadas
- 48h diagnóstico pronto

**Imagem:** hero-woman.png (especialista confiante, escritório moderno)
**Cards flutuantes:**
- Card 1: ✓ Diagnóstico completo / Pronto em 48h
- Card 2: ★ Perfil de crédito / Análise real

---

## SEÇÃO 2 — O PROBLEMA (agitação de dor)

**Label:** O problema
**Headline:**
> Você não é seu score. Mas seu score tá te definindo.

**Subtítulo:**
> A maioria das pessoas não entende por que o crédito é negado. Acham que é só o score. Mas os bancos olham muito mais que isso — e ninguém te conta.

**3 Cards de dor:**

**Card 1 — Nome sujo te travando**
> Pendências, restrições, negativações que você às vezes nem sabe que existem. Cada dia que passa, mais difícil resolver — e mais caro fica.

**Card 2 — Score alto, crédito negado**
> Seu score pode estar 700 e o banco ainda negar. Porque score é só um número. O que pesa é o perfil completo — e poucos sabem como melhorar.

**Card 3 — Limite ridículo, sem evolução**
> Cartão aprovado com R$200 de limite. Financiamento negado. Você sabe que merece mais, mas não sabe o caminho. A gente sabe.

---

## SEÇÃO 3 — COMO FUNCIONA (3 passos)

**Label:** Como funciona
**Headline:**
> Três passos pra destravar seu crédito

**Subtítulo:**
> Simples, direto e personalizado pro seu caso. Sem burocracia, sem enrolação.

**Passo 1 — Diagnóstico**
> Um raio-x completo do seu CPF. Mostra tudo que os bancos veem sobre você — inclusive o que você não sabia. Pronto em até 48 horas.

**Passo 2 — Plano personalizado**
> Com base no diagnóstico, montamos a trilha certa pro seu caso: regularizar, otimizar ou expandir. Cada situação tem seu caminho.

**Passo 3 — Resultado**
> Você evolui seu perfil de crédito de verdade. Nome limpo, perfil forte, mais limite, aprovação. Crédito que funciona pra você.

---

## SEÇÃO 4 — TRILHAS (3 cards)

**Label:** Nossas trilhas
**Headline:**
> Qual é a sua situação hoje?

**Subtítulo:**
> Cada caso é um caso. Por isso organizamos nossos serviços em 3 trilhas — pra você ir direto ao que precisa.

### Trilha 1: REGULARIZAÇÃO — Apagar o incêndio 🔥
> Pra quem tá com nome sujo, pendências ou restrições. O primeiro passo pra sair do vermelho e recomeçar.

Serviços:
- Limpeza de nome
- Negociação de pendências
- Remoção de apontamentos
- Orientação de quitação
- **Bônus: Cartão de crédito de parceiro ao concluir**

CTA: Começar regularização → /cadastro

### Trilha 2: OTIMIZAÇÃO — Arrumar a casa 🛠️
> Nome limpo, mas crédito travado? Limite baixo? A gente mostra o que os bancos realmente olham — e como melhorar.

Serviços:
- Rating bancário
- Ajuste cadastral
- Estratégia de movimentação
- Perfil de crédito completo
- **Bônus: Cartão de crédito via parceria com banco ao concluir**

CTA: Otimizar meu perfil → /cadastro

### Trilha 3: EXPANSÃO — Subir de nível 🚀
> Perfil ok, quer mais? Limite maior, financiamento aprovado, cartão premium. O próximo nível do seu crédito.

Serviços:
- Aumento de limite
- Aprovação de crédito
- Preparação pra financiamento
- Plano de evolução 30/60/90 dias

CTA: Expandir meu crédito → /cadastro

---

## SEÇÃO PROMO — BANNER DESTAQUE (estilo do dashboard, entre trilhas e serviços)

**Estilo visual:** Banner largo, gradiente escuro (#0a0f1c → #0d1a2d), brilho verde sutil, grid pattern overlay, bordas decorativas nos cantos. Mesmo estilo do promo banner do dashboard.

**Badge:** Oferta Especial

**Texto principal:**
> Limpou o nome? Ganhe um **cartão de crédito**.

**Subtexto:**
> Ao concluir a regularização ou o rating bancário, você ganha acesso a um cartão de crédito através da nossa parceria exclusiva com banco. Sem anuidade no primeiro ano.

**Destaque extra:**
> Comprando **Rating Bancário**, você leva o **Limpa Nome Grátis**

**CTA:** Aproveitar → /cadastro

---

## SEÇÃO 5 — SERVIÇOS (+30 tags)

**Label:** Serviços
**Headline:**
> Tudo que você precisa. Em um só lugar.

**Tags (pills/badges):**
Diagnóstico de Crédito | Limpa Nome | Rating Bancário | Aumento de Limite | Ajuste Cadastral | Negociação de Dívidas | Perfil de Crédito | Aprovação de Crédito | Consultoria Financeira | Remoção de Restrições | Estratégia Bancária | Preparação p/ Financiamento

**Rodapé:** E mais +18 outros serviços especializados dentro das trilhas.

---

## SEÇÃO 6 — DEPOIMENTOS

**Label:** Depoimentos
**Headline:**
> Quem já passou por aqui conta como foi

**Depoimento 1 — Rafael C. (Trilha Regularização) ★★★★★**
> "Tinha o nome sujo há 3 anos e não sabia nem por onde começar. O diagnóstico mostrou tudo que tava pesando. Em 40 dias, nome limpo e já consegui um cartão."

**Depoimento 2 — Amanda M. (Trilha Otimização) ★★★★★**
> "Meu nome tava limpo, mas não aprovavam nada. Descobri que meu perfil bancário era fraco. Com o rating, meu limite saiu de R$500 pra R$4.000 em 2 meses."

**Depoimento 3 — Lucas S. (Trilha Expansão) ★★★★★**
> "Queria financiar meu apartamento e o banco disse que meu perfil não era suficiente. Em 90 dias de plano, consegui a aprovação. Valeu cada centavo."

---

## SEÇÃO 7 — PROGRAMA DE AFILIADOS

**Label:** Programa de afiliados
**Headline:**
> Indique. Ajude. Ganhe.

**Subtítulo:**
> Conhece alguém que precisa destravar o crédito? Indique o CredPositivo e ganhe comissões reais por cada venda.

**Benefício 1 — Comissões de 30% a 50%**
> Quanto mais indicações, maior sua comissão. Ganhos reais, pagamentos pontuais.

**Benefício 2 — Link personalizado**
> Receba seu link exclusivo e acompanhe cada indicação no painel do afiliado.

**Benefício 3 — Suporte e materiais**
> A gente te dá tudo que precisa: copy pronta, artes e suporte dedicado.

**Card visual:** 30–50% por cada cliente que você indicar
**CTA:** Quero ser afiliado → /cadastro

---

## SEÇÃO 8 — FAQ (accordion)

**Label:** Dúvidas frequentes
**Headline:**
> Tudo que você precisa saber antes de começar

**P: O que é o diagnóstico de crédito?**
> É um raio-x completo do seu CPF. A gente analisa tudo que os bancos veem sobre você: pendências, restrições, perfil bancário, histórico de crédito. Em até 48 horas, você recebe um relatório detalhado com plano de ação personalizado.

**P: Vocês garantem aprovação de crédito?**
> Não prometemos resultado específico — cada caso é único. O que garantimos é uma análise profissional e completa, com um plano claro e personalizado pro seu caso. A maioria dos nossos clientes vê resultados concretos seguindo o plano.

**P: Quanto tempo leva pra limpar o nome?**
> Depende de cada caso. Em geral, o processo leva de 30 a 90 dias. O diagnóstico mostra exatamente o que precisa ser feito e qual o prazo estimado pro seu caso específico.

**P: Preciso de muitos documentos?**
> Não. É bem simples: CPF e alguns dados básicos. Sem papelada, sem cartório, sem fila. Tudo 100% online — você faz pelo celular mesmo.

**P: É confiável? Como sei que não é golpe?**
> Entendemos a preocupação. O CredPositivo é empresa registrada — CNPJ 35.030.967/0001-09. Você pode pesquisar, ver avaliações de clientes e tirar todas as dúvidas antes de qualquer decisão. Trabalhamos com total transparência.

**P: Qual a diferença do CredPositivo pro Serasa?**
> O Serasa te mostra o score e as dívidas. A gente vai além: analisa o que os bancos realmente olham quando você pede crédito. Score alto nem sempre significa aprovação. O CredPositivo mostra o porquê e resolve de verdade.

**P: Como funciona o programa de afiliados?**
> Você se cadastra, recebe seu link exclusivo e indica o CredPositivo. Cada venda feita pela sua indicação gera uma comissão de 30% a 50%. Você acompanha tudo pelo painel do afiliado e recebe pagamentos pontuais.

---

## SEÇÃO 9 — CTA FINAL

**Label:** Comece agora
**Headline:**
> Seu crédito não vai se destravar sozinho.

**Subtítulo:**
> O diagnóstico é o primeiro passo. Em 48 horas, você descobre tudo que tá pesando e recebe um plano feito pro seu caso.

**CTA primário:** Fazer meu diagnóstico → /cadastro
**CTA secundário:** Falar com especialista → WhatsApp

**Linha de confiança:** CNPJ 35.030.967/0001-09 · 100% online · Sem burocracia

---

## FOOTER

**Marca:** Logo + "Seu despachante financeiro digital. A gente resolve, otimiza e evolui o seu crédito — pra você conquistar o que merece."

**Colunas:**
- Trilhas: Regularização | Otimização | Expansão | Diagnóstico (todos → /cadastro)
- Empresa: Como funciona | Depoimentos | Afiliados | FAQ (âncoras)
- Acesso: Cadastre-se → /cadastro | Login → /login | Termos de uso → /terms.html | Privacidade → /privacy.html

**Rodapé:** © 2026 CredPositivo. Todos os direitos reservados. CNPJ 35.030.967/0001-09
**Social:** Instagram | WhatsApp

---

## ELEMENTO FLUTUANTE

**WhatsApp float** (canto inferior direito) → link do WhatsApp

---

## NOTAS ESTRATÉGICAS DO ANDRÉ

**Nível de consciência alvo:** Mix — a landing precisa atender desde Nível 2 (sabe que tem problema) até Nível 5 (quer comprar).

**Cérebros usados:**
- **Halbert** → Headlines de impacto, primeira frase que puxa a segunda, CTAs diretos, P.S. na seção final
- **Ogilvy** → Prova social, números, CNPJ, autoridade sem arrogância, especificidade
- **Schwartz** → Seções organizadas por nível de consciência crescente: Problema → Solução → Trilhas → Prova → Oferta → Objeções → CTA

**Princípios aplicados:**
- Uma dor por seção, nunca mistura trilhas
- CTA claro em cada seção
- Tom: conversa, não propaganda
- Diferenciação clara do Serasa e serviços genéricos
- Mecanismo único: "diagnóstico + trilha personalizada"
