console.log('Event JS loaded.')
const sayHello = function(){
    
};
// $(document).ready(function(){

$('#kitty').on('click',function(){
    console.log('kitty is clicked!');
});


const liTag=Array.from(document.querySelectorAll('li'));
for(const li of liTag){
    li.addEventListener('click',function(){
        console.log("it's clicked")
        console.log("li clicked", this)
        
    })
}

// liTag.forEach(function(item){
//     item.addEventListener('click',function(){
//     console.log("it's clicked")
//     })
// })
$(':text').on('blur',function(){
    console.log("Blur event is triggered")
})

$(':text').focus(function(){
    $(':text').css("background","yellow")})

$('#dropdown').change(function(){
    let i=$('#dropdown :selected').html();
    $('#message').html("You selected:"+ i);
})
$('#toggle').on('click',function(){
    console.log('toggle button clicked');
    $('.triple-kitty1').toggle();
})
$('#fade').on('click',function(){
    $('.triple-kitty2').fadeOut();
})
$('#show').on('click',function(){
   $(this).find('img').slideToggle();
})
$('form').on('submit',function(){
    console.log('form submitted');
    return false;
})

$('#kitty').on('mousemove',function(event){
    console.log('img area hovered')
    console.log(event.originalEvent.offsetX);
})
$('#kitty').on('dblclick',function(){
    console.log("it's double clicked")
})

// $('*').on('click',function(event){
//     console.log('click:',this);
// })

$(window).on('resize',function(event){
    console.log('resize!',event.originalEvent)
})
$(window).on('scroll',function(event){
    console.log('scrolling',event);
})

// $().animate(cssObject,timer,onComplete);

$("#kitty").on('click',function(){
    const originalWidth=$(this).css('width');
    $(this)
        .animate({width:'500px'},200,function(){
            $(this).animate({width: originalWidth})
        })
     
});
// });
