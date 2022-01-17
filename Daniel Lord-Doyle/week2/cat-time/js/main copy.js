

// who is walking cat?

walkingcat = document.querySelector('#walkingcat')
walkingcat.style.left = '0px';  // The value set in the CSS file won't be visible to JS
widthOfWindow = window.innerWidth;
myMusic = document.querySelector('#guitarclip')
myQuote = document.querySelector('#quote')

// the function of catwalk, taking speed as the argument

const newImage = document.createElement('img')
newImage.src='imagery/shine.png';
newImage.id='myQuote'
document.getElementById("walkingcat").appendChild(newImage)

catwalk = (speed) => {

    const intervalID = setInterval ( function () {
        const currentLeftOffset = parseInt( walkingcat.style.left );
        const newLeftOffset = currentLeftOffset + speed;
        walkingcat.style.left = newLeftOffset + 'px';
        myQuote.style.visibility = 'hidden'

        if (newLeftOffset >= (window.innerWidth - walkingcat.width)) {
            clearInterval ( intervalID )
            walkingcat.className = 'transform1'
            // document.body.style.backgroundColor = ''
            catwalkLeft(speed)
        }

    }, 50);

}

catwalkLeft = (speed) => {

    const intervalID = setInterval ( function () {
        const currentLeftOffset = parseInt( walkingcat.style.left );
        const newLeftOffset = currentLeftOffset + (speed * -1);
        walkingcat.style.left = newLeftOffset + 'px';

        if (newLeftOffset <= (innerWidth/2)) {
            walkingcat.src = 'imagery/thumb_Lukep_profile.jpeg'
            walkingcat.width = 400
            myMusic.play()
            if (newLeftOffset <= (innerWidth/4))
            myQuote.style.visibility = 'visible'
            document.body.style.backgroundColor = 'blue'
        }
        
        if (newLeftOffset <= (0)) {
            clearInterval ( intervalID )
            walkingcat.className = 'transform2'
            // walkingcat.src = 'imagery/cat-walk.gif'
            walkingcat.src = 'imagery/cat-walk.gif'
            document.body.style.backgroundColor = "hotpink"
            catwalk(speed)
        }

    }, 50);

}

catwalk(20)