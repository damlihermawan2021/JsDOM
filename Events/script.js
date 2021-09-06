// const p2 = document.querySelector('.p2')
// function ubahWarnap2(){
//     p2.style.backgroundColor='lightblue';
// }
// p2.onclick = ubahWarnap2;

const p3 = document.querySelector('.p3');
// function ubahWarnap3(){
//     p3.style.backgroundColor='lightblue';
// }
// p3.onclick = ubahWarnap3;

// const p4 = document.querySelector('section#b');
// p4.addEventListener('click', function(){
//     const ul = document.querySelector('section#b ul');
//     const liBaru = document.createElement('li');
//     const textLiBaru = document.createTextNode('item baru');
//     liBaru.appendChild(textLiBaru);
//     ul.appendChild(liBaru);
// });

p3.addEventListener('mouseenter', function(){
    p3.style.backgroundColor='lightgreen';
})

p3.addEventListener('mouseleave', function(){
    p3.style.backgroundColor='white';
})