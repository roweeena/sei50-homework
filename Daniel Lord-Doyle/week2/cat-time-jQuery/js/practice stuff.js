$('p').addClass('special')
$('p').addClass('special2')
$('p').removeClass('special2')

// get all items with ID intro
const $intro = $('#intro')
console.log('$intro', $intro)

// change the CSS in relation to elements with #intro
$intro.css({
    backgroundColor: 'red',
    fontFamily: 'Comic Sans MS',
    fontSize: 32
})

const $p = $('p')
console.log($p)

$p.
    css({ textDecoration: 'underline' })

$intro
    .fadeOut(5000)
    .css ( { color: 'blue' } )

const $allALinks = $( 'a' )
console.log($allALinks.attr('href'))

const aTagHref = $allALinks.attr('href')
console.log(aTagHref)

const aTagHTML = $allALinks.html();
console.log(aTagHTML)

$allALinks.each( function () {
    console.log($(this).attr('href'))
} )


$allALinks.each( function () {
    $(this).attr('href', 'https://maryisthebest.com')
    // $(this).append($p)
} )

$allALinks.each( function (i) {
    console.log($(this).attr('href'))
} )