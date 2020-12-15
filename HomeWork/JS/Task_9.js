//------1------
 
// let re = /^https/
// let x = $("a").attr('href') 
// if ( re.test(x) == true ){
// $('a').attr({'target':'_blank'})
// }

//------2------

// $('h2.head').css('background-color','green')
// $('h2.head').find('span.inner').css('font-size','35px')

//------3.1------

// $('h3').before($('div').eq(0))
// $('div').eq(1).remove()
// $('h3').before($('div').eq(1))
// $('div').eq(2).remove()

//------3.2-----

// $('h3').before($('div').eq(0))
// $('div').eq(1).remove()
// $('h3').before($('div'))
// $('div').eq(1).remove()
// $('div').eq(1).remove()

//------4------

// function turnOff(){
//     let a = 0
//     let x = document.querySelectorAll('input')
//     for (i = 0; i < x.length; i++){
//         if( x.item(i).checked == true){
//             a = a + 1
//         }
//     if( a >= 3 ){
//         $('input').prop('disabled' , true)
//         }
//     }
// }