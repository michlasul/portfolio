// Navbar fixed
window.onscroll = function () {
    const header = document.querySelector('header');
    const fixedNav = header.offsetTop;
    const btnBerubah = document.querySelector('#btn-berubah');

    if (window.pageYOffset > fixedNav) {
        header.classList.add('navbar-fixed');
        btnBerubah.classList.add('btn-berubah');
    } else {
        header.classList.remove('navbar-fixed');
        btnBerubah.classList.remove('btn-berubah');
    }
};

// Hamburger
const hamburger = document.querySelector('#hamburger');
const navMenu = document.querySelector('#nav-menu');

hamburger.addEventListener('click', function() {
    hamburger.classList.toggle('hamburger-active');
    navMenu.classList.toggle('hidden');
});

// klik diluar hamburger
window.addEventListener('click', function(e){
    if (e.target != hamburger && e.target != navMenu) {
        hamburger.classList.remove('hamburger-active');
        navMenu.classList.add('hidden');
    }
});