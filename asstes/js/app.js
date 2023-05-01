//   up scroll js start
$(window).on('scroll' ,function() {
  var scrollSize =  $(window).scrollTop()

//   scroll top js start

  if(scrollSize > 200) {
   $('#up').slideDown();
  }
  else{
   $('#up').slideUp();
  }
})
//    scroll top js end

$('#up').on('click',function() {
  $('html,body').animate({
      scrollTop:0,
  },2000)
})

//   up scroll js end

  // offer js section start
  $('.projects_slider').slick({
    arrows: false,
    slidesToShow: 3,
    autoplay:true,
    dots: true,
    dotsClass: 'projects_slider_dots',
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow:2,
          autoplay:true,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow:1,
          autoplay:true,
        }
      },
      {
        breakpoint: 500,
        settings: {
          slidesToShow: 1,
          arrows: false,
          autoplay: true,
        }
      },
    ]
  });

  // offer js section end

