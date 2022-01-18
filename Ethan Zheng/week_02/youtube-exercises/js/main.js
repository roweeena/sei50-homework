const links = document.querySelectorAll("a");
/*
for (let i = 0; i < links.length; i++) {
    const currentLink = links[i];
    const thumbnail = youtube.generateThumbnailUrl(currentLink.href);
    const newIMG = document.createElement("img");
    newIMG.src = thumbnail;
    links[i].appendChild(newIMG);
}
*/

 const addThumbnailToLink = function (linkNode) {
    const thumbnail = youtube.generateThumbnailUrl(linkNode.href);
    const newIMG = document.createElement("img");
    newIMG.src = thumbnail;
    linkNode.appendChild(newIMG);
}
/*
for (let i = 0; i < links.length; i++) {
    addThumbnailToLink(links[i]);
}
*/

//forEach loop
/* links.forEach(function (currentLink, index, array) {
    console.log('index is:', index);
    console.log('Inside forEach callback', currentLink);
    console.log(array);
    addThumbnailToLink(currentLink);
});
*/

//for..of loop
for (const element of links) {
    addThumbnailToLink(element);
}