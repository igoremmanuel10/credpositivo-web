/**
 * Admin Authentication & Multi-User Support
 * JWT token management + adminFetch helper
 * Permission control is handled by permissions.js (granular system)
 */

// ============================================
// JWT Token helpers
// ============================================

function getAdminToken() {
    return localStorage.getItem('credpositivo_admin_token');
}

function setAdminToken(token) {
    localStorage.setItem('credpositivo_admin_token', token);
}

function removeAdminToken() {
    localStorage.removeItem('credpositivo_admin_token');
}

/**
 * Decode JWT payload (without verification — verification happens server-side)
 */
function decodeJWT(token) {
    try {
        const payload = token.split('.')[1];
        return JSON.parse(atob(payload));
    } catch {
        return null;
    }
}

/**
 * Check if token is expired
 */
function isTokenExpired() {
    const token = getAdminToken();
    if (!token) return true;

    const payload = decodeJWT(token);
    if (!payload || !payload.exp) return true;

    // Add 60s buffer so we don't use a token that's about to expire
    return (payload.exp * 1000) < (Date.now() + 60000);
}

// ============================================
// adminFetch — fetch wrapper with JWT auth
// ============================================

/**
 * Wrapper around fetch() that automatically injects JWT Authorization header.
 * Redirects to login on 401 responses.
 */
async function adminFetch(url, options = {}) {
    const token = getAdminToken();

    if (!token || isTokenExpired()) {
        adminLogout();
        return;
    }

    const headers = options.headers || {};
    headers['Authorization'] = 'Bearer ' + token;
    if (!headers['Content-Type'] && options.body && typeof options.body === 'string') {
        headers['Content-Type'] = 'application/json';
    }

    const response = await fetch(url, { ...options, headers });

    if (response.status === 401) {
        adminLogout();
        return;
    }

    return response;
}

// ============================================
// Auth check & RBAC
// ============================================

function checkAdminAuth() {
    const adminSessao = JSON.parse(localStorage.getItem('credpositivo_admin') || 'null');
    const token = getAdminToken();

    if (!adminSessao || !adminSessao.loggedIn || !token || isTokenExpired()) {
        adminLogout();
        return null;
    }

    return adminSessao;
}

function adminLogout() {
    localStorage.removeItem('credpositivo_admin');
    removeAdminToken();
    // Only redirect if not already on login page
    const path = window.location.pathname;
    if (!path.endsWith('/adm/') && !path.endsWith('/adm/index.html')) {
        window.location.href = 'index.html';
    }
}

// Auto-run auth check on protected pages
(function () {
    const path = window.location.pathname;
    if (!path.endsWith('/adm/') && !path.endsWith('/adm/index.html') && path.includes('/adm/')) {
        checkAdminAuth();
    }
})();
