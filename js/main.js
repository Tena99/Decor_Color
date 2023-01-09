$(document).ready(function(){
    $(".owl-one").owlCarousel({
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

$(document).ready(function(){
    $(".owl-two").owlCarousel({
        items: 1,
        nav: true,
        dots: false,
        navText: ["Назад", "Вперед"],
    });
});