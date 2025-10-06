
// Dom Manipulation2
//Dengan menembah bagian paling bawah
const pBaru = document.createElement('p')
const teksBaru = document.createTextNode('Paragraf Baru')

pBaru.appendChild(teksBaru)

const sectionA = document.getElementById('a')
sectionA.appendChild(pBaru)




//Dengan Menambah bagian yang sesuai yang saya inginkan
const liBaru = document.createElement('li')
const teksLiBaru = document.createTextNode('itemBaru')

liBaru.appendChild(teksLiBaru)

const ul = document.querySelector('section#b ul')
const li2 = ul.querySelector('li:nth-child(2)')

ul.insertBefore(liBaru, li2)



// remove link==> menghapus child
const link = document.getElementsByTagName('a')[0]
sectionA.removeChild(link)


// 
const sectionB = document.getElementById('b')
const p4 = sectionB.querySelector('p')

const h2Baru = document.createElement('h2')
const teksH2Baru = document.createTextNode('Judul Baru')

h2Baru.appendChild(teksH2Baru)

sectionB.replaceChild(h2Baru, p4)

pBaru.style.backgroundColor = 'lightgreen'
liBaru.style.backgroundColor = 'lightgreen'
h2BaruBaru.style.backgroundColor = 'lightgreen'