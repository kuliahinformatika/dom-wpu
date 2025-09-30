//DOM Selection
//document.getElementById() -> element
const judul = document.getElementById('judul')
judul.style.color = 'red'
judul.style.backgroundColor = "yellow"
judul.innerHTML = "Murodalhakim"

//document.getElementByTagName() -> HTMLCollection
const p = document.getElementsByTagName('p')
//harus ada array.karena p adalah array .yang bisa diwarnai adalah element
// p[2].style.backgroundColor = 'lightblue'

//opsi mewarnai semua p dengan looping
for (let i = 0; i < p.length; i ++) {
p[i].style.backgroundColor = 'lightblue'
}

const h1 = document.getElementsByTagName('h1')[0]
h1.style.fontSize = '50px'


//dokument.getElementsByClassName()
//==>HTMLCollection

const p1 = document.getElementsByClassName('p1')
p1[0].innerHTML = 'hallo bos iki diganti'