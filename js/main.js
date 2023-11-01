var Swipes = new Swiper('.swiper-container', {
    speed: 500,
    effect: "coverflow",
    // grabCursor: true,
    centeredSlides: true,
    slidesPerView: "auto",
    coverflowEffect: {
      rotate: 50,
      stretch: 0,
      depth: 100,
      modifier: 1,
      slideShadows: true,
    },
    autoplay: {
        delay: 10000,
        disableOnInteraction: false,
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
});


$(".ta1 .section5__left-list-Box").click(function() {
    if(!$(this).hasClass("active")) {
        $(".ta1 .section5__left-list-Box").removeClass("active")
        $(".ta1 .section5__left-Body-Box").slideUp()
        $(this).addClass("active")
        $(`#${$(this).data("tab")}`).slideDown()
    }
})
$(".ta2 .section5__left-list-Box").click(function() {
    if(!$(this).hasClass("active")) {
        $(".ta2 .section5__left-list-Box").removeClass("active")
        $(".ta2 .section5__left-Body-Box").slideUp()
        $(this).addClass("active")
        $(`#${$(this).data("tab")}`).slideDown()
    }
})