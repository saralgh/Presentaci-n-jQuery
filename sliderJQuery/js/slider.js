$(document).ready(function(){
  
  $('.next').click(slideFoto);
  $('.prev').click(slideFoto);

/*  FUNCION AUTOMATICA  */
  function slideAuto(){
    var currentImg = $('.active');
    var nextImg = currentImg.next();

    if(nextImg.length == 0){
      nextImg = $(".slider-inner").find("img:first");
    }
    
    currentImg.fadeOut("slow",function(){
      currentImg.removeClass('active');
    });
      
    nextImg.fadeIn("slow",function(){
      nextImg.addClass('active');
    }); 
  }
  
  var intervalo = setInterval(slideAuto, 1500);

/*  FUNCIONES PARA LOS BOTONES  */

  function slideFoto(){
    clearInterval(intervalo);

    var currentImg = $('.active');

    if($(this).hasClass("next")){
      var nextImg = currentImg.next();
      
      if(nextImg.length == 0){
        nextImg = $('.slider-inner').find("img:first");
      }
    }else{
      var nextImg = currentImg.prev();

      if(nextImg.length == 0){
        nextImg = $(".slider-inner").find("img:last");
      }
    }

    currentImg.fadeOut("slow",function(){
      currentImg.removeClass('active');
    });
    
    nextImg.fadeIn("slow",function(){
      nextImg.addClass('active');
    });

    intervalo = setInterval(slideAuto, 1500);
  }
});