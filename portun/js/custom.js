$(document).ready(function() {

    var header = $(".header-nav");
    var stickyOffset = 500;

    $(window).on("scroll", function() {
        if ($(window).scrollTop() > stickyOffset) {
            header.addClass("sticky");
        } else {
            header.removeClass("sticky");
        }
    });

    $('select').niceSelect();

});

AOS.init();

var swiper = new Swiper('.swiper', {
    slidesPerView: 5, // Default za desktop
    centeredSlides: true,
    loop: true,
    spaceBetween: 30,
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
        renderBullet: function (index, className) {
            return '<span class="' + className + '">' + (index + 1) + '</span>';
        },
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    breakpoints: {
        1024: { // Desktop do tableta
            slidesPerView: 4,
        },
        768: { // Tableti
            slidesPerView: 3,
        },
        480: { // Mali ekrani (smartfoni)
            slidesPerView: 2,
        },
        320: { // Najmanji ekrani
            slidesPerView: 1,
        },
    },
});
