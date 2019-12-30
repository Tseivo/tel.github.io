$(document).ready(function(){
  $(".owl-carousel").owlCarousel({
        margin: 50,
        items: 2,
        loop: true,
        smartSpeed: 200,
        autoplay: true,
        autoplayHoverPause: true,
        autoplayTimeout: 3500,
        autoplaySpeed: 2000,
        animateOut: 'slideOutDown',
        animateIn: 'flipInX',
        responsive:{
                0:{
                    items: 1
                },
                700:{
                    items: 2
                }
        }
  });
});
	


