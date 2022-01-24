console.log('new main js Loaded');
document.body.style.fontFamily="Arial, sans-serif";

const nicknameSpan=document.getElementById('nickname');
nicknameSpan.innerHTML="Lucky";


const faveSpan=document.querySelector('#favorites');
faveSpan.innerHTML="Ruby";


const hometownSpan=document.querySelector('#hometown');
hometownSpan.innerHTML="sydney";

const allLiTags= document.querySelectorAll('li');

for (let i = 0;i< allLiTags.length;i++){
    const currentLi= allLiTags[i];
    currentLi.className ='listitem';
}

const myPic = document.createElement('img');
const button=document.querySelector('#eventExample');
console.log(button);
