/**
 * Global Admin UI Script
 * Centralizes common functionalities across all admin pages.
 */

document.addEventListener('DOMContentLoaded', () => {
    initMobileMenu();
    initNotifications();
    initGlobalSearch();
    initProfileDropdown();
});

function initMobileMenu() {
    const toggle = document.querySelector('.mobile-menu-toggle');
    const sidebar = document.querySelector('.sidebar');

    if (toggle && sidebar) {
        toggle.addEventListener('click', () => {
            sidebar.classList.toggle('active');
        });
    }
}

function initNotifications() {
    const bell = document.querySelector('.ph-bell')?.parentElement;
    if (bell) {
        bell.addEventListener('click', () => {
            showModal('Notificações', `
                <div style="padding: 20px; text-align: center;">
                    <i class="ph ph-bell-slash" style="font-size: 48px; opacity: 0.2;"></i>
                    <p style="margin-top: 10px; color: var(--color-text-muted);">Nenhuma notificação importante no momento.</p>
                </div>
            `);
        });
    }
}

function initProfileDropdown() {
    const profile = document.querySelector('.admin-profile');
    if (profile) {
        profile.style.cursor = 'pointer';
        profile.addEventListener('click', () => {
            const admin = JSON.parse(localStorage.getItem('credpositivo_admin') || '{}');
            showModal('Seu Perfil', `
                <div style="text-align: center; padding: 20px;">
                    <img src="https://ui-avatars.com/api/?name=${encodeURIComponent(admin.nome || 'Admin')}&background=random" style="width: 80px; height: 80px; border-radius: 50%; border: 2px solid var(--color-primary); margin-bottom: 16px;">
                    <h3 style="color: #fff;">${admin.nome || 'Admin Master'}</h3>
                    <p style="color: var(--color-text-muted); font-size: 14px;">${admin.role || 'Superusuário'}</p>
                    <hr style="margin: 20px 0; border: none; border-top: 1px solid var(--color-border-glass);">
                    <div style="display: flex; flex-direction: column; gap: 10px;">
                        <button class="btn" style="background: rgba(255,255,255,0.05); color: #fff;" onclick="window.location.href='config.html'">Configurações da Conta</button>
                        <button class="btn btn-danger" onclick="adminLogout()">Finalizar Sessão</button>
                    </div>
                </div>
            `);
        });
    }
}

function initGlobalSearch() {
    const searchInput = document.querySelector('.search-bar input');
    if (searchInput) {
        searchInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') {
                const query = searchInput.value.trim().toLowerCase();
                if (query) {
                    // Se estiver na página de clientes, a própria página já filtra.
                    // Senão, vamos para a página de clientes com a busca pronta.
                    if (!window.location.pathname.includes('clientes.html')) {
                        window.location.href = `clientes.html?q=${encodeURIComponent(query)}`;
                    }
                }
            }
        });
    }
}

// Global Modal System
function showModal(title, content, maxWidth) {
    maxWidth = maxWidth || '500px';
    const existing = document.getElementById('globalModal');
    if (existing) existing.remove();

    const modal = document.createElement('div');
    modal.id = 'globalModal';
    modal.style.cssText = `
        position: fixed; top: 0; left: 0; width: 100%; height: 100%;
        background: rgba(0,0,0,0.8); backdrop-filter: blur(5px);
        display: flex; align-items: center; justify-content: center; z-index: 9999;
    `;

    modal.innerHTML = `
        <div class="glass-card" style="width: 100%; max-width: ${maxWidth}; padding: 0; overflow: hidden; animation: slideUp 0.3s ease;">
            <div style="padding: 20px; border-bottom: 1px solid var(--color-border-glass); display: flex; justify-content: space-between; align-items: center;">
                <h2 style="font-size: 18px; color: #fff; margin:0;">${title}</h2>
                <button onclick="closeModal()" style="background:none; border:none; color: #fff; cursor: pointer; font-size: 24px;"><i class="ph ph-x"></i></button>
            </div>
            <div style="padding: 24px; max-height: 80vh; overflow-y: auto;">
                ${content}
            </div>
        </div>
    `;

    document.body.appendChild(modal);
}

function closeModal() {
    const modal = document.getElementById('globalModal');
    if (modal) {
        modal.style.opacity = '0';
        setTimeout(() => modal.remove(), 200);
    }
}

// Excel/CSV Export Utility
function exportToExcel(data, filename) {
    if (!data || data.length === 0) {
        alert('Nenhum dado para exportar.');
        return;
    }
    const headers = Object.keys(data[0]);
    const csvRows = [headers.join(',')];
    data.forEach(row => {
        const values = headers.map(h => {
            let val = (row[h] !== null && row[h] !== undefined) ? String(row[h]) : '';
            val = val.replace(/"/g, '""');
            if (val.includes(',') || val.includes('"') || val.includes('\n')) {
                val = '"' + val + '"';
            }
            return val;
        });
        csvRows.push(values.join(','));
    });
    const bom = '\uFEFF';
    const csvContent = bom + csvRows.join('\n');
    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = (filename || 'export') + '.csv';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
}

// Export functions to window
window.showModal = showModal;
window.closeModal = closeModal;
window.exportToExcel = exportToExcel;
