/* CredPositivo - App Logic
   Handles sidebar active states and mobile toggle
*/

document.addEventListener('DOMContentLoaded', () => {
    initNavigation();
    initMobileToggle();
});

function initNavigation() {
    const currentPath = window.location.pathname;
    const pathParts = currentPath.split('/');
    const currentFile = pathParts[pathParts.length - 1] || 'index.html';

    const navLinks = document.querySelectorAll('.nav-link');

    navLinks.forEach(link => {
        link.classList.remove('active');
        const href = link.getAttribute('href');

        if (href && href !== '#') {
            const hrefParts = href.split('/');
            const hrefFile = hrefParts[hrefParts.length - 1] || 'index.html';

            // If we're at the root of a section (e.g. /dash/) it matches index.html or empty
            if (currentFile === hrefFile) {
                link.classList.add('active');
            }
        }
    });
}

function initMobileToggle() {
    const toggleBtn = document.querySelector('.mobile-menu-toggle');
    const sidebar = document.querySelector('.sidebar');
    const overlay = document.querySelector('.sidebar-overlay'); // If exists

    if (toggleBtn && sidebar) {
        toggleBtn.addEventListener('click', () => {
            sidebar.classList.toggle('active');

            // Toggle icon
            const icon = toggleBtn.querySelector('i');
            if (icon) {
                if (sidebar.classList.contains('active')) {
                    icon.classList.replace('ph-list', 'ph-x');
                } else {
                    icon.classList.replace('ph-x', 'ph-list');
                }
            }
        });

        // Close when clicking outside (if we bad an overlay, but let's just use document click for now or skip)
        document.addEventListener('click', (e) => {
            if (sidebar.classList.contains('active') &&
                !sidebar.contains(e.target) &&
                !toggleBtn.contains(e.target)) {
                sidebar.classList.remove('active');
                const icon = toggleBtn.querySelector('i');
                if (icon) icon.classList.replace('ph-x', 'ph-list');
            }
        });
    }
}
