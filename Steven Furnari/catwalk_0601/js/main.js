let walkDirection = 1;
const cat = document.querySelector('img');
cat.style.left = '0px'

setInterval( function(){
    const currentOffsetInt = parseInt(cat.style.left) + (walkDirection * 10);
    cat.style.left = currentOffsetInt + 'px';

    if(currentOffsetInt >= window.innerWidth-cat.clientWidth || currentOffsetInt < 0){
            
            walkDirection = walkDirection * -1;
            cat.style.transform = `scaleX(${walkDirection})`
        }

}, 30 );
