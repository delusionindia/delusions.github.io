
  AOS.init();
  $(window).load(function() {
   $('.preloader').fadeOut('1000');
});
$('.regular').slick({
  autoplay: true,
  infinite: true,
  speed: 50,
  slidesToShow: 3,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        
        dots: true
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
});

$(".test").slick({
  autoplay:true,

slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,   dots: true,
  autoplaySpeed: 1000,
  });


$(window).scroll(function () {
  var s = $(window).scrollTop(),
        d = $(document).height(),
        c = $(window).height();
        scrollPercent = (s / (d-c)) * 100;
        var position = scrollPercent;

   $(".side-bar-fixed .side-bar-inner .scroll-outter p.line img").css('bottom', position);

});

    $('.js-newsletter-btn').click(function(){
$('.news-letter').toggleClass('hg');
$('.side-bar-fixed .side-bar-inner .scroll-outter p:first-child').toggleClass('text-white');
$('.side-bar-fixed .side-bar-inner .scroll-outter p.line').toggleClass('bg-white')
    });

    $(window).scroll(function(){
      var y=$(this).scrollTop();
      if(y>100)
      {
        $('.content-header').addClass('header-bgcolor');
                $('.side-bar-fixed .side-bar-inner .scroll-outter p:first-child').addClass('text-dark');
$('.side-bar-fixed .side-bar-inner .scroll-outter p.line').addClass('bg-dark');
$('.scroller-black').addClass('d-inherit');
$('.logo').addClass('text-dark')
      }
      else
      {
        $('.content-header').removeClass('header-bgcolor');
                        $('.side-bar-fixed .side-bar-inner .scroll-outter p:first-child').removeClass('text-dark');
$('.side-bar-fixed .side-bar-inner .scroll-outter p.line').removeClass('bg-dark');
$('.scroller-black').removeClass('d-inherit');
$('.logo').removeClass('text-dark')
      }
      if(y>190)
      {
        $('.side-bar-fixed .side-bar-inner .heading-outter h6').addClass('text-dark');
      }
      else
      {
        $('.side-bar-fixed .side-bar-inner .heading-outter h6').removeClass('text-dark');
      }
    });


    // Hide Header on on scroll down
var didScroll;
var lastScrollTop = 0;
var delta = 5;
var navbarHeight = $('header').outerHeight();

$(window).scroll(function(event){
    didScroll = true;
});

setInterval(function() {
    if (didScroll) {
        hasScrolled();
        didScroll = false;
    }
}, 900);

function hasScrolled() {
    var st = $(this).scrollTop();
    
    // Make sure they scroll more than delta
    if(Math.abs(lastScrollTop - st) <= delta)
        return;
    
    // If they scrolled down and are past the navbar, add class .nav-up.
    // This is necessary so you never see what is "behind" the navbar.
    if (st > lastScrollTop && st > navbarHeight){
        // Scroll Down
        $('header').removeClass('nav-down').addClass('nav-up');
    } else {
        // Scroll Up
        if(st + $(window).height() < $(document).height()) {
            $('header').removeClass('nav-up').addClass('nav-down');
        }
    }
    
    lastScrollTop = st;
}

$('.menu-outter').click(function(){
$('.common-modal').toggleClass('d-block show');
});