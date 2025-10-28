document.addEventListener("DOMContentLoaded", () => {

    const navToggle = document.getElementById('nav-toggle');
    const navMenu = document.getElementById('nav-menu');
    const navLinks = document.querySelectorAll('.nav__link');

    function toggleMenu() {
        navMenu.classList.toggle('show-menu');
        navToggle.classList.toggle('is-active');
    }

    if (navToggle) {
        navToggle.addEventListener('click', toggleMenu);
    }

    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            if (navMenu.classList.contains('show-menu')) {
                toggleMenu();
            }
        });
    });

});