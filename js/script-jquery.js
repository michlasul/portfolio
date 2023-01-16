
// Dropdown menu
$(window).ready(function (){
    const hamburger = $('#hamburger');
    const navMenu = $('#nav-menu');

    hamburger.click(function (){
        hamburger.toggleClass('hamburger-active');
        navMenu.slideToggle();
    })

});



