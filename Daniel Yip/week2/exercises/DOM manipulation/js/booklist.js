console.log('booklist');


var books = [
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

//   for (let i = 0; i < books.length; i++){
//       const newP = document.createElement('p');
//       newP.innerText = books[i].title + books[i].author;
//       document.body.appendChild(newP);
//   }

const ulBooks = document.createElement('ul');
document.body.appendChild(ulBooks);


  for (let i = 0; i < books.length; i++){
    const newLi = document.createElement('li');
    newLi.innerText = books[i].title + books[i].author;
    document.querySelector('ul').appendChild(newLi);
}