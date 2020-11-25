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

// function chekAge(){
//     let age = prompt('Enter your age');
//     if(age === ""){
//         throw new Error("Field is empty!");
//     }
//     if( isNaN(age) ){
//         throw new Error("Incorrect parameters!");
//     }
//     if(age < 14){
//         throw new Error("You are to young!");
//     }
//     return age;
// }
// try {
//     chekAge();   
// }
// catch (exeption){
//     console.log(exeption.message)    
// }

//-----4-----



//-----5-----

function showUser(id){
    if ( id < 0 ){
        throw new Error('ID must not be negative: ' + id)
    }
    return id
}
function showUsers(ids){
    for (i = 0; i < ids.length; i++){
    try{
        showUser(ids[i])}
    catch(error){
    console.log(error.message)
    ids.splice(i,1)
    }
}
    return ids
}