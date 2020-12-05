//-----1-----

// let openTab = window.open('', '' ,
//             'width=300, height=300','left=100,top=100');
// function resizeTab(){
//     openTab.resizeTo(500,500)
//     openTab.focus()
// }
// setTimeout(resizeTab(),2000)

// function moveTab(){
//     openTap.moveTo(200,200)
//     openTab.focus()
// }
// setTimeout(moveTab(),2000)

// setTimeout(close(openTab), 2000)

//-----2-----

// function changeStyle(){
//     text.style.color = 'orange'
//     text.style.fontSize = '20px'
//     text.style.fontFamily = 'Comic Sans MS'
// }

//-----3-----

// function makePageBlue(){
//     document.body.style.backgroundColor = 'blue'
// }
// function makePagePink(){
//     document.body.style.backgroundColor = 'pink'
// }
// function makePageBrown(){
//     document.body.style.backgroundColor = 'brown'
// }
// function makePageWhite(){
//     document.body.style.backgroundColor = 'white'
// }
// document.getElementById("button3").addEventListener('mousedown',makePageBrown)
// document.getElementById("button3").addEventListener('mouseup',makePageWhite)

// function makePageYellow(){
//     document.body.style.backgroundColor = 'yellow'
// }
// document.getElementById('url').addEventListener('mouseover',makePageYellow)
// document.getElementById('url').addEventListener('mouseout',makePageWhite)

//-----4-----

// function deleteName(){
//     let x = document.getElementById('Names').value
//     document.getElementById(x).remove()
// }

//-----5-----

// document.getElementById('liveButton').addEventListener('mouseover',mouseOn)
// function mouseOn(){
//     document.getElementById('text').innerText = 'Mouse on me!'
// }
// document.getElementById('liveButton').addEventListener('mouseout',mouseOff)
// function mouseOff(){
//     document.getElementById('text').innerText = 'Mouse is not on me!'
// }
// document.getElementById('liveButton').addEventListener('click',mouseCliked)
// function mouseCliked(){
//     document.getElementById('text').innerText = 'I was pressed!'
// }

//-----6-----

// window.addEventListener("resize", function() {
//     let x = window.innerWidth
//     let y = window.innerHeight
//     document.getElementById('param').innerText = 'Width: ' + x + ', ' + 'Height: ' + y
// }, false);

//-----7-----

function coun(){
    let arr = []
    if (document.getElementById('country').value == 'ger'){
        arr = ['Berlin','Hamburg','Munich','Cologne']
        name = 'Germany'};
    if (document.getElementById('country').value == 'usa'){
        arr = ['New-York','Washington','Boston','Chikago']
        name = 'USA'};
    if (document.getElementById('country').value == 'ukr'){
        arr = ['Kyiv','Lviv','Dnipro','Kharkiv']
        name = 'Ukraine'};
    for (i = 0; i < arr.length; i++){
        let x = document.createElement('option')
        x.innerHTML = arr[i]
        city.append(x)
    }
}
function newHeader(){
    let z = document.getElementById('city').value
    let countryCity = document.createElement('h1')
    countryCity.innerHTML = name + ', ' + z
    document.body.append(countryCity)
    };

document.getElementById('country').addEventListener('mouseover', removed)
function removed(){
    document.body.children[1].children[0].remove()
    document.body.children[1].children[0].remove()
    document.body.children[1].children[0].remove()
    document.body.children[1].children[0].remove()
    document.body.children[3].remove()
}
document.getElementById('city').addEventListener('mouseover', removed1)
function removed1(){
    document.body.children[3].remove()
}