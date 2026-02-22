/* CredPositivo - Permissions Middleware
   Sistema de controle de acesso granular por Sessão → Subsessão
*/

// Estrutura de permissões disponíveis
const AVAILABLE_PERMISSIONS = {
    geral: {
        label: 'Geral',
        subsections: {
            dashboard: 'Dashboard',
            clientes: 'Clientes',
            operacional: 'Operacional'
        }
    },
    financeiro: {
        label: 'Financeiro',
        subsections: {
            transacoes: 'Transações',
            cupons: 'Cupons',
            notas: 'Notas Fiscais'
        }
    },
    sistema: {
        label: 'Sistema',
        subsections: {
            auditoria: 'Auditoria',
            configuracoes: 'Configurações',
            gerentes: 'Gerentes'
        }
    },
    produtos: {
        label: 'Produtos',
        subsections: {
            diagnostico: 'Diagnóstico de Crédito',
            rating: 'Rating Bancário',
            limpa: 'Limpa Nome'
        }
    }
};

// Mapeamento de páginas para permissões
const PAGE_PERMISSIONS = {
    'dashboard.html': { sessao: 'geral', subsessao: 'dashboard' },
    'clientes.html': { sessao: 'geral', subsessao: 'clientes' },
    'operacional.html': { sessao: 'geral', subsessao: 'operacional' },
    'transacoes.html': { sessao: 'financeiro', subsessao: 'transacoes' },
    'cupons.html': { sessao: 'financeiro', subsessao: 'cupons' },
    'notas.html': { sessao: 'financeiro', subsessao: 'notas' },
    'auditoria.html': { sessao: 'sistema', subsessao: 'auditoria' },
    'config.html': { sessao: 'sistema', subsessao: 'configuracoes' },
    'gerentes.html': { sessao: 'sistema', subsessao: 'gerentes' }
};

/**
 * Verifica se o usuário logado tem permissão para acessar a página atual
 */
function checkPagePermission() {
    const currentUser = JSON.parse(localStorage.getItem('credpositivo_admin') || '{}');

    // Admin Master tem acesso total
    if (currentUser.tipo === 'Admin Master' || currentUser.isMaster) {
        return true;
    }

    // Pega o nome da página atual
    const currentPage = window.location.pathname.split('/').pop();
    const pagePermission = PAGE_PERMISSIONS[currentPage];

    if (!pagePermission) {
        console.warn('Página não mapeada no sistema de permissões:', currentPage);
        return true; // Permite acesso se não estiver mapeada
    }

    // Verifica se o usuário tem a permissão necessária
    const userPermissions = currentUser.permissoes || {};
    const sessaoPermissions = userPermissions[pagePermission.sessao] || [];

    const hasPermission = sessaoPermissions.includes(pagePermission.subsessao);

    if (!hasPermission) {
        console.warn('Acesso negado:', currentPage, 'Requer:', pagePermission);
        alert('Você não tem permissão para acessar esta página.');
        window.location.href = getFirstAllowedPage(currentUser);
        return false;
    }

    return true;
}

/**
 * Retorna a primeira página que o usuário tem permissão de acessar
 */
function getFirstAllowedPage(user) {
    if (user.tipo === 'Admin Master' || user.isMaster) {
        return 'dashboard.html';
    }

    const permissions = user.permissoes || {};

    // Procura a primeira permissão disponível
    for (const [sessao, subsessoes] of Object.entries(permissions)) {
        if (subsessoes && subsessoes.length > 0) {
            const firstSubsessao = subsessoes[0];
            // Encontra a página correspondente
            for (const [page, perm] of Object.entries(PAGE_PERMISSIONS)) {
                if (perm.sessao === sessao && perm.subsessao === firstSubsessao) {
                    return page;
                }
            }
        }
    }

    // Se não tiver nenhuma permissão, redireciona para login
    return './index.html';
}

/**
 * Filtra o menu lateral baseado nas permissões do usuário
 */
function filterMenuByPermissions() {
    const currentUser = JSON.parse(localStorage.getItem('credpositivo_admin') || '{}');

    // Admin Master vê tudo
    if (currentUser.tipo === 'Admin Master' || currentUser.isMaster) {
        return;
    }

    const userPermissions = currentUser.permissoes || {};
    const navLinks = document.querySelectorAll('.nav-link');

    navLinks.forEach(link => {
        const href = link.getAttribute('href');
        if (!href || href === '#') return;

        const page = href.split('/').pop();
        const pagePermission = PAGE_PERMISSIONS[page];

        if (pagePermission) {
            const sessaoPermissions = userPermissions[pagePermission.sessao] || [];
            const hasPermission = sessaoPermissions.includes(pagePermission.subsessao);

            if (!hasPermission) {
                // Esconde o item do menu
                const navItem = link.closest('.nav-item');
                if (navItem) {
                    navItem.style.display = 'none';
                }
            }
        }
    });

    // Esconde seções vazias
    document.querySelectorAll('.nav-section').forEach(section => {
        const visibleItems = section.querySelectorAll('.nav-item:not([style*="display: none"])');
        if (visibleItems.length === 0) {
            section.style.display = 'none';
        }
    });
}

/**
 * Verifica se o usuário tem uma permissão específica
 */
function hasPermission(sessao, subsessao) {
    const currentUser = JSON.parse(localStorage.getItem('credpositivo_admin') || '{}');

    if (currentUser.tipo === 'Admin Master' || currentUser.isMaster) {
        return true;
    }

    const userPermissions = currentUser.permissoes || {};
    const sessaoPermissions = userPermissions[sessao] || [];

    return sessaoPermissions.includes(subsessao);
}

/**
 * Retorna array de produtos que o usuario logado pode ver
 * Ex: ['rating','limpa','diagnostico']
 */
function getAllowedProducts() {
    const currentUser = JSON.parse(localStorage.getItem('credpositivo_admin') || '{}');
    if (currentUser.tipo === 'Admin Master' || currentUser.isMaster) {
        return ['rating', 'limpa', 'diagnostico'];
    }
    const userPermissions = currentUser.permissoes || {};
    return userPermissions.produtos || [];
}

/**
 * Verifica se o usuario pode ver um servico pelo nome exibido
 * Ex: canSeeService('Rating Bancário') => hasPermission('produtos','rating')
 */
function canSeeService(serviceName) {
    const map = {
        'rating bancário': 'rating',
        'rating bancario': 'rating',
        'limpa nome': 'limpa',
        'diagnóstico de crédito': 'diagnostico',
        'diagnostico de credito': 'diagnostico',
        'diagnóstico': 'diagnostico',
        'diagnostico': 'diagnostico'
    };
    const key = map[(serviceName || '').toLowerCase()];
    if (!key) return true; // servico desconhecido: permite por padrao
    return hasPermission('produtos', key);
}

/**
 * Verifica se o usuario pode executar uma acao
 * Admin Master / Admin: criar, editar, exportar, excluir
 * Gerente: criar, editar, exportar
 * Operacional: ver, editar
 */
function canPerformAction(action) {
    const currentUser = JSON.parse(localStorage.getItem('credpositivo_admin') || '{}');
    const tipo = (currentUser.tipo || '').toLowerCase();

    if (tipo === 'admin master' || currentUser.isMaster) return true;

    const actionMap = {
        'admin': ['criar', 'editar', 'exportar', 'excluir', 'ver'],
        'gerente': ['criar', 'editar', 'exportar', 'ver'],
        'operacional': ['ver', 'editar']
    };

    const allowed = actionMap[tipo] || actionMap['operacional'];
    return allowed.includes(action);
}

// Executa verificações quando a página carrega
document.addEventListener('DOMContentLoaded', () => {
    checkPagePermission();
    filterMenuByPermissions();
});
