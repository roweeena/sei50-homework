console.log("jQuery main JS loaded");
const $introPara=$('#intro');
console.log('$introPara',$introPara);

$introPara.css('background-color','white');
$introPara.css({
    fontSize:'18pt',
    fontFamily:'Comic Sans MS'
});

//select and modify on the same line
// $('p')
//     .css('background-color','hotpink')
//     .fadeOut(1000);


const $aTag=$('a').html();
console.log($aTag);
$introPara.css('background-color');

// $("<img>")
//     .attr(
//     src:'http://www.placekitten.com/200/200'
    
// )
//     .appenTo('h1');

// $("<img>").attr("src","http://www.placekitten.com/200/200")
// .appenTo('h1');
$('p').each(function(){
    console.log(this.innerHTML);
    $(this).html('something');
})
