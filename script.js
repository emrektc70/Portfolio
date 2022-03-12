$(document).ready(function(){
  $(window).scroll(function(){
    if(this.scrollY > 20) {
      $('.navbar').addClass("sticky");
    }else{
      $('.navbar').removeClass("sticky");
    }
    if(this.scroll > 500){
      $('.scroll-up-btn').addClass("show");
    }else{
       $('.scroll-up-btn').removeClass("show");
    }
  }); 

 // typing animation script

 var typed = new Typed(".typing",{
   strings: ["19 ans","J'habite a Bourgoin-Jallieu","Prêts pour vos services "],
   typeSpeed: 100,
   backSpeed: 60,
   loop: true,
  
 })
 var typed = new Typed(".typing-2",{
   strings: ["De la Technologie"," De l'Informatique","Des Voitures","Du Sport"],
   typeSpeed: 100,
   backSpeed: 60,
   loop: true,
  
 })

  //slide-up script
  $('.scroll-up-btn').click(function(){
    $('html').animate({scrollTop: 0});
  });

  /*toogle menu/navbar*/
  $('.menu-btn').click(function(){
      $('.navbar .menu').toggleClass("active");
      $('.menu-btn i').toggleClass("active");
  });
 // owl carousels code//

  $('.carousel').owlCarousel({
    margin: 20,
    loop: true,
    autoplayTimeOut: true,
    autoplayHoverPause: true,
    responsive: {
      0:{
        items: 1,
        nav: false,
      },
      600:{
        items: 2,
        nav: false,
      },1000:{
        items: 3,
        nav: false,
      }
    }

  })


});
