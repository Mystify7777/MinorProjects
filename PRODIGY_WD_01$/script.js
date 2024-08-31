document.addEventListener('DOMContentLoaded', function() {
    const collapseBtn = document.getElementById('collapse-btn');
    const navLinks = document.getElementById('nav-links');

    collapseBtn.addEventListener('click', function() {
        navLinks.classList.toggle('active');
    });

    window.addEventListener('scroll', function() {
        const header = document.getElementById('header');
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const collapseBtn = document.getElementById('collapse-btn');
    const navLinks = document.getElementById('nav-links');

    collapseBtn.addEventListener('click', function() {
        navLinks.classList.toggle('show');
    });
});