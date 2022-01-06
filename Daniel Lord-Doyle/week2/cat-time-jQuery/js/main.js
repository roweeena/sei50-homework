$catImage = $('#walkingcat')

console.log($catImage)

$catImage.css({
    left: 0,
    top: 100,
})



catwalk = (speed) => {

    const intervalID = setInterval( () => {
        const currentLeftOffset = parseInt($catImage.css('left'));
        const newLeftOffset = currentLeftOffset + speed;
        $catImage.css('left', newLeftOffset);

        if (newLeftOffset >= (window.innerWidth - $catImage.prop('width'))) {
            clearInterval (intervalID)
            $catImage.toggleClass('transform')
            catwalkLeft(speed)
        }

    }, 50);
}

catwalkLeft = (speed) => {

    const intervalID = setInterval( () => {
        const currentLeftOffset = parseInt($catImage.css('left'));
        const newLeftOffset = currentLeftOffset - speed;
        $catImage.css('left', newLeftOffset);

        if (newLeftOffset <= 0) {
            clearInterval (intervalID)
            $catImage.toggleClass('transform')
            catwalk(speed)
        }

    }, 50);
}

catwalk(10)