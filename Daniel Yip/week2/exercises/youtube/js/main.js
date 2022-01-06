// Step by Step:

// Create an array of every link on the page using document.querySelectorAll( CSS-SELECTOR-GOES-HERE )
// Iterate through the array. In each iteration of the loop:

// Find the current href using currentLink.href (assuming your DOM element loop variable is called currentLink), and store into a variable

// Generate a thumbnail URL using youtube.generateThumbnailUrl(videoUrl)

// Create an IMG element using document.createElement(tagName)

// Set the "src" of the IMG element using newImage.src = 'something'

// Append the IMG to the link using element.appendChild(element)


const $allLinks = $('a')

$allLinks.each(function(){
    const thumbURL = youtube.generateThumbnailUrl($(this).attr('href'));
    // console.log(thumbURL)
    const $thumbnail = $('<img>');

    $thumbnail.attr('src',thumbURL);

    $(this).append($thumbnail)
})

// const addThumbToLink = function( linkNode ){
//     const thumbnailUrl = youtube.generateThumbnailUrl(linkNode.href);
//     const thumbnail = document.createElement('img');
//     thumbnail.src = thumbnailUrl;
//     linkNode.appendChild(thumbnail);
// };

// const linkArray = document.querySelectorAll('a');

// const addThumbToLink = function( linkNode ){
//     const thumbnailUrl = youtube.generateThumbnailUrl(linkNode.href);
//     const thumbnail = document.createElement('img');
//     thumbnail.src = thumbnailUrl;
//     linkNode.appendChild(thumbnail);
// };

// for (let i = 0; i < linkArray.length; i++){
//     addThumbToLink(linkArray[i]); 
// }


// linkArray.forEach(  function(  currentLink, index, third  ){
//     console.log(`inside for each callback`, currentLink);
//     console.log(`index is`, index);
//     console.log(third);
//     addThumbToLink(currentLink);

// }  );


// linkArray.forEach(addThumbToLink);

// for(const item of linkArray){
//     addThumbToLink(item)
// }



