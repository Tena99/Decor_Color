$(document).ready(function(){
    $(".owl-carousel").owlCarousel({
        items: 1,
        loop: true,
        autoplay: true,
        autoplayTimeout: 3000,
        nav: true,
        dots: false,
        navText: ["", " "],
        mergeFit: true,
        margin: 10,

        responsive: {
            768: {
                items: 2
            },
        }
    });
});