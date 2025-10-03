
// Dom Manipulation2
//Dengan menembah bagian paling bawah
const pBaru = document.createElement('p')
const teksBaru = document.createTextNode('Paragraf Baru')

pBaru.appendChild(teksBaru)

const sectionA = document.getElementById('a')
sectionA.appendChild(pBaru)

//Dengan Menambah bagian yang sesuai yang saya inginkan
const sectionB = document.getElementById('b')
const p4 = document.createTextNode
