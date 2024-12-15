$(document).ready(function() {

    $('select').niceSelect();

});


var swiper = new Swiper('.swiper', {
    slidesPerView: 5,
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
});