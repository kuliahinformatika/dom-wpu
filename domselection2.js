//DOM Selection1
//document.getElementById() ==> element
//document.getElementsByTagName() ==> HTMLCOLLECTION
//document.getElementsByClassName() ==> HTMLCOLLECTION

//DOM Selection2 ==> kalau tidak merubah struktur html
//document.querySelector() ==> element
const p4 = document.querySelector('#b p')
p4.style.color = 'green'
p4.style.fontSize = '40px'

const li2 = document.querySelector('section#b ul li:nth-child(2)')
li2.style.backgroundColor = 'orange'

const p = document.querySelector('p')
p.innerHTML = 'dirubah dengan javascript '

const p2 =document.querySelector('section#b ul li:nth-child(3)')
p2.style.backgroundColor = 'red'

//document.querySelectorAll() ==> nodeList
const pbaru = document.querySelectorAll('p')
pbaru[2].style.backgroundColor = 'light blue'