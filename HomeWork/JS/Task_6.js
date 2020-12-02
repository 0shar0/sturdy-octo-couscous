//-----1-----

// document.getElementById('test').innerHTML = "Last"
// document.querySelector('div').innerHTML = "Last"

//-----2-----

// document.images.item(0).src = "../Images/cat.jpg"

//-----3-----

// let d = document.querySelectorAll('p')
// for (i = 0; i < d.length - 1; i++){
//     alert ('Selector text ' + i + ': ' + d.item(i).innerText)
// }

//-----4-----

// alert(document.querySelectorAll('li').item(0).innerHTML)
// alert(document.querySelectorAll('li').item(4).innerHTML)
// alert(document.querySelectorAll('li').item(1).innerHTML)
// alert(document.querySelectorAll('li').item(3).innerHTML)
// alert(document.querySelectorAll('li').item(2).innerHTML)

// alert(document.body.childNodes[1].childNodes[1].innerHTML)//1
// alert(document.body.childNodes[1].childNodes[9].innerHTML)//5
// alert(document.body.childNodes[1].childNodes[3].innerHTML)//2
// alert(document.body.childNodes[1].childNodes[7].innerHTML)//4
// alert(document.body.childNodes[1].childNodes[5].innerHTML)//3

//-----5----

// document.querySelector('h1').style.backgroundColor = '#00FF00'
// document.querySelectorAll('p').item(0).style.fontWeight = 600
// document.querySelectorAll('p').item(1).style.color = '#FF0000'
// document.querySelectorAll('p').item(2).style.textDecoration = 'underline'
// document.querySelectorAll('p').item(3).style.fontStyle = 'italic'
// document.getElementById('myList').style.display = 'flex'
// document.getElementById('myList').style.listStyle = 'none'
// document.querySelectorAll('span').item(0).style.display = 'none'

//-----6-----

// let x = prompt('Enter first value')
// let y = prompt('Enter second value')
// document.getElementById('input1').value = x
// document.getElementById('input2').value = y
// document.body.style.display = 'grid'
// document.body.style.gridTemplateColumns = '100px, 100px'
// document.body.style.gridTemplateRows = '20px, 1fr'
// document.getElementById('input2').style.gridColumn = '1/1'
// document.getElementById('input1').style.gridColumn = '2/2'
// document.getElementById('input1').style.gridRow = '1/1'
// document.getElementById('input2').style.gridRow = '1/1'

//-----7-----

// let newMain = document.createElement('main')
// newMain.className = 'mainClass chek item'
// document.body.prepend(newMain)

// let newDiv = document.createElement('div')
// newDiv.id = 'myDiv'
// document.querySelectorAll('main').item(0).prepend(newDiv)

// let newP = document.createElement('p')
// newP.innerHTML = 'First paragraf'
// myDiv.prepend (newP)