# Funil de Email Marketing — CredPositivo

**Versao:** 1.0
**Data:** 2026-03-08
**Autor:** Andre (Copywriter Estrategico)
**Objetivo:** Converter leads do quiz que nao converteram via WhatsApp

---

## Sumario

- [Visao Geral do Funil](#visao-geral-do-funil)
- [Fluxo A — Score Critico](#fluxo-a--score-critico)
- [Fluxo B — Score Atencao](#fluxo-b--score-atencao)
- [Fluxo C — Score Preventivo](#fluxo-c--score-preventivo)
- [Notas de Implementacao](#notas-de-implementacao)

---

## Visao Geral do Funil

### Segmentacao

| Fluxo | Perfil | Nivel de Consciencia (Schwartz) | Dor Central | Tom |
|-------|--------|--------------------------------|-------------|-----|
| A — Critico | Nome sujo, divida alta, negativado | Nivel 2 (Consciente do Problema) | "Nao consigo comprar nada, to travado" | Alivio, urgencia real, esperanca |
| B — Atencao | Alguma restricao, quer credito | Nivel 3 (Consciente da Solucao) | "Quero credito mas nao consigo aprovacao" | Frustracao, empoderamento |
| C — Preventivo | Nome limpo, quer melhorar | Nivel 2-3 (Consciente do Problema/Solucao) | "Quero limite maior, financiamento" | Ambicao, proximo nivel |

### Cadencia

| Email | Disparo | Proposito | Framework |
|-------|---------|-----------|-----------|
| 1 | D+0 | Resultado do diagnostico + urgencia | PAS |
| 2 | D+1 | Educacao: rating bancario vs score | Hook-Story-Offer |
| 3 | D+2 | Caso de sucesso / prova social | Story-driven (Halbert) |
| 4 | D+3 | Destruir objecao principal | PAS + Reason Why |
| 5 | D+5 | Escassez + oferta especial | AIDA Hormozi |
| 6 | D+7 | Ultima chance | Urgencia + Prova |
| 7 | D+10 | Reengajamento | Curiosidade + Novo angulo |

### Variaveis de personalizacao

- `{{nome}}` — primeiro nome do lead
- `{{score}}` — score informado no quiz
- `{{nivel}}` — critico / atencao / preventivo
- `{{valor_divida}}` — valor da divida (quando aplicavel)
- `{{link_whatsapp}}` — link para conversa com assessor no WhatsApp

### CTA padrao (todos os emails)

O CTA principal sempre direciona para o WhatsApp do assessor financeiro premium com mensagem pre-preenchida.

Formato do link:
```
https://api.whatsapp.com/send?phone=5521971364221&text=Oi%2C%20vim%20pelo%20email%20e%20quero%20saber%20mais%20sobre%20o%20diagnostico%20completo
```

---

## Fluxo A — Score Critico

**Perfil:** Nome sujo, divida alta, restricoes ativas.
**Trilha do CredPositivo:** Regularizacao (Apagar Incendio).
**Emocao dominante:** Vergonha, ansiedade, sensacao de estar travado.
**Desejo canalizado:** Alivio, recomeco, poder comprar de novo, dignidade.

---

### A1 — Email 1 (D+0): Resultado do Diagnostico + Urgencia

**Subject:** {{nome}}, seu diagnostico de credito ficou pronto

**Preview:** Seu perfil foi classificado como Critico. Veja o que isso significa (e o que fazer agora).

---

{{nome}}, tudo bem?

Voce fez o diagnostico de credito no CredPositivo e eu preciso ser direto com voce.

Seu perfil foi classificado como **Critico**.

Isso nao e uma sentenca. Nao e o fim. Mas e um sinal claro de que voce precisa agir — e agir logo.

Vou te explicar o que isso significa na pratica:

**O que "Critico" quer dizer:**

- Voce tem restricoes ativas vinculadas ao seu CPF
- Seu score esta em {{score}} — abaixo do minimo que bancos e financeiras consideram para aprovar qualquer tipo de credito
- Cada dia que essas restricoes continuam registradas, seu perfil de credito se deteriora mais

Talvez voce ja saiba de tudo isso. Talvez ja tenha tentado resolver sozinho. Talvez ja tenha ligado pra algum lugar, ouvido que "e so negociar" e ficou sem saber por onde comecar.

O problema e que limpar o nome e so o primeiro passo. Mesmo depois de quitar uma divida, seu perfil nos biroes de credito continua comprometido se voce nao fizer o processo certo.

E ai voce quita, acha que resolveu, tenta pedir um cartao... e recebe outro "credito negado".

**Existe um caminho mais inteligente.**

No CredPositivo, a gente nao oferece formula magica. A gente faz um diagnostico completo do seu CPF, identifica exatamente o que esta travando seu credito, e monta um plano personalizado pra resolver — passo a passo.

Resultado em ate 20 dias uteis. E o investimento e menor do que a maioria das dividas que estao pesando no seu nome: **R$97**.

Se voce quiser entender como funciona, seu assessor financeiro premium pode te explicar tudo em poucos minutos pelo WhatsApp. Ele vai te guiar em cada etapa do processo.

Sem compromisso. Sem pressao. So uma conversa pra voce entender suas opcoes.

**[Quero falar com meu assessor pelo WhatsApp]({{link_whatsapp}})**

Ate breve,
Equipe CredPositivo

P.S. — Quanto mais tempo as restricoes ficam ativas no seu CPF, mais dificil fica a recuperacao. Nao e pra te assustar — e pra te informar. Se for agir, quanto antes, melhor.

---

### A2 — Email 2 (D+1): Educacao sobre Rating Bancario vs Score

**Subject:** Voce sabe a diferenca entre score e rating bancario?

**Preview:** A maioria das pessoas foca no score. Mas o rating e o que realmente decide se voce vai ser aprovado.

---

{{nome}},

Vou te contar uma coisa que quase ninguem fala.

Voce provavelmente ja ouviu sobre score de credito. Aquele numero que vai de 0 a 1000. Muita gente fica obcecada com ele — consulta todo dia, baixa aplicativo, tenta "aumentar o score".

Mas existe um outro indicador que os bancos usam pra decidir se vao te aprovar ou nao. E esse, quase ninguem conhece.

Chama **rating bancario**.

**Qual a diferenca?**

- **Score** e uma nota generica, calculada pelos biroes de credito com base no seu historico publico. E como uma "nota de reputacao" geral.
- **Rating bancario** e a forma como os bancos te classificam internamente. Leva em conta como voce movimenta sua conta, se tem relacionamento ativo, seu comportamento financeiro real.

Uma pessoa pode ter score 700 e rating bancario ruim.
Outra pode ter score 500 e rating bancario razoavel.

**Por que isso importa pra voce?**

Porque quem esta com restricoes ativas tem os dois comprometidos. E quando voce quita uma divida sem estrategia, pode limpar o score aos poucos... mas o rating continua travado.

Resultado: voce acha que limpou o nome, mas continua sem conseguir credito.

No CredPositivo, o diagnostico completo avalia os dois — score e rating. E o plano personalizado trabalha os dois ao mesmo tempo.

Essa e uma das razoes pelas quais nossos clientes conseguem resultados que quem tenta resolver sozinho nao consegue. Nao e so sobre "tirar o nome da lista". E sobre reconstruir seu perfil de credito inteiro.

Se voce quer entender como seu rating esta hoje e o que pode ser feito, seu assessor financeiro premium pode te mostrar.

**[Falar com seu assessor financeiro premium no WhatsApp]({{link_whatsapp}})**

Ate amanha,
Equipe CredPositivo

P.S. — Nenhum concorrente nosso trabalha o rating bancario. A maioria nem menciona isso. Esse e o diferencial que faz a diferenca real no seu credito.

---

### A3 — Email 3 (D+2): Caso de Sucesso / Prova Social

**Subject:** Ela devia R$23 mil e achou que nunca ia sair dessa

**Preview:** A historia da Carla mostra que sair do vermelho e mais rapido do que parece — quando voce tem o plano certo.

---

{{nome}},

Quero te contar a historia da Carla. (Nome ficticio, historia real.)

Carla tinha 3 restricoes no CPF. Divida total: R$23 mil. Score: 287.

Ela ja tinha tentado de tudo. Ligou pra operadora de telefone que tinha cobrado errado. Tentou negociar pelo app do banco. Ate pagou uma empresa que prometeu "limpar o nome em 48 horas" — e nao fez nada.

Quando chegou no CredPositivo, ela estava desanimada. A frase que ela disse na primeira conversa foi: "Ja aceitei que vou viver assim."

Nosso assessor fez o diagnostico completo. Descobriu que:

- Uma das 3 restricoes estava **irregular** — podia ser contestada
- Outra ja tinha **prescrito** — nao deveria mais constar
- A terceira era real, mas podia ser negociada por um valor muito menor do que Carla imaginava

Em 18 dias uteis, Carla saiu de score 287 pra 612. As duas restricoes indevidas foram removidas. A terceira foi negociada e quitada.

Hoje, 4 meses depois, Carla tem um cartao de credito com limite de R$2.500 e esta planejando financiar um carro.

**O que mudou?**

Nao foi magica. Foi diagnostico correto + plano personalizado + execucao profissional.

A maioria das pessoas que estao com restricoes nem sabe exatamente o que consta no CPF delas. Nem sabe que algumas cobranças podem estar irregulares. Nem sabe que existe prazo legal de prescricao.

O diagnostico do CredPositivo revela tudo isso. Por R$97.

Se a Carla nao tivesse dado esse passo, ela ainda estaria achando que "ia viver assim".

{{nome}}, voce nao precisa viver assim.

**[Quero meu diagnostico completo — falar com seu assessor financeiro premium]({{link_whatsapp}})**

Ate logo,
Equipe CredPositivo

P.S. — O caso da Carla nao e excecao. A maioria dos nossos clientes com perfil Critico tem pelo menos uma restricao que pode ser contestada ou resolvida de forma mais inteligente do que imaginavam.

---

### A4 — Email 4 (D+3): Destruir Objecao Principal

**Subject:** "R$97 pra quem ta devendo? Nao faz sentido."

**Preview:** Eu entendo esse pensamento. Mas vou te mostrar por que ele pode estar te custando muito mais.

---

{{nome}},

Eu sei o que voce pode estar pensando.

"Eu ja estou devendo. Tenho divida. E voces querem que eu gaste R$97?"

Faz sentido pensar assim. De verdade. Se eu estivesse na sua situacao, provavelmente pensaria a mesma coisa.

Mas deixa eu te mostrar o outro lado.

**Quanto voce ja perdeu por estar com o credito travado?**

Pensa comigo:

- Quantas vezes voce quis comprar algo e nao conseguiu?
- Quantas vezes pagou mais caro porque so podia comprar a vista — ou pior, no cartao de outra pessoa?
- Quanto de juros voce ja pagou (ou esta pagando) em dividas que poderiam ter sido negociadas por menos?
- Quantas oportunidades de emprego, aluguel ou financiamento voce perdeu?

O custo de nao resolver e muito maior que R$97. E ele cresce todo mes.

**O que voce recebe por R$97:**

1. Diagnostico completo do seu CPF — tudo que consta, o que e valido, o que pode ser contestado
2. Analise do seu rating bancario — como os bancos te enxergam de verdade
3. Plano personalizado de regularizacao — passo a passo, com prazo real
4. Acompanhamento especializado — voce nao faz isso sozinho
5. **Black Card CredPositivo** — um cartao sem anuidade como recompensa por dar o primeiro passo

Nao e um gasto. E o investimento mais barato que voce pode fazer pra sair de onde voce esta.

Pensa assim: voce nao esta pagando R$97 pra "limpar o nome". Voce esta pagando R$97 pra ter um profissional olhando pro seu CPF e te dizendo exatamente o que fazer, em qual ordem, e em quanto tempo.

E como ir no medico quando voce esta com dor. Voce nao fica tentando se diagnosticar pelo Google pra sempre. Uma hora, voce precisa de um profissional.

Seu assessor financeiro premium pode te explicar tudo isso em detalhes. Sem compromisso.

**[Quero entender melhor — falar com seu assessor financeiro premium]({{link_whatsapp}})**

Ate mais,
Equipe CredPositivo

P.S. — O Black Card e um cartao de credito sem anuidade que voce recebe ao contratar o diagnostico. Mesmo que voce nao tenha credito aprovado em lugar nenhum agora, esse cartao e seu. Considere ele como o primeiro passo concreto da sua reconstrucao.

---

### A5 — Email 5 (D+5): Escassez + Oferta Especial

**Subject:** {{nome}}, reservei uma condicao especial pra voce

**Preview:** Essa semana, o diagnostico completo vem com um bonus que normalmente nao oferecemos.

---

{{nome}},

Nos ultimos dias, te mandei alguns emails explicando como o CredPositivo pode te ajudar a sair da situacao que voce esta.

Hoje, vou ser breve e direto.

Consegui reservar com seu assessor financeiro premium uma condicao especial pra voce. Mas com uma limitacao: vale ate o final dessa semana.

**A oferta:**

- Diagnostico completo do seu CPF — R$97 (valor normal, nao inflamos preco pra dar desconto)
- Plano personalizado de regularizacao — incluso
- Black Card sem anuidade — incluso
- **Bonus: acompanhamento prioritario por 30 dias** — voce fica na fila prioritaria do seu assessor

Esse acompanhamento prioritario normalmente e reservado pra quem contrata pacotes acima de R$200. Mas como voce ja fez o diagnostico inicial no quiz e demonstrou interesse, foi liberado pra voce essa semana.

**Por que essa semana?**

Porque seu assessor financeiro premium atende cada cliente de forma personalizada. Sem robos, sem terceirizacao. A capacidade e limitada. Quando os horarios da semana enchem, enchem. Sem drama, sem manipulacao — e logistica.

Se voce ja pensou em resolver, essa e a melhor janela.

**[Aproveitar a condicao especial — falar com seu assessor financeiro premium]({{link_whatsapp}})**

Sem mais,
Equipe CredPositivo

P.S. — Voce nao precisa decidir nada agora. So precisa iniciar a conversa com seu assessor. Ele vai te explicar tudo, responder suas duvidas, e voce decide depois. Mas a condicao especial precisa ser ativada essa semana.

---

### A6 — Email 6 (D+7): Ultima Chance

**Subject:** Ultimo aviso sobre sua condicao especial

**Preview:** Depois de hoje, o bonus de acompanhamento prioritario volta ao valor normal.

---

{{nome}},

Esse e o ultimo email que vou te mandar sobre a condicao especial.

Depois de hoje, o bonus de acompanhamento prioritario que foi reservado pra voce volta ao formato normal — disponivel apenas em pacotes acima de R$200.

Nao vou repetir tudo que ja te expliquei nos emails anteriores. Voce ja sabe:

- Seu perfil foi classificado como Critico
- Quanto mais tempo as restricoes ficam ativas, pior fica
- Existe uma diferenca entre score e rating, e os dois precisam ser trabalhados
- O diagnostico completo custa R$97 e inclui plano personalizado + Black Card

O que eu quero te dizer hoje e mais simples.

**A unica diferenca entre quem resolve e quem continua reclamando e o primeiro passo.**

Eu nao sei qual e a sua situacao completa. Nao sei o tamanho da sua divida real, nem quantas restricoes voce tem, nem quais sao validas e quais nao sao.

Mas seu assessor financeiro premium pode descobrir tudo isso em poucos minutos de conversa.

Se voce vai agir, age hoje.

**[Falar com meu assessor agora]({{link_whatsapp}})**

Equipe CredPositivo

P.S. — Se hoje nao for o dia, tudo bem. Voce continua na nossa lista e vai receber conteudos uteis sobre credito. Mas a condicao especial com acompanhamento prioritario encerra hoje.

---

### A7 — Email 7 (D+10): Reengajamento

**Subject:** Uma pergunta rapida, {{nome}}

**Preview:** Nao vou te oferecer nada. So quero entender uma coisa.

---

{{nome}},

Faz uns dias que te mandei o resultado do seu diagnostico de credito.

Voce viu os emails, entendeu a situacao, mas nao deu o proximo passo. E tudo bem. Cada pessoa tem seu tempo.

Mas eu fiquei curioso sobre uma coisa. E queria te fazer uma pergunta honesta:

**O que te impediu de dar o proximo passo?**

Pode ser qualquer motivo:

- "Nao e o momento financeiro" — entendo, e R$97 pode pesar quando voce ja esta no aperto
- "Nao confio que funciona" — faz sentido, tem muita empresa por ai que promete e nao entrega
- "Vou tentar resolver sozinho" — respeito, muita gente consegue (mas muita gente tambem perde tempo e dinheiro tentando)
- "Esqueci" — acontece, a vida e corrida

Seja qual for o motivo, eu gostaria de saber. Voce pode simplesmente responder esse email com uma palavra ou frase curta.

Isso me ajuda a entender melhor como ajudar pessoas na mesma situacao que voce.

E se em algum momento voce quiser retomar a conversa, seu assessor financeiro premium continua disponivel. Sem condicao especial, sem bonus extra — mas com o mesmo diagnostico completo de R$97 que pode mudar a trajetoria do seu credito.

**[Se quiser retomar, e so chamar seu assessor]({{link_whatsapp}})**

Cuide-se,
Equipe CredPositivo

P.S. — Uma coisa que eu aprendi trabalhando com credito: o problema nunca se resolve sozinho. Ele fica igual ou piora. Se voce decidir agir daqui 1 mes, 3 meses ou 6 meses, a gente vai estar aqui. Mas o custo de esperar e sempre do seu lado.

---
---

## Fluxo B — Score Atencao

**Perfil:** Alguma restricao ou historico negativo recente, quer acesso a credito.
**Trilha do CredPositivo:** Otimizacao (Arrumar a Casa) ou Regularizacao leve.
**Emocao dominante:** Frustracao, confusao ("por que nao aprovam?"), impaciencia.
**Desejo canalizado:** Conseguir aprovacao, ter limite decente, parar de passar vergonha.

---

### B1 — Email 1 (D+0): Resultado do Diagnostico + Urgencia

**Subject:** {{nome}}, seu diagnostico de credito ficou pronto

**Preview:** Seu perfil esta em zona de Atencao. Nao e critico, mas precisa de acao. Entenda o que esta acontecendo.

---

{{nome}}, tudo bem?

Voce fez o diagnostico de credito no CredPositivo e quero te passar o resultado de forma clara.

Seu perfil foi classificado como **Atencao**.

O que isso significa na pratica?

Voce nao esta na pior situacao possivel. Mas tambem nao esta na posicao que precisa pra conseguir o credito que quer.

**Perfil "Atencao" geralmente significa uma ou mais dessas situacoes:**

- Voce tem (ou teve recentemente) alguma restricao no CPF que ainda pesa no seu historico
- Seu score esta em {{score}} — uma faixa onde bancos e financeiras consideram voce "risco medio"
- Voce ja limpou o nome mas seu perfil ainda nao se recuperou
- Voce tem nome limpo mas o rating bancario esta comprometido por outros motivos

O resultado: voce tenta pedir cartao, tenta financiamento, tenta um emprestimo... e recebe aquele email generico dizendo "no momento nao podemos aprovar".

Sem explicacao. Sem saber o que fazer diferente.

**Esse e exatamente o problema que a gente resolve.**

O diagnostico completo do CredPositivo identifica o que esta travando seu credito. Nao o que voce acha que esta travando — o que realmente esta. As vezes, e algo que voce nem imagina.

E a partir disso, montamos um plano personalizado pra destravar.

Prazo: ate 20 dias uteis. Investimento: R$97.

Se quiser entender como funciona, seu assessor financeiro premium te explica tudo pelo WhatsApp.

**[Quero falar com meu assessor]({{link_whatsapp}})**

Ate amanha,
Equipe CredPositivo

P.S. — O perfil "Atencao" e o mais comum entre nossos clientes. E tambem o que tem resolucao mais rapida, porque normalmente sao ajustes especificos — nao uma reconstrucao total. Mas so da pra saber com o diagnostico completo.

---

### B2 — Email 2 (D+1): Educacao sobre Rating Bancario vs Score

**Subject:** Por que seu credito e negado mesmo com nome limpo

**Preview:** O score nao e o unico fator. Existe algo que os bancos analisam e quase ninguem sabe.

---

{{nome}},

Se voce ja tentou pedir credito e recebeu um "nao" sem explicacao, presta atencao no que eu vou te contar.

A maioria das pessoas acha que credito funciona assim:

- Nome limpo + score alto = aprovacao
- Nome sujo + score baixo = negado

Mas nao e tao simples.

Existem pessoas com score acima de 700 que sao negadas. E existem pessoas com score 500 que conseguem aprovacao.

**Como isso e possivel?**

Porque os bancos nao olham so o score. Eles olham o **rating bancario**.

O score e uma nota publica, calculada pelos biroes de credito. Todo mundo tem acesso.

O rating bancario e a classificacao interna que os bancos fazem de voce. E leva em conta coisas como:

- Voce tem conta ativa em banco? Ha quanto tempo?
- Voce movimenta essa conta com regularidade?
- Voce tem algum produto financeiro (cartao, seguro, investimento)?
- Seu historico de relacionamento com aquele banco especifico e positivo?

Voce pode ter score 650, nome limpo, zero dividas... e mesmo assim ter rating bancario fraco porque nunca construiu relacionamento com nenhum banco. Ou porque fechou uma conta de forma errada. Ou porque ficou anos sem movimentar.

**O CredPositivo e o unico servico que trabalha os dois: score e rating.**

Quando seu assessor faz o diagnostico completo, ele mapeia nao so suas restricoes e score, mas tambem como os bancos estao te enxergando. E o plano personalizado trabalha os dois lados ao mesmo tempo.

Isso e o que faz a diferenca entre "limpar o nome e continuar sendo negado" e "limpar o nome e finalmente conseguir credito".

**[Quero entender meu rating — falar com seu assessor financeiro premium]({{link_whatsapp}})**

Equipe CredPositivo

P.S. — Se voce ja limpou o nome no passado e ficou frustrado porque "nao mudou nada", provavelmente o problema era o rating. E ninguem te falou isso.

---

### B3 — Email 3 (D+2): Caso de Sucesso / Prova Social

**Subject:** "Tentei 4 vezes pedir cartao. Na 5a vez, fiz diferente."

**Preview:** O que o Marcos fez antes de pedir credito pela ultima vez — e por que dessa vez funcionou.

---

{{nome}},

O Marcos (nome ficticio, historia real) tinha nome limpo. Score 580. Zero dividas.

E mesmo assim, foi negado 4 vezes seguidas.

Cartao no banco digital: negado.
Financiamento de moto: negado.
Cartao em loja: negado.
Emprestimo pessoal: negado.

Ele nao entendia. "Meu nome ta limpo, nao devo nada. O que mais eles querem?"

Quando chegou no CredPositivo, nosso assessor fez o diagnostico e encontrou o problema em 15 minutos.

**O que estava errado:**

1. Marcos tinha uma conta bancaria antiga que ele abandonou sem fechar. Essa conta tinha um debito de R$12 de tarifa que virou uma negativacao minuscula — que ele nem sabia que existia
2. Seu rating bancario era praticamente inexistente. Ele nunca teve cartao, nunca financiou nada, nunca construiu historico
3. Seu cadastro nos biroes estava desatualizado — endereco antigo, telefone errado, renda nao informada

Nenhum app de score mostra isso. Nenhum.

**O que o CredPositivo fez:**

- Identificou e resolveu a negativacao oculta (3 dias)
- Montou uma estrategia de construcao de rating: qual banco abrir conta, que tipo de movimentacao fazer, em qual ordem
- Atualizou o cadastro dele em todos os biroes relevantes

Em 25 dias, Marcos pediu um cartao de credito no mesmo banco que tinha negado antes.

Aprovado. Limite inicial: R$1.800.

Tres meses depois, limite de R$4.500.

**O que mudou nao foi o Marcos. Foi a estrategia.**

Se voce esta passando pela mesma frustracao — nome limpo, score razoavel, mas sempre negado — existe uma boa chance de que o problema seja algo que voce nao esta vendo.

O diagnostico completo revela isso. R$97.

**[Quero descobrir o que esta me travando — falar com seu assessor financeiro premium]({{link_whatsapp}})**

Equipe CredPositivo

P.S. — A negativacao oculta do Marcos era de R$12. Doze reais. E estava travando a vida financeira dele ha meses. Voce sabe se tem algo parecido no seu CPF?

---

### B4 — Email 4 (D+3): Destruir Objecao Principal

**Subject:** "Eu consigo resolver isso sozinho, ne?"

**Preview:** Talvez. Mas vou te mostrar o que geralmente acontece quando a pessoa tenta sozinha.

---

{{nome}},

Uma das coisas que eu mais ouco de pessoas com perfil parecido com o seu e:

"Eu consigo resolver isso sozinho. E so limpar o nome e esperar o score subir."

E olha, em alguns casos, sim. Se voce tem uma unica restricao simples, sabe exatamente o que deve, e consegue negociar direto com o credor... da pra resolver sozinho.

Mas na pratica, o que eu vejo acontecer na maioria das vezes e diferente.

**O ciclo de quem tenta sozinho:**

1. Consulta o score num app gratuito
2. Ve que tem uma ou duas restricoes
3. Tenta negociar (geralmente pelo app do banco ou do biroes)
4. Aceita a primeira proposta de negociacao (que quase nunca e a melhor)
5. Paga. Limpa o nome.
6. Espera o score subir
7. Pede credito
8. E negado de novo
9. Fica sem entender por que
10. Desiste ou repete o ciclo

Por que isso acontece? Porque resolver restricao e uma coisa. Construir perfil de credito e outra completamente diferente.

**O que voce nao consegue fazer sozinho (ou so consegue com muito tempo e tentativa e erro):**

- Descobrir se uma restricao pode ser contestada legalmente (muitas podem)
- Saber qual proposta de negociacao aceitar e qual recusar
- Entender como seu rating bancario esta e o que fazer pra melhorar
- Saber em qual banco abrir conta, que produtos contratar, como movimentar
- Ter um plano com prazo e etapas claras

Isso nao e vergonha nenhuma. Voce nao e financista. Voce nao trabalha com credito.

E por isso que existe o CredPositivo.

Pensa assim: voce sabe trocar o pneu do carro? Talvez. Mas voce sabe fazer a revisao completa do motor? Provavelmente nao. E quando o carro precisa de revisao, voce leva no mecanico.

O CredPositivo e o mecanico do seu credito. Por R$97, voce tem um diagnostico completo e um plano. O que voce faz com o plano depois e decisao sua.

**[Quero o diagnostico profissional — falar com seu assessor financeiro premium]({{link_whatsapp}})**

Equipe CredPositivo

P.S. — Ah, e quando voce contrata o diagnostico, voce ainda recebe o Black Card — um cartao de credito sem anuidade. Mesmo que voce nao tenha credito aprovado em nenhum lugar, esse cartao e seu. Ja e um comeco concreto.

---

### B5 — Email 5 (D+5): Escassez + Oferta Especial

**Subject:** {{nome}}, uma condicao que liberei pra essa semana

**Preview:** O diagnostico de R$97 essa semana vem com acompanhamento prioritario incluso. Entenda por que.

---

{{nome}},

Vou ser direto porque acredito que voce prefere assim.

Essa semana, seu assessor financeiro premium esta com vagas abertas pra atendimento prioritario. Isso significa que quem contratar o diagnostico completo agora recebe um bonus que normalmente so esta disponivel em pacotes acima de R$200.

**O que voce recebe:**

- Diagnostico completo do CPF: restricoes, cadastro, rating bancario — R$97
- Plano personalizado de acao com prazo de ate 20 dias uteis — incluso
- Black Card sem anuidade — incluso
- **Bonus: acompanhamento prioritario por 30 dias** — normalmente R$150 avulso

O acompanhamento prioritario significa que seu assessor nao so monta o plano — ele acompanha a execucao com voce. Te avisa quando o rating mudar, te orienta quando um banco fizer contato, te diz exatamente quando e como pedir credito.

**Por que essa semana?**

Porque seu assessor trabalha com capacidade limitada. Atende cada cliente de forma personalizada — nao e call center, nao e chatbot. Quando os horarios da semana preenchem, a fila volta ao normal.

Nao to inventando escassez. E logistica.

Se voce ja pensou em resolver — mesmo que nao tenha certeza — essa e uma boa janela pra pelo menos conversar com ele e entender suas opcoes.

**[Garantir condicao especial — falar com seu assessor financeiro premium]({{link_whatsapp}})**

Equipe CredPositivo

P.S. — Voce nao precisa contratar nada na conversa. Pode so tirar duvidas. Mas a condicao do acompanhamento prioritario vale ate o final da semana.

---

### B6 — Email 6 (D+7): Ultima Chance

**Subject:** Encerramento da condicao especial

**Preview:** Depois de hoje, o acompanhamento prioritario volta ao valor normal. Esse e o ultimo aviso.

---

{{nome}},

Curto e direto.

O bonus de acompanhamento prioritario que foi liberado pra voce encerra hoje.

A partir de amanha, o diagnostico completo continua disponivel por R$97 — com plano personalizado e Black Card. Isso nao muda.

O que muda e que o acompanhamento de 30 dias com seu assessor volta a ser cobrado separadamente.

Sei que voce recebeu varios emails meus essa semana. Nao vou repetir tudo.

So vou te deixar com um pensamento:

Seu perfil esta em "Atencao". Nao esta critico, mas tambem nao esta te levando onde voce quer. Cada mes que passa sem acao e um mes a mais sem credito, sem limite, sem aprovacao.

O diagnostico custa menos que uma pizza por semana durante um mes. E pode destravar coisas que estao te custando muito mais.

Se for agir, age hoje.

**[Falar com meu assessor agora]({{link_whatsapp}})**

Equipe CredPositivo

---

### B7 — Email 7 (D+10): Reengajamento

**Subject:** Posso te fazer uma pergunta, {{nome}}?

**Preview:** Sem oferta, sem urgencia. So uma duvida sincera.

---

{{nome}},

Faz alguns dias que te mandei o resultado do seu diagnostico de credito.

Voce viu a situacao. Entendeu o que e score e rating. Conheceu a oferta. E decidiu nao seguir. Respeito totalmente.

Mas eu tenho uma curiosidade genuina. Se voce pudesse responder com uma frase curta, me ajudaria muito:

**O que faria voce dar o proximo passo?**

Alguns motivos que ouco com frequencia:

- "Se fosse mais barato" — entendo, R$97 pesa quando o orcamento ta apertado
- "Se eu tivesse certeza que funciona" — faz sentido, muita promessa vazia no mercado
- "Se eu tivesse tempo" — a correria do dia a dia engole tudo
- "Ja to cuidando disso de outro jeito" — otimo, se estiver funcionando
- "Simplesmente esqueci" — a vida acontece

Pode responder esse email. Leva 10 segundos. E me ajuda a entender como melhorar o servico pra pessoas como voce.

E independente da resposta: se em algum momento voce quiser conversar com seu assessor, ele continua disponivel. Sem condicao especial, sem pressao — so o diagnostico completo de R$97.

**[Se quiser retomar a conversa com seu assessor]({{link_whatsapp}})**

Cuide-se,
Equipe CredPositivo

P.S. — Uma informacao util, independente de voce contratar ou nao: mantenha seu cadastro atualizado nos biroes de credito. Endereco, telefone, renda. Isso sozinho ja ajuda um pouco no seu rating. Vai no site de cada biroes e atualiza. E de graca.

---
---

## Fluxo C — Score Preventivo

**Perfil:** Nome limpo, score razoavel, quer melhorar credito, aumentar limite, preparar-se pra financiamento.
**Trilha do CredPositivo:** Expansao (Subir de Nivel) ou Otimizacao.
**Emocao dominante:** Ambicao, frustracao com limites baixos, vontade de conquistar mais.
**Desejo canalizado:** Limite alto, financiamento aprovado, cartao premium, reconhecimento financeiro.

---

### C1 — Email 1 (D+0): Resultado do Diagnostico + Urgencia

**Subject:** {{nome}}, seu diagnostico de credito ficou pronto

**Preview:** Seu perfil esta em zona Preventiva. A boa noticia: voce esta no caminho certo. A ma noticia: voce pode estar travado sem saber.

---

{{nome}}, tudo bem?

Voce fez o diagnostico de credito no CredPositivo e tenho boas noticias.

Seu perfil foi classificado como **Preventivo**.

Isso significa que voce nao esta em crise. Seu nome esta limpo, seu score esta em {{score}}, e voce nao tem restricoes graves.

Mas antes de voce fechar esse email achando que esta tudo resolvido, deixa eu te mostrar uma coisa.

**Ter nome limpo nao e o mesmo que ter credito forte.**

E essa e a armadilha em que a maioria das pessoas com perfil como o seu cai.

Voce pede aumento de limite: negado ou oferecido migalha.
Voce tenta financiamento: taxa de juros altissima.
Voce quer um cartao melhor: negado ou condicionado a renda comprovada absurda.

O problema nao e restricao. O problema e que seu **perfil de credito ainda nao esta otimizado pra conseguir o que voce quer**.

E como ter um curriculo sem erros, mas sem nenhuma experiencia relevante. Tecnicamente esta tudo certo. Mas nao te leva aonde voce quer chegar.

**O que o diagnostico completo do CredPositivo faz pra voce:**

- Mapeia seu rating bancario real — como cada banco esta te enxergando
- Identifica o que esta faltando pra subir de nivel (pode ser algo simples que voce nem imagina)
- Monta um plano de 30/60/90 dias pra atingir o objetivo especifico que voce quer: limite maior, financiamento, cartao premium

Investimento: R$97. Prazo de resultado: ate 20 dias uteis.

Se voce quer sair do "bom o suficiente" e ir pro "aprovado sem dificuldade", seu assessor financeiro premium pode te mostrar como.

**[Quero meu plano de evolucao — falar com seu assessor financeiro premium]({{link_whatsapp}})**

Ate amanha,
Equipe CredPositivo

P.S. — Voce ja tem a base. A maioria das pessoas que atendemos com perfil Preventivo precisa de ajustes pontuais — nao de uma reconstrucao. Mas esses ajustes fazem uma diferenca enorme no limite, na taxa de juros e na aprovacao.

---

### C2 — Email 2 (D+1): Educacao sobre Rating Bancario vs Score

**Subject:** Seu score esta bom. Mas e o rating bancario?

**Preview:** Existe um indicador que voce provavelmente nunca viu — e que os bancos olham ANTES do score.

---

{{nome}},

Seu score esta em uma faixa razoavel. E voce provavelmente acha que esse numero e o que define se voce vai ser aprovado ou nao.

Mas nao e.

Existe um indicador que os bancos consultam e que tem peso igual ou maior que o score na hora de aprovar credito, definir limite e calcular taxa de juros.

Chama **rating bancario**. E funciona diferente do score.

**Score vs Rating — a explicacao simples:**

O **score** e uma nota calculada pelos biroes de credito com base no seu historico geral: pagamentos, dividas, tempo de credito. Qualquer um pode consultar.

O **rating bancario** e uma classificacao que cada banco faz internamente sobre voce. Leva em conta:

- Ha quanto tempo voce e cliente daquele banco?
- Quanto voce movimenta por mes?
- Que produtos voce usa? (conta corrente, poupanca, cartao, seguro, investimento)
- Voce usa o credito de forma saudavel? (usa o limite e paga em dia vs nunca usa)
- Voce tem multiplos relacionamentos bancarios ou concentra tudo em um?

**Por que isso importa pra voce (que ja tem nome limpo):**

Porque o rating e o que define a diferenca entre:
- Limite de R$500 e limite de R$15.000
- Taxa de juros de 8% ao mes e taxa de 1,5% ao mes
- Financiamento negado e financiamento aprovado com condicoes boas

Voce pode ter score 750. Se seu rating bancario for fraco, vai continuar recebendo ofertas mediocres.

**O CredPositivo e o unico servico que analisa e trabalha o rating bancario dos clientes.**

A maioria dos concorrentes foca em "limpar nome" e "subir score". A gente vai alem. Porque sabemos que pra quem ja tem nome limpo, o jogo e outro.

Se voce quer entender como seu rating esta e o que fazer pra chegar onde quer, seu assessor financeiro premium tem as respostas.

**[Quero saber meu rating — falar com seu assessor financeiro premium]({{link_whatsapp}})**

Equipe CredPositivo

P.S. — Curiosidade: o rating bancario nao e consultavel em nenhum app. Voce so descobre indiretamente (pelas ofertas que recebe) ou com uma analise profissional. E isso que o diagnostico do CredPositivo faz.

---

### C3 — Email 3 (D+2): Caso de Sucesso / Prova Social

**Subject:** Como o Ricardo saiu de limite de R$800 pra R$12 mil em 60 dias

**Preview:** Ele nao ganhou aumento de salario. Nao trocou de banco. Ele mudou a estrategia.

---

{{nome}},

O Ricardo (nome ficticio, historia real) tinha um perfil parecido com o seu.

Nome limpo. Score 690. Nenhuma divida.

E um cartao de credito com limite de R$800.

Ele nao entendia. Ganhava R$5 mil por mes, nunca atrasou uma conta, tinha conta no mesmo banco ha 6 anos.

"Por que meu limite e tao baixo?"

Ele tentou o caminho que todo mundo tenta:

- Ligou pro banco pedindo aumento: "No momento nao temos condicoes de aumentar"
- Pediu cartao em outro banco: aprovado com R$600
- Abriu conta em fintech: aprovado com R$200
- Ficou indignado. Desistiu.

Ai um amigo indicou o CredPositivo.

Nosso assessor fez o diagnostico e descobriu 3 coisas:

**1) O cadastro do Ricardo nos biroes estava desatualizado.** O endereco era de 4 anos atras. A renda informada era R$1.800 (de quando ele era estagiario). Os bancos estavam usando esses dados desatualizados pra definir limite.

**2) O rating bancario dele estava fraco** porque ele nunca usou mais de 10% do limite. Parece bom, ne? Nao. Os bancos interpretam isso como "esse cliente nao precisa de credito". Resultado: nunca aumentam.

**3) Ele tinha relacionamento bancario fragmentado.** Conta em um banco, cartao em outro, nada concentrado. Nenhum banco via ele como "cliente relevante".

**O plano do CredPositivo:**

- Atualizar cadastro com renda real e endereco atual em todos os biroes
- Estrategia de uso de limite (usar 30-40% e pagar em dia, por 2 meses)
- Concentrar relacionamento no banco principal
- Solicitar aumento apos 60 dias com perfil otimizado

**Resultado:** Limite de R$800 para R$12.000 em 60 dias. No mesmo banco. Sem trocar de cartao.

O que mudou nao foi a renda do Ricardo. Nao foi o score. Foi a forma como os bancos passaram a enxerga-lo.

E isso que o diagnostico do CredPositivo faz: mostra o que mudar e em qual ordem.

**[Quero meu plano de aumento de limite — falar com seu assessor financeiro premium]({{link_whatsapp}})**

Equipe CredPositivo

P.S. — Hoje, 5 meses depois, o Ricardo tem limite total de R$28 mil somando todos os cartoes. Mesmo salario. Mesmo banco principal. Credito e estrategia, nao sorte.

---

### C4 — Email 4 (D+3): Destruir Objecao Principal

**Subject:** "Mas meu credito ja esta bom, preciso mesmo disso?"

**Preview:** Se o seu credito fosse realmente bom, voce nao teria feito o quiz. Vamos ser honestos?

---

{{nome}},

Vou ser honesto com voce.

Se voce esta recebendo esse email, e porque fez o diagnostico de credito no nosso site. Dedicou uns minutos pra responder perguntas sobre sua situacao financeira.

Pessoas que estao 100% satisfeitas com seu credito nao fazem quiz de credito.

Entao, em algum nivel, voce sabe que algo pode melhorar. Talvez seja:

- O limite que nao sobe
- A taxa de juros que e alta demais
- O financiamento que voce quer mas nao tem certeza se vai ser aprovado
- O cartao premium que voce queria mas nunca oferecem

E ai vem aquela voz na cabeca: "Mas meu nome ta limpo, meu score ta ok... sera que eu realmente preciso pagar R$97 pra alguem me dizer o que fazer?"

Resposta honesta: depende.

**Voce NAO precisa do CredPositivo se:**

- Voce sabe exatamente qual e seu rating bancario em cada instituicao
- Voce sabe quais dados seus estao nos biroes e todos estao corretos
- Voce tem uma estrategia clara de como aumentar limite e melhorar condicoes de credito
- Voce ja esta conseguindo tudo que quer em termos de aprovacao, limite e taxa

Se tudo isso e verdade, sinceramente, nao precisa gastar R$97. Voce ja esta no controle.

**Voce PRECISA do CredPositivo se:**

- Voce nao sabe por que seu limite e baixo
- Voce nao sabe o que e rating bancario ou como o seu esta
- Voce nao tem um plano — so esta esperando que as coisas melhorem com o tempo
- Voce quer financiar algo nos proximos meses e nao sabe se vai ser aprovado com boas condicoes

A consultoria de R$97 nao e pra quem ja esta no topo. E pra quem quer chegar la com estrategia em vez de tentativa e erro.

E inclui o Black Card sem anuidade — um cartao que, alem de util, ajuda a construir historico de credito de forma inteligente.

**[Quero saber se vale a pena pro meu caso — falar com seu assessor financeiro premium]({{link_whatsapp}})**

Equipe CredPositivo

P.S. — Seu assessor nao vai te pressionar. Se depois de conversar com ele voce concluir que nao precisa, ele vai te dizer isso. A gente nao vende pra quem nao precisa — isso destroi reputacao, e reputacao e tudo no nosso mercado.

---

### C5 — Email 5 (D+5): Escassez + Oferta Especial

**Subject:** {{nome}}, liberei algo pra voce essa semana

**Preview:** Diagnostico de R$97 + plano 30/60/90 dias + acompanhamento prioritario. So essa semana.

---

{{nome}},

Voce ta recebendo esse email porque seu perfil Preventivo tem alto potencial de evolucao rapida.

Vou te explicar.

Pessoas com perfil Critico precisam de reconstrucao — leva mais tempo, mais etapas. Pessoas com perfil Atencao precisam resolver pendencias primeiro.

Voce nao precisa de nenhum dos dois. Voce precisa de **ajuste fino + estrategia**.

E isso e o que traz resultado mais rapido.

Por isso, essa semana foi liberada uma condicao especial pra perfis como o seu:

**O que voce recebe:**

- Diagnostico completo: score, rating bancario, cadastro nos biroes — R$97
- Plano personalizado 30/60/90 dias com metas especificas de credito — incluso
- Black Card sem anuidade — incluso
- **Bonus: acompanhamento prioritario por 30 dias** — voce fica na fila prioritaria do seu assessor, com checkins semanais de evolucao

Esse acompanhamento e o diferencial. Porque nao basta saber o que fazer — voce precisa de alguem acompanhando, ajustando o plano conforme os bancos respondem, te dizendo quando pedir aumento, quando esperar, quando agir.

**Por que so essa semana?**

Seu assessor tem capacidade limitada de atendimento prioritario. Nao terceiriza e nao automatiza essa parte. Quando as vagas da semana preenchem, quem contratar depois recebe o diagnostico sem o bonus de acompanhamento.

Sem drama, sem contador regressivo falso. E logistica.

**[Garantir condicao especial — falar com seu assessor financeiro premium]({{link_whatsapp}})**

Equipe CredPositivo

P.S. — Se voce esta planejando um financiamento nos proximos 3-6 meses (carro, imobiliario, ou outro), o timing ideal pra fazer o diagnostico e AGORA. Porque preparar o perfil antes do pedido e o que garante aprovacao com condicoes boas. Pedir sem preparar e roleta.

---

### C6 — Email 6 (D+7): Ultima Chance

**Subject:** Acompanhamento prioritario encerra hoje

**Preview:** Ultimo dia pra garantir o bonus de 30 dias com seu assessor. Depois, so o diagnostico padrao.

---

{{nome}},

Rapido e direto.

Hoje e o ultimo dia da condicao especial que foi liberado pra voce.

A partir de amanha:
- Diagnostico completo continua R$97 (nao muda)
- Plano personalizado continua incluso (nao muda)
- Black Card continua incluso (nao muda)
- Acompanhamento prioritario de 30 dias: volta ao valor avulso

Nao vou repetir tudo que expliquei nos emails anteriores. Voce ja entendeu o que e rating bancario, viu o caso do Ricardo, sabe o que o diagnostico inclui.

A pergunta e simples: voce quer continuar tentando subir de nivel sozinho, na tentativa e erro? Ou quer ter um plano e alguem acompanhando?

Se for agir, hoje e o dia.

**[Falar com meu assessor agora]({{link_whatsapp}})**

Equipe CredPositivo

P.S. — Mesmo sem a condicao especial, o diagnostico de R$97 continua sendo o melhor investimento que voce pode fazer no seu credito. Mas com o acompanhamento, o resultado vem mais rapido e com mais seguranca.

---

### C7 — Email 7 (D+10): Reengajamento

**Subject:** {{nome}}, uma reflexao rapida sobre seu credito

**Preview:** Nao vou te vender nada. Vou te deixar com uma pergunta pra pensar.

---

{{nome}},

Faz uns dias que te mandei o resultado do seu diagnostico. Voce viu, considerou, e decidiu esperar. Tudo bem.

Antes de encerrar essa sequencia de emails, quero te deixar com uma reflexao.

**Voce sabe qual limite de credito voce poderia ter hoje se seu perfil estivesse otimizado?**

Nao o limite que voce tem. O limite que voce poderia ter.

A maioria das pessoas com perfil como o seu — nome limpo, score razoavel, renda compativel — esta usando 20-30% do credito que poderia acessar.

Nao porque nao merece. Mas porque nunca otimizou o perfil.

E como uma pessoa com potencial pra ganhar o dobro no trabalho, mas que nunca atualizou o curriculo, nunca fez uma entrevista de emprego, nunca negociou salario. O potencial esta la. So nao foi ativado.

O diagnostico do CredPositivo mostra esse gap: onde voce esta vs onde poderia estar. E o plano te leva la.

Pode ser que hoje nao seja o momento. Pode ser que daqui 1 mes, 3 meses, quando voce for pedir aquele financiamento ou quiser aquele limite maior, voce lembre desse email.

Quando esse dia chegar, seu assessor financeiro premium vai estar aqui.

**[Quando estiver pronto — falar com seu assessor financeiro premium]({{link_whatsapp}})**

Cuide-se,
Equipe CredPositivo

P.S. — Dica gratuita que voce pode aplicar hoje: acesse o site dos principais biroes de credito e atualize seu cadastro. Endereco, telefone, renda. Dados desatualizados sao um dos motivos mais comuns de limite baixo e aprovacao negada. Leva 10 minutos e e gratis. Independente de contratar o CredPositivo ou nao, faca isso.

---
---

## Notas de Implementacao

### Plataforma recomendada

Qualquer ferramenta de email marketing com automacao por tags/segmentos: Brevo (ex-Sendinblue), ActiveCampaign, Mailchimp, RD Station.

### Configuracao dos fluxos

1. **Trigger:** Lead completa quiz + nao converte no WhatsApp em 2 horas
2. **Segmentacao:** Baseada no campo `nivel` do quiz (critico / atencao / preventivo)
3. **Personalizacao:** Preencher variaveis `{{nome}}`, `{{score}}`, `{{link_whatsapp}}`
4. **Cadencia:** D+0, D+1, D+2, D+3, D+5, D+7, D+10
5. **Saida do fluxo:** Lead clica no CTA do WhatsApp OU converte (contratar diagnostico)

### Regras de supressao

- Se o lead converter (comprar diagnostico) em qualquer ponto, remover do fluxo imediatamente
- Se o lead responder qualquer email pedindo pra sair, remover e respeitar
- Se o lead abrir conversa no WhatsApp (via CTA), mover pra lista de "em atendimento" e pausar emails por 48h
- Se apos o Email 7 nao houver conversao, mover pra lista de "nutricao fria" (conteudo semanal, sem oferta direta)

### Metricas a acompanhar

| Metrica | Meta | Onde medir |
|---------|------|------------|
| Taxa de abertura | > 30% | Plataforma de email |
| Taxa de clique (CTA WhatsApp) | > 5% | Plataforma de email |
| Conversao do fluxo (compra) | > 3% | CRM / Paulo |
| Descadastro (unsubscribe) | < 1% por email | Plataforma de email |
| Email com maior conversao | Identificar | A/B testing ao longo do tempo |

### Testes A/B recomendados

**Fase 1 (primeiras 2 semanas):**
- Testar subject lines do Email 1 de cada fluxo (e a primeira impressao)
- Variacao A (atual) vs Variacao B com angulo diferente:
  - Fluxo A: "Seu CPF tem um problema que voce talvez nao conheca" vs atual
  - Fluxo B: "Credito negado? O motivo pode nao ser o que voce pensa" vs atual
  - Fluxo C: "Voce esta usando so 30% do credito que poderia ter" vs atual

**Fase 2 (apos 500 leads por fluxo):**
- Testar cadencia: D+0,1,2,3,5,7,10 vs D+0,1,3,5,7,10,14
- Testar formato do Email 5 (escassez): com bonus vs com desconto temporal

### Estrutura de dados necessaria (do quiz)

```json
{
  "nome": "string",
  "email": "string",
  "whatsapp": "string",
  "score": "number",
  "nivel": "critico | atencao | preventivo",
  "situacao": "string (descricao livre)",
  "valor_divida": "number (quando aplicavel)",
  "urgencia": "alta | media | baixa",
  "data_quiz": "datetime",
  "converteu_whatsapp": "boolean",
  "fonte": "string (utm_source)"
}
```

### Compliance e boas praticas

- Incluir link de descadastro em todos os emails (obrigatorio por lei)
- Usar dominio verificado (@credpositivo.com) com SPF, DKIM e DMARC configurados
- Nao enviar emails antes das 8h ou depois das 21h (horario de Brasilia)
- Respeitar LGPD: dados coletados com consentimento, finalidade clara, possibilidade de exclusao
- Incluir endereco fisico ou CNPJ no rodape (exigencia de provedores de email)

### Rodape padrao (todos os emails)

```
---
CredPositivo — Seu credito no caminho certo
www.credpositivo.com | @_credpositivo.com

Voce esta recebendo esse email porque fez o diagnostico de credito no credpositivo.com
Se nao quer mais receber, [clique aqui para sair da lista]

[CNPJ/Endereco]
```

---

## Justificativa Estrategica

### Cerebros aplicados

**Gary Halbert (Direct Response):** Presente em todos os 21 emails. Tom pessoal ("voce" singular), frases curtas, paragrafos de 1-2 linhas, P.S. estrategico em cada email, headlines testaveies, storytelling nos casos de sucesso.

**David Ogilvy (Autoridade e Confianca):** Presente nos emails 2 (educacao sobre rating) e 4 (destruicao de objecao) de todos os fluxos. Especificidade (numeros reais nos casos de sucesso), respeito a inteligencia do leitor (explicamos sem ser condescendentes), consistencia de marca.

**Eugene Schwartz (Consciencia):** Framework estrategico de todo o funil. Cada fluxo comeca no nivel de consciencia correto do lead e progride ao longo dos 7 emails:

- **Fluxo A (Critico):** Comeca no Nivel 2 (consciente do problema) e progride ate Nivel 4 (consciente do produto)
- **Fluxo B (Atencao):** Comeca entre Nivel 2-3 e progride ate Nivel 5 (mais consciente)
- **Fluxo C (Preventivo):** Comeca no Nivel 2-3 (consciente do problema latente) e progride ate Nivel 5

### Frameworks de copy por email

| Email | Framework | Razao |
|-------|-----------|-------|
| 1 (Diagnostico) | PAS (Problem-Agitate-Solve) | Lead acabou de fazer o quiz, precisa entender a gravidade e ver solucao imediata |
| 2 (Rating) | Hook-Story-Offer | Conceito novo (rating), precisa de narrativa educacional que termine em oferta natural |
| 3 (Prova social) | Storytelling (Halbert) | Historia concreta gera identificacao e quebra ceticismo melhor que argumento logico |
| 4 (Objecao) | PAS + Reason Why (Halbert) | Objecao precisa ser validada antes de destruida; "reason why" da a explicacao logica |
| 5 (Escassez) | AIDA Hormozi | Atencao ja existe (email 5), foco em desejo + acao com escassez real |
| 6 (Ultima chance) | Urgencia direta | Pouco texto, muito impacto. Lead ja tem todas as informacoes, so precisa do empurrao |
| 7 (Reengajamento) | Curiosidade + Novo angulo | Tom diferente, sem pressao, pergunta aberta para reativar o dialogo |

### Diferenciais estrategicos deste funil

1. **Rating bancario como gancho educacional:** Nenhum concorrente fala sobre isso. Posiciona o CredPositivo como autoridade unica.
2. **Transparencia radical:** Email 4 de cada fluxo admite quando o cliente NAO precisa do servico. Isso constroi confianca.
3. **Escassez real (nao fabricada):** O bonus e logistico (capacidade do Paulo), nao um deadline inventado.
4. **P.S. estrategico em cada email:** Segundo gancho para quem pula direto pro final (comportamento comum em email).
5. **Dica gratuita no Email 7:** Mesmo quem nao converte sai com valor. Isso gera boa vontade e potencial de retorno futuro.
6. **Adaptacao por trilha:** Cada fluxo usa linguagem, metaforas e dores especificas pro perfil. Nao e copy generica replicada.
