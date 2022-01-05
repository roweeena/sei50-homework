console.log('hello');

// (In JS) Change the body tag's style so it has a font-family of "Arial, sans-serif".

document.body.style.fontFamily = "Arial, sans-serif";


// (In JS) Set the content of each of the empty <span>s (nickname, favorites, hometown) to contain your own information.

const nickname = document.querySelector('#nickname');
const favorites = document.querySelector('#favorites');
const hometown = document.querySelector('#hometown');

nickname.innerHTML = "yipples";
favorites.innerText = 'Pizza';
hometown.innerHTML = 'Sydney'


// Iterate through each li and change the class to "listitem". Add a style tag that sets a rule for "listitem" to make the color red.

const listItems = document.querySelectorAll('li');

for (let i = 0; i < listItems.length; i++){
    listItems[i].classList.add('listItem');
    listItems[i].style.color = 'red'
};



// Create a new img element and set its src attribute to a picture of you. Append that element to the page.

const picOfMe = document.createElement('img');

picOfMe.src = 'http://www.fillmurray.com/200/200'

document.body.appendChild(picOfMe)


