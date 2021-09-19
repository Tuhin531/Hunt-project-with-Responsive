$('.venobox').venobox(); 
$('.service_slider').slick({
  infinite: true,
  slidesToShow: 3,
  slidesToScroll: 1,
  vertical: true,
  centerMode: true,
  centerPadding: "0",
   arrows: true,
  prevArrow: '<i class="fas fa-chevron-up prev"></i>',
  nextArrow: '<i class="fas fa-chevron-down next"></i>',
  responsive: [
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        
      }
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        slidesToScroll:1,
        vertical:false
      }
    },
    {
      breakpoint: 576,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        vertical:false,
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
}); 
$('.test-img-slider').slick({
  infinite: true,
  slidesToShow: 3,
  slidesToScroll: 1,
  vertical: true,
  centerMode: true,
  centerPadding: "0",
   arrows: true,
  prevArrow: '<i class="fas fa-chevron-up prev"></i>',
  nextArrow: '<i class="fas fa-chevron-down next"></i>',
  asNavFor: '.testi_textbox_slider',
  responsive: [
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
       
      }
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        vertical:false,
      }
    },
    {
      breakpoint: 576,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        vertical:false
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
}); 

$('.testi_textbox_slider').slick({
  infinite: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  asNavFor: '.test-img-slider',
});

$('.counter').counterUp({
  delay: 10,
  time: 1000
});

$('.sponsor-slider').slick({
  infinite: true,
  arrows: false,
  slidesToShow: 5,
  slidesToScroll: 1,
  centerMode: true,
  centerPadding: "0",
  autoplay: true,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        
      }
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 576,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        vertical:false
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
  
});

