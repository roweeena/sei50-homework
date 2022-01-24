


const body = document.querySelector("body");

body.style.fontFamily = "Arial, sans-seriff";

document.querySelector("#nickname").innerText = "Yuffin";

document.querySelector("#favorites").innerText = "Living";

document.querySelector("#hometown").innerText = "Sydney";

const li = document.querySelectorAll("li");

for (let i = 0; i < li.length; i++) {
    li[i].className = "listitem";
}

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



for (let i = 0; i < books.length; i++) {

    const newUL = document.createElement("ul");
    const newTitle = document.createElement("li");
    newTitle.innerText = `title: ${books[i].title}`
    const newAuthor = document.createElement("li");
    newAuthor.innerText = `author: ${books[i].author}`
    newUL.appendChild(newTitle);
    newUL.appendChild(newAuthor);

    document.body.appendChild(newUL);

    if (books[i].alreadyRead) {
        newUL.style.color = "green";
    } 

}

const newStyle = document.createElement("style");
newStyle.innerHTML = ".listitem {\ncolor: red;\n}";

document.body.appendChild(newStyle);

const newImgTag = document.createElement('img');
newImgTag.src = 'https://placebear.com/200/300';
newImgTag.alt = 'A couple of bears';

document.body.appendChild(newImgTag);


