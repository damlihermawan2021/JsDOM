// DOM Selection
// document.getElementById('');->element
// document.getElementsByTagName('');->HTMLcollection
// document.getElementsByClassName('');->HTMLcollection

// // document.querySelector('');-> element
// const p4 = document.querySelector('#b p');
// p4.style.color='green';
// p4.style.fontSize='30px';

// const li2 = document.querySelector('section#b ul li:nth-child(2)');
// li2.style.backgroundColor= 'orange';

// // tidak semua karena querySelector hanya mengembalikan element bukan HTML collection
// // const p = document.querySelector('p');
// // p.innerHTML='ini diubah pakai javascript';

// // yang benar


// // document.querySelectorAll();
// const p = document.querySelectorAll('p');
// for (i = 0 ; i < p.length; i++){
//     p[i].innerHTML='ini diubah pakai javascript';
// }



const sectionB = document.querySelector('section#b');
const p4 = document.getElementsByTagName('p')[0];
p4.style.backgroundColor = 'lightblue';
p4.style.fontSize='20px';




























