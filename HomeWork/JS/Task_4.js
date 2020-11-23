//-----1-----

// function testThrow(exeption){
//     try{
//         throw exeption;
//     } 
//     catch (error){
//         console.log('Caught: ' + error);
//     }
// }

//-----2-----

// function calcRectangleArea(width, height){
//     if( isNaN(width) || isNaN(height) || width < 0 || height < 0){
//         throw "Incorrect parameters!"
//     }
//     return width * height;
// }


//-----3-----
function chekAge(age){
    try{
    if( isNaN(age) || age < 14){
        throw "Incorrect parameters!"
        }
    }
    catch(error){
        alert("You are to youg")
    }
}