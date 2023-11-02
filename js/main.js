var Swipes = new Swiper(".swiper-container", {
  speed: 500,
  effect: "coverflow",
  grabCursor: false,
//   allowTouchMove: false,
  centeredSlides: true,
  slidesPerView: "auto",
  coverflowEffect: {
    rotate: 20,
    stretch: 0,
    depth: 400,
    modifier: 1,
    slideShadows: true,
  },
//   autoplay: {
//       delay: 10000,
//       disableOnInteraction: false,
//   },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});
// $(".swiper-container").removeClass("swiper-3d")

$(document).on("click", ".header__right-dropdown-Box-top2", function (e) {
  e.preventDefault();
  if ($(this).hasClass("active")) {
    $(".header__right-dropdown-Box-bottom2").slideUp();
    $(".header__right-dropdown-Box-top2").removeClass("active");
  } else {
    $(".header__right-dropdown-Box-top2").removeClass("active");
    $(".header__right-dropdown-Box-bottom2").slideUp();
    $(this).addClass("active");
    $(this).siblings(".header__right-dropdown-Box-bottom2").slideDown();
  }
});
$(".section9_Body-Box-top").click(function () {
  var panel = this.nextElementSibling;
  if ($(this).hasClass("active")) {
    $(this).removeClass("active");
    $(this).next().css("maxHeight",0);
} else {
    $(".section9_Body-Box-top").removeClass("active");
    $(".section9_Body-Box-bottom").css("maxHeight",0);
    $(this).addClass("active");
    $(this).next().css("maxHeight",$(this).next().get(0).scrollHeight);
  }
});


$(".dropBrand").click(function(e) {
    e.preventDefault()
    // $(this).perent().addClass()
})