let str=$("#hide").text();
console.log(str);
let arr=str.split(/[ ;:_.,?!'"()\-\n]+/ );

let generateRandomInt=function(max){
    return Math.floor(Math.random()*max);

}

let getRandomElementFromArray=function(array){
    const randomIndex = generateRandomInt (array.length);
    return randomIndex;
}
let newWord=arr[getRandomElementFromArray(arr)];
console.log(newWord);
var $div=$("<div>",{id:"newDiv"});
$div.text(newWord);
// $("window").append($div);
var posx = generateRandomInt(window.innerWidth);
var posy = generateRandomInt(window.innerHeight);
const r=Math.random()*255;
const g=Math.random()*255;
const b=Math.random()*255;

$div.css({
    'position':'absolute',
    'left':posx+'px',
    'top':posy+'px',
    'color':`rgb(${r},${g},${b})`,
    'font-size':'100px'

}).appendTo('body').fadeIn(100).delay(1000).fadeOut(500,function(){
    $(this).remove;
})