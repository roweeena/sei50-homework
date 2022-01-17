console.log('works')

// $("img").on('mouseover', function(){
//     console.log('list item clicked');
//     // console.log(Math.random());
//     $(this).animate({height:"30px"});

// window.onload = function(){}
// window.addEventListener("DOMContentLoaded",function(){


// })

$()

$(document).ready(function () { 

    $('input[type="text"]').on('keyup', function (event) {

        console.log('key pressed', event.originalEvent)

        const inputContents = $(this).val();

        console.log('value', inputContents);
        // $('#message').html(inputContents)
    })


    const liTags = document.querySelectorAll('li');

    for (const li of liTags) {
        // console.log(li);
        li.addEventListener('click', function (event) {
            console.log('li clicked', this);
            console.log('event:', event);
            // console.log(Math.random())

        })
    }

    $("input").on("focus", function () {
        $(this).css('outline', "2px solid orange")
        console.log("hello hello");
    });

    $("input").on("blur", function () {
        console.log('goodbye goodbye')
    });

    $('select').on('change', function () {
        console.log('select change')
        console.log('selection item:', $(this).val()); //if val not set in html, output is the value of the option(the text/input)
        $('#message').html(`You selected ${$(this).val()}`)
    })


    $("#toggle").on('click', function () {
        $($(this).siblings('img')).toggle('display')
    });

    $("#fade").on('click', function () {
        $($(this).siblings('img')).fadeToggle() // outputs all siblings with img .next instead of .sibling 
    });

    $("#show").on('click', function () {
        $($(this).children('img')).show()
    });

    // $('#dropdown').on("change", function(){
    // console.log('yo')
    // });


    // $('#kitty').on('mouseenter', function(){

    //     console.log('img area hovered')
    // }) // mouseover triggers with child elements also. counterpart = mouseout
    // $('#kitty').on('mouseenter', function(){

    //     console.log('img area left')
    // })

    // $('#kitty').on('mousemove', function(event){
    //     console.log('img area hovered');
    //     console.log(event.originalEvent.offsetX); // output value relative to xoffset, 
    // })

    $('#kitty').on('dblclick', function () {
        console.log('double click');
    })


    // $('*').on('click', function(event){

    //     console.log('click:', this) //outputs going up the family tree

    //     console.log($(this).prop('nodeName'));


    //     // // return false; //stops false. 
    //     // if(this.nodeName === "BODY"){ // if you want to control more exact propagation 
    //     // event.stopPropagation(); // more correct 
    //     // }
    // })

    // $(window).on('resize', function(event){
    //     console.log('resize!', window.innerWidth)
    // })

    // $(window).on('scroll', function(event){
    //     console.log('scrolling', event); //('scrolling'), $(window).scrollTop())

    // })

    $('#kitty').on('click', function () {

        const originalWidth = $(this).css('width');

        $(this)
            .animate({ width: '500px' }, 3000)
            .animate({ width: originalWidth }, 200, function () {
                console.log('finished')

            });


    })


}); // jQuery ready