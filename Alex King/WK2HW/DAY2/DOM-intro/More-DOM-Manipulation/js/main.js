console.log('more dom work')

const bodyChange = document.getElementById('intro')
bodyChange.style.fontFamily = "Arial, sans-serif";

// document.body.style.fontFamily = "Arial, sans-serif"



// const addNick = document.createElement('p'
// );
// addNick.innerHTML='Alex';
document.getElementById('nickname').innerHTML = "alex"

document.getElementById('favorites').innerHTML = "text"

document.getElementById('hometown').innerHTML = "mars"

// document.body.appendChild(addNick);



const goThroughLi = document.querySelectorAll('li');

for (let i=0; i<goThroughLi.length; i++ ){
    const currentLi = goThroughLi[i];
    currentLi.className = "listItem"
}

const myPic = document.createElement('img');
myPic.src = 'http://www.placekitten.com/100/100';
document.body.appendChild(myPic);

// myPic.style.left = "30px"


// Iterate through the array of books. For each book, create a p element with the book title and author and append it to the page.
// Bonus: Use a ul and li to display the books.
// Bonus: add a property to each book with the URL of the book cover, and add an img element for each book on the page.
// Bonus: Change the style of the book depending on whether you have read it or not.

let books = [
    {
        title: 'The Design of EveryDay Things',
        author: 'Don Norman',
        alreadyRead: false
    },
    {
        title: 'The Most Human Human',
        author: 'Brian Christian',
        alreadyRead: true
    }
];

const ulContainer = document.createElement('ul');

for (let i = 0; i<books.length; i++){
    const currentBook = books[i];

    // const pTag = document.createElement('p');
    // pTag.innerHTML = `<em> ${currentBook.title}</em> by ${currentBook.author}`;

    // document.body.appendChild(pTag);

    const liTag = document.createElement('li');
    liTag.innerHTML = `<em> ${currentBook.title}</em> by ${currentBook.author}`;

    if (currentBook.alreadyRead){
        liTag.className = "read";
    } else {
        liTag.className = "unread";
    }
    
    ulContainer.appendChild(liTag);
}

document.body.appendChild(ulContainer);

// const bookList = function(){
//     let items = document.createElement('ul');

//     for (let i = 0; i<books.length; i++){
//         let item = document.createElement('li');
//         item.appendChild(document.createTextNode(books[i].title))
//         bookList.appendChild(item);
//     }
//     return items;
// }
// bookList()
  


// const addInfo = document.getElementsByTagName("li");

// addInfo.style.color = "green";
