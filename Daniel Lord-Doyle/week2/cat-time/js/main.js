

// who is walking cat?

walkingcat = document.querySelector('#walkingcat')
walkingcat.style.left = '0px';  // The value set in the CSS file won't be visible to JS
widthOfWindow = window.innerWidth;

// the function of catwalk, taking speed as the argument

catwalk = (speed) => {

    const intervalID = setInterval ( function () {
        const currentLeftOffset = parseInt( walkingcat.style.left );
        const newLeftOffset = currentLeftOffset + speed;
        walkingcat.style.left = newLeftOffset + 'px';

        if (newLeftOffset >= (window.innerWidth - walkingcat.width)) {
            clearInterval ( intervalID )
            walkingcat.className = 'transform1'
            catwalkLeft(speed)
        }

    }, 50);

}

catwalkLeft = (speed) => {

    const intervalID = setInterval ( function () {
        const currentLeftOffset = parseInt( walkingcat.style.left );
        const newLeftOffset = currentLeftOffset + (speed * -1);
        walkingcat.style.left = newLeftOffset + 'px';

        if (newLeftOffset <= (0)) {
            clearInterval ( intervalID )
            walkingcat.className = 'transform2'
            catwalk(speed)
        }

    }, 50);

}

catwalk(20)