console.log(`Event JS loaded.`);

$(document).ready(function(){



    $('#kitty').on('click', function(){
        console.log('Kitties clicked');
        $(this).css('border', '2px solid green')
    });

    // $('li').on('click', function(){
    //     console.log('List item clicked');
    //     $(this).html('meow')
    // });

    $('input[type="text"]').on('keyup', function(event){
        // console.log('key was pressed!', event.originalEvent);

        const inputContents = $(this).val();

        console.log('value', inputContents);

        $('.message').html(inputContents);

    });

    $('input[type="text"]').on('focus', function(){
        console.log('focused');
        $(this).css('background-color', 'yellow')
    });

    $('input[type="text"]').on('blur', function(){
        console.log('blurred');
        $(this).css('background-color', 'white')
    });

    // Select dropdown event

    $('select').on('change', function(){
        console.log('select change');
        console.log(`selected item:`, $(this).val());
    })


    $('#show').on('click', function(){
        console.log(('show clicked'));
        // $('.triple-kitty3').show();
        // console.log($(this).next())
        $(this).find('img').show();
    })


    $('form').on('submit', function(){
        console.log('form sumbitted');
        return false; // stop form from submitting
    })

    // $('#kitty').on('mousemove', function(event){
    //     console.log('hover area image move');
    //     console.log(event.originalEvent.offsetX);
    // })

    $('*').on('click',function(event){
        console.log('click', this)

        // if(this.nodeName === 'BODY'){
        //     event.stopPropagation()
        // }


    })

    // // keydown
    // $(window).on('keydown', function(){
    //     // console.log(`key down`);
    //     $('.keydown').css('font-size', '20pt')
    // })

    // // keyup
    // $(window).on('keyup', function(){
    //     // console.log(`key up`);
    //     $('.keyup').css('color', 'red')
    // })

    // // keypress - IGNORES THE ARROWS!
    // $(window).on('keypress', function(){
    //     // console.log(`key pressed`);
    //     $('.keypress').css('border', '2px solid green')
    // })

    // // mouseup - toggle
    // $('#toggle').on('mouseup', function(){
    //     console.log('mouseup');
    //     $('.triple-kitty1').toggle();

    // })

    // // mouse move - fade out
    // $('#fade').on('mousemove', function(event){
    //     console.log(event);
    //     $('.triple-kitty2').fadeOut();
    // })

    // //mouse down - fade in
    // $('#fade').on('mousedown', function(event){
    //     console.log(event);
    //     $('.triple-kitty2').fadeIn();
    // })

    // // click - fade toggle
    // $('#show').on('click', function(event){
    //     console.log(event.originalEvent);
    //     $('.triple-kitty3').fadeToggle(1000, 'swing', function(){
    //         console.log(`fade done`);
    //     });
    // })


    // $(`form input[type='text']`).on('keypress',function(event){
        
    //     const char = event.originalEvent.charCode
        
    //     $(`input[type='submit']`).attr('value', char)

    // })


    // $('#dropdown').on('click', function(){
    //     console.log('hmm');

    // })

    // $(window).on('resize', function(event){
    //     console.log('resize!', window.innerWidth);
    // })

    // $(window).on('scroll', function(event){
    //     console.log(`scrolling`, event.originalEvent);
    // })

    $('#kitty').on('click', ( function(){

        $(this)
        .animate({width: '500px'}, 3000)
        .animate({width: '200px'}, 200, function(){
            console.log('finished');
        });

    }))

}) // end of $(document).ready()