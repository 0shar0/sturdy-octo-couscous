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

class MonthExeption {
  constructor(message) {
    this.message = "Incorrect month number";
  }
}

function showMonthName(month) {
  if (1 <= month && month <= 12) {
    let monthNames = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];
    month === monthNames;
    return monthNames[month - 1];
  }
  throw new MonthExeption();
}

//-----5-----

// function showUser(id){
//     if ( id < 0 ){
//         throw new Error('ID must not be negative: ' + id)
//     }
//     let x = {
//         Id: id
//     }
//     return x
// }

// function showUsers(ids){
//     let result = []
//     for (i = 0; i < ids.length; i++){
//     try{
//         result.push(showUser(ids[i]))
//         }
//     catch(error){
//     console.log(error.message)
//     }
// }
//     return result
// }
