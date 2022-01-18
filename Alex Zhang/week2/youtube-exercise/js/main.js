console.log('Youtube JS loaded');
const allLinks=document.querySelectorAll('a');
console.log(allLinks);

const addThumbnailToLink =function(linkNode){
    console.log('link:',linkNode.href);

    const href=linkNode.href;
    const thumbnailUrl=youtube.generateThumbnailUrl(href);
    console.log("thumbnailURL:", thumbnailUrl);

    const imgTag=document.createElement('img');
    imgTag.src=thumbnailUrl;
    linkNode.appendChild(imgTag);
}
// for(let i=0;i<allLinks.length;i++){
//     addThumbnailToLink(allLinks[i]);
// }
allLinks.forEach(function(currentLink,i,arr){
    console.log('index is:',i);
    console.log('array is:',arr);
    console.log('inside forEach call back',currentLink.href);
    addThumbnailToLink(currentLink);
});

for(const item of allLinks){
    console.log(item);
}