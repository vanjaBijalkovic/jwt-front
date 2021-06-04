export function globalAuthGuard(to, from, next) {
    const isAuthenticated = !!localStorage.getItem('token');

    console.log(isAuthenticated);
    if (to.meta.authRequired && !isAuthenticated) {
        next('login');
    } if (to.meta.guestRequired && isAuthenticated) {
        next('/');
    }
    next();
}