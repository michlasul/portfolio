
// Dropdown menu
$(window).ready(function (){
    const hamburger = $('#hamburger');
    const navMenu = $('#nav-menu');

    hamburger.click(function (){
        hamburger.toggleClass('hamburger-active');
        navMenu.slideToggle();
    })
});


// Navbar fixed
window.onscroll = function () {
    const header = document.querySelector('header');
    const fixedNav = header.offsetTop;
    const btnBerubah = document.getElementById('btn-berubah');


    if (window.scrollY > fixedNav) {
        header.classList.add('navbar-fixed');
        btnBerubah.classList.add('btn');

    } else{
        header.classList.remove('navbar-fixed');
        btnBerubah.classList.remove('btn');
    }


};

// Hamburger
// const hamburger = document.querySelector('#hamburger');
// const navMenu = document.querySelector('#nav-menu');
//
// hamburger.addEventListener('click', function() {
//     hamburger.classList.toggle('hamburger-active');
//     navMenu.classList.toggle('hidden');
// });

// pop up
const popUp = document.getElementById('popup');
const clickPopup = document.getElementById('click-popup');
const close = document.getElementById('close');

clickPopup.addEventListener('click', function () {
    popUp.classList.remove('hidden');
});
close.addEventListener('click', function () {
    popUp.classList.add('hidden');
});

// klik diluar hamburger
window.addEventListener('click', function(e){
    if (e.target !== hamburger && e.target !== navMenu) {
        hamburger.classList.remove('hamburger-active');
        navMenu.classList.add('hidden');
    }
});

$(window).ready(function () {

    $('#hamburger').click(function () {
        navMenu.slideToggle();
    });

    $('#nav-menu').click(function () {
        navMenu.slideToggle();
    });

});