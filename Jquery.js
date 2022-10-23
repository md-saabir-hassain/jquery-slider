$(document).ready(function(){

    let inWrap = $('.inner-wrapp');

    $('.pre').on('click', function(){

      inWrap.animate({left:'0%'}, 300, function(){

       inWrap.css('left','-100%');

       $('.slider').first().before($('.slider').last());

      });

    }); $('.next').on('click', function(){

        inWrap.animate({left:'-200%'}, 300, function(){
  
         inWrap.css('left','-100%');
  
         $('.slider').last().before($('.slider').first());
  
        });
  
      });



});