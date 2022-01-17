console.log('YT JS');

// Step by Step:

//     Create an array of every link on the page using document.querySelectorAll( CSS-SELECTOR-GOES-HERE )
//     Iterate through the array. In each iteration of the loop:
//     Find the current href using currentLink.href (assuming your DOM element loop variable is called currentLink), and store into a variable
//     Generate a thumbnail URL using youtube.generateThumbnailUrl(videoUrl)
//     Create an IMG element using document.createElement(tagName)
//     Set the "src" of the IMG element using newImage.src = 'something'
// Append the IMG to the link using element.appendChild(element)

let allLinks = [];
let linksArray = [];
let thumbNailArray = [];

allLinks = document.querySelectorAll('li a');

for (let i = 0; i < allLinks.length; i++) {
    currentLink = allLinks[i];
    linksArray.push(currentLink.href);
    thumbNailArray.push(youtube.generateThumbnailUrl(linksArray[i]));
    // console.log(linksArray[i])
    // console.log(thumbNailArray[i])
    const imgTag = document.createElement('img');
    imgTag.src = thumbNailArray[i];
    
    currentLink.appendChild(imgTag);
    
    // document.body.appendChild(imgTag)
}

// TURN TO FUNCTION
//function in the loop
    

    // console.log(linksArray);
    // console.log(thumbNailArray);
    
    // for (let i = 0; i < allLinks.length; i++) {
    //     currentLink = allLinks[i];
    //     linksArray.push(currentLink.href);
        
    //     function addThumb(linkNode) {
    //         thumbNailArray.push(youtube.generateThumbnailUrl(linkNode));
    //         // console.log(linksArray[i])
    //         // console.log(thumbNailArray[i])
    //         const imgTag = document.createElement('img');
    //         imgTag.src = thumbNailArray[i];
            
    //         linkNode.appendChild(imgTag);
            
    //         // document.body.appendChild(imgTag)
    //     }
    // }
    // addThumb(allLinks[1]);




// array.forEach( function( argument, index, third ){ //loops through array. argument can be item in array. index outputs index number. doesn't have to be named index. second argument always outputs index. Third argument outputs the original array
//  console.log()
// 
// })
// 
// for .. in is used to loop through kees of obj
// for .. of is to loop through the elements of array
// for (const item of object)
