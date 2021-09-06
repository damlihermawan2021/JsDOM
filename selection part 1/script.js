// DOM selection
// document.getElementById -> mengembalikan element
const judul = document.getElementById('judul');
judul.style.color='red';
judul.style.backgroundColor='grey';
judul.innerHTML='damli hermawan';

// document.getElementsByTagName -> mengembalikan HTMLcollection
const p = document.getElementsByTagName('p');
for(i = 0; i < p.length; i++){
p[i].style.backgroundColor='lightblue';
}

const h1= document.getElementsByTagName('h1')[0];
h1.style.fontSize='50px';  
h1.style.textAlign='center';

// document.getElementsByClassName -> htmlcollention
const p1 = document.getElementsByClassName('p1')[0];
p1.innerHTML='ini adalah class p1';