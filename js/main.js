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
  autoplay: {
      delay: 10000,
      disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});
var Swipes2 = new Swiper(".section10mySwiper", {
//   loop:true,
    speed: 500,
  slidesPerView: 1,
  grabCursor: false,
//   allowTouchMove: false,
  centeredSlides: true,
  autoplay: {
      delay: 10000,
      disableOnInteraction: false,
  },
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

const textArray = [" Experience the Ultimate Selection of Cars Tailored to Your Needs,", " Experience the Ultimate Selection of Cars Tailored to Your Needs,", "Experience the Ultimate Selection of Cars Tailored to Your Needs,"];
let textArrayIndex = 0;
let charIndex = 0;

const erase = () => {
  if (charIndex > 0) {
    $(".cursor").removeClass('blink');
    $(".typed-text").text(textArray[textArrayIndex].slice(0, charIndex - 1));
    charIndex--;
    setTimeout(erase, 80);
  } else {
    $(".cursor").addClass('blink');
    textArrayIndex++;
    if (textArrayIndex > textArray.length - 1) {
      textArrayIndex = 0;
    }
    setTimeout(type, 1000);
  }
}

const type = () => {
  if (charIndex <= textArray[textArrayIndex].length - 1) {
    $(".cursor").removeClass('blink');
    $(".typed-text").text($(".typed-text").text() + textArray[textArrayIndex].charAt(charIndex));
    charIndex++;
    setTimeout(type, 120);
  } else {
    $(".cursor").addClass('blink');
    setTimeout(erase, 1000);
  }
}

$(document).ready(() => {
  type();
});


$(window).on('scroll', function() {
  if ($(this).scrollTop() > 100) {
      $('.header').addClass('go-top');
      // $('.logo_side').addClass('hide');
      // $('.logo_side_2').removeClass('hide');
  } else {
      $('.header').removeClass('go-top');
      // $('.logo_side').removeClass('hide');
      // $('.logo_side_2').addClass('hide');
  }
});

jQuery(document).ready(function($) {
  $("#menu").mmenu({
      "extensions": ["effect-menu-zoom", "effect-panels-zoom", "pagedim-black", "theme-dark"],
      "offCanvas": {
          "position": "right"
      },
      "counters": true,
      "iconPanels": true,
     
  });
});
// menu close

document.onreadystatechange = function() {
  var state = document.readyState
  if (state == 'complete') {
    $(".loader").hide()
  }

}