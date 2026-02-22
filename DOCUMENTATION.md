# Projeto CredPositivo - Detalhamento Técnico e Roadmap

Este documento consolida as especificações das sessões e funcionalidades dos Dashboards do Administrador e do Cliente, servindo como guia para o desenvolvimento e manutenção do sistema.

## 1. Dashboard do Administrador

Organizado com navegação lateral fixa e área principal de conteúdo.

### 1.1 Navegação Lateral
- **Dashboard:** Visão geral de métricas.
- **Clientes:** Gestão de base cadastral.
- **Operacional:** Controle de tarefas internas (Em construção).
- **Transações:** Movimentação financeira (Em construção).
- **Notas Fiscais:** Gestão de NF-e (Em construção).
- **Auditoria:** Logs de sistema (Em construção).
- **Configurações:** Parâmetros e permissões (Em construção).
- **Sair:** Encerramento de sessão.

### 1.2 Dashboard Principal
- **Busca:** CPF, contrato ou nome.
- **KPIs:** Novos Clientes, Processos Ativos, Rating Pendente, Limpa Nome.
- **Fluxo Operacional:** Quadro Kanban (Novos Pedidos, Análise Jurídica, Concluído Recently). Botão "Nova Tarefa".
- **Perfil:** Identificação do admin (ex: Admin Master).

### 1.3 Gestão de Clientes
- **Filtros:** Busca por texto e abas (Todos, Rating, Limpa Nome, Pendentes).
- **Tabela:** Listagem dinâmica com colunas ID, Nome, CPF, Email, Tipo, Status e Data.

---

## 2. Dashboard do Cliente

Foco no usuário final, com gestão de saldo e resumo de serviços.

### 2.1 Navegação Lateral
- **Visão Geral:** Dashboard principal.
- **Meus Serviços:** Status de processos (Em construção).
- **Score & Rating:** Evolução de crédito (Em construção).
- **Financeiro:** Pagamentos e faturas (Em construção).
- **Loja:** Contratação de serviços (Em construção).
- **Suporte:** Canal de atendimento (Em construção).
- **Configurações:** Perfil do usuário (Em construção).
- **Saldo:** Exibição de Saldo Disponível e botão "Adicionar Crédito".

### 2.2 Visão Geral
- **Progresso:** Status detalhado do serviço ativo (ex: Limpa Nome) com porcentagem e etapas.
- **Acesso Rápido:** Pix, 2ª Via Boleto, Suporte, Configurações.
- **Notificações:** Alertas de score e pagamentos.
- **Banner:** Convite para Consultoria Financeira.
- **Resumo Financeiro:** Score atual, faturas pagas e propostas de crédito.

---

## 3. Roadmap de Funcionalidades Futuras

### 3.1 Para Administrador
- Kanban interativo com drag-and-drop.
- Edição detalhada de perfis de clientes.
- Conciliação financeira automática.
- Integração com emissão automática de NF-e.
- Logs exportáveis para compliance.
- Sistema de permissões por perfil (RBAC).

### 3.2 Para Cliente
- Timeline detalhada de cada serviço com mensagens.
- Gráfico interativo de evolução de score.
- Histórico completo de faturas e notas fiscais.
- E-commerce interno para contratação ágil.
- Chat em tempo real integrado.
