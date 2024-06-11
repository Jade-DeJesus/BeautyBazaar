const navLinkEls = document.querySelectorAll('header .navbar a');
const windowPathname = window.location.pathname;

navLinkEls.forEach(navLinkEl => {
    if (navLinkEl.href.includes(windowPathname)) {
        navLinkEl.classList.add('active');
    }
});