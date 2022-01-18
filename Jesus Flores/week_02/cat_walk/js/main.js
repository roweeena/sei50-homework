//JQuery
$(document).ready(function(){
    const $catImg = $("#catImg");
    let position = 10;
    const goCrazyGoStupid = function(){
        let currentPosition = parseInt($catImg.css("left"));
        $catImg.css("left", `${(currentPosition + position)+'px'}`);
        if (currentPosition > (window.innerWidth-$catImg.width())) {
            $catImg.addClass("flip");
            position = -10;
        } 
        if(currentPosition <= 0){
            position = 10;
        }  
    }
setInterval(goCrazyGoStupid,20);
})

  
//Vanilla JS
/* const catImg = document.querySelector("#catImg");
let position = 10;
window.setInterval(function(){
    let currentPosition = parseInt(catImg.style.left);
    catImg.style.left = (currentPosition + position) + 'px';
    if (currentPosition > (window.innerWidth-catImg.width)) {
        catImg.classList.add("flip");
        position = -10;
    } 
    if(currentPosition <= 0){
        position = 10;
    } 
},50) */
  




