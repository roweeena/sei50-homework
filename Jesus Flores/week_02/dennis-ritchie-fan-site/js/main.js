   $(function(){
        $(window).scroll(function() {
        const page = $(this).scrollTop() + $(this).innerHeight();
        console.log(page);
        $(".showContent").each(function() {
          const section = $(this).offset().top + $(this).outerHeight();
          if (section < page) { //object comes into view (scrolling down)
              $(this).fadeTo(1500,1);
          } 
        });
   }); 
    $('.showBiography').fadeTo(2000,1);

    $(".anchor").click(function(e) {
        e.preventDefault();
        const anchorPoint = $(this).attr("href");
        $('html,body').animate({scrollTop: $(anchorPoint).offset().top},1000);
    });

})