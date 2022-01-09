const $brandPara = $('#brand')

console.log($brandPara);

$brandPara.css('background-color', 'black')

$brandPara.css({
    fontSize: '18pt',
    fontFamily: 'Comic Sans MS'


})

// $('#brand').css('background-color', 'orange');
// $('#brand').fadeOut(5000);

$('#brand')
    .css('background-color', 'orange')
    .fadeOut(5000);


// $('a').html()
// $('a').html('yo has changed to hey')

// $('img').attr('src')
// $('img').attr('src', 'http://placebear.com/200/200')

// $('h1').css('font-size', '25px')

$("<img>")
    .attr({
    src: 'http://www.placekitten.com/200/200',
    alt: 'Adorable kitty'
})
    .appendTo('h1')

    $(document.body).css('background-color', "crimson")


    // $('p').each( function(){


    //     console.log($(this).html);
    
    // })

    // $('p').each( function(){


    //     console.log(this);
    
    // })