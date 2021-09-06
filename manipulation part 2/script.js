// DOM manipulation
// buat Element baru
const pBaru = document.createElement('p');
const textBaru = document.createTextNode('paragraph dibawah 3');

// simpan tulisan kedalam paragraph
pBaru.appendChild(textBaru);

// simpan pBaru kedalam SectionA
const sectionA = document.getElementById('a');
sectionA.appendChild(pBaru);

const liBaru = document.createElement('li');
const textLiBaru = document.createTextNode('Item Baru');

liBaru.appendChild(textLiBaru);

const ul = document.querySelector('section#b ul');
const li2 = ul.querySelector('li:nth-child(2)');

ul.insertBefore(liBaru,li2)

// const link = document.getElementsByTagName('a')[0];
// sectionA.removeChild(link);

// sectionA.replaceChild('textBaru','')

const sectionB = document.getElementById('b');
const p4 = sectionB.querySelector('p');

const h2Baru = document.createElement('h2');
const textH2Baru = document.createTextNode('Ini replace paragraph 2');

h2Baru.appendChild(textH2Baru);
sectionB.replaceChild(h2Baru,p4);

pBaru.style.backgroundColor='lightgreen';
h2Baru.style.backgroundColor='lightgreen';
liBaru.style.backgroundColor='lightgreen';

