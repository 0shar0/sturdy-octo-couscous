function chooseRoom(){
    return ($('#item').val())
}

$('#lidhtButton').click(turnLight)
function turnLight(){
    if ( $('#' + chooseRoom()).has('p#light').length == 1 ){
        $('#' + chooseRoom()).children('p#light').remove()
    }
    else(
    $('#' + chooseRoom()).append('<p id="light">Light is turned on</p>')
    )
}

$('#waterButton').click(turnWater)
function turnWater(){
    if ( $('#' + chooseRoom()).has('p#water').length == 1 ){
        $('#' + chooseRoom()).children('#water').remove()
    }
    else{
        $('#' + chooseRoom()).append('<p id="water">Water is turned on</p>')
    }
}

$('#curtainsButton').click(curtainsOpen)
function curtainsOpen(){
    if ( $('#' + chooseRoom()).has('p#curtains').length == 1 ){
        $('#' + chooseRoom()).children('p#curtains').remove()
    }
    else(
    $('#' + chooseRoom()).append('<p id="curtains">Curtains are opened</p>')
    )
}

$('#windows').click(windowsOpen)
function windowsOpen(){
    if ( $('#' + chooseRoom()).has('p#window').length == 1 ){
        $('#' + chooseRoom()).children('p#window').remove()
    }
    else(
    $('#' + chooseRoom()).append('<p id="window">Windows are opened</p>')
    )
}

$('#climat').click(turnClimat)
function turnClimat(){
    if ( $('#' + chooseRoom()).has('p#climatControl').length == 1 ){
        $('#' + chooseRoom()).children('p#climatControl').remove()
    }
    else(
    $('#' + chooseRoom()).append('<p id="climatControl">Temperature control is on</p>')
    )
}

let w = 20
function minusW(){
    w = w - 5
    if ( w <= 5){ w = 5}
    $('#waterControl').html('Water temperature: ' + w + ' &#176C')}
function plusW(){
    w = w + 5
    if ( w >= 80 ){ w = 80 }
    $('#waterControl').html('Water temperature: ' + w + ' &#176C')
}

let a = 22
function minusA(){
    a = a - 1
    if ( a <= 15 ){ a = 15 }
    $('#airControl').html('Climat temperature: ' + a + ' &#176C')
}
function plusA(){
    a = a + 1
    if ( a >= 30 ){ a = 30 }
    $('#airControl').html('Climat temperature: ' + a + ' &#176C')
}

function remove(){
    let room = document.getElementsByClassName('room')
    for ( i = 0; i < room.length; i++ ){
        let it = room.item(i).children
        for( o = 0; o < it.length; o++){
            room.item(i).children.item(o).remove()
            o--
        }
    }
}