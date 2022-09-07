$(document).ready(function() {	
    $('.benefits_carousel').owlCarousel({
      items:4,
      loop:false,
      autoplay:false,
      autoplayHoverPause:true,
      smartSpeed:1000,
      slideBy: 1,
      margin:20,
      responsiveClass:true,
      nav:false,
      dots:true,
      responsive:{
          0:{
              items:1,
          },
          767:{
              items:1,
          },
          768:{
              items:3,
              dots:true,
          },
      1024:{
              items:4,
              dots:true,
          }
      }
    })

})
