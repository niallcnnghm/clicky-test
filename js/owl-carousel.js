$(document).ready(function(){
  $('.owl-carousel').owlCarousel({
    center: true,
    loop: false,
    items: 1,
    margin: 100,
    startPosition: 2,
    nav: false,
    dots: true,
    responsive: {
      0: {
        stagePadding: 0,
      },
      900: {
        stagePadding: 150,
      }
    }
  });
});