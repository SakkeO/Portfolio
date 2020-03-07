/*fade in on scroll for photographs*/
$(function(){  // $(document).ready shorthand
    $('.monster').fadeIn('medium');
  });
  
  $(document).ready(function() {
      
      /* Every time the window is scrolled ... */
      $(window).scroll( function(){
      
          /* Check the location of each desired element */
          $('.row').each( function(i){
              
              var bottom_of_object = $(this).position().top + $(this).outerHeight();
              var bottom_of_window = $(window).scrollTop() + $(window).height();
              
              /* If the object is completely visible in the window, fade it it */
              if( bottom_of_window + 100 > bottom_of_object ){
                  
                  $(this).animate({'opacity':'1'},1500);
                      
              }
              
          }); 
      
      });
      
  });

  window.addEventListener("DOMContentLoaded", () => {
    document.querySelector(".row").style.opacity = "0.2";
  });