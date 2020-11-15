// //-----1-----

// let x = 1;
// let y = 2;

// let res1 = x + y + "";
// let res2 = Boolean(x) + "" + y;
// let res3 = x < y;
// let res4 = parseInt("x + y");

// //-----2-----

// let anyNumber = prompt("Entrer any number");
// let q = anyNumber % 2;
// if (anyNumber > 0 && q==0){document.write("2.a: Number is correct." + "<br \/>")}
// else(document.write("2.a: Number isn't correct." + "<br \/>"));

// let w = anyNumber % 7;
// if (w == 0){document.write("2.b: Number is correct. " + "<br \/>")}
// else(document.write("2.b: Number isn't correct." + "<br \/>"));

// //-----3-----

// let newArr = [5, "Ronald", true, null];   //4
// let elemen5 = prompt("Input 5th element");
// newArr[5] = elemen5;
// console.log(newArr[5]);
// // newArr.shift();      //3.8 Розкоментити при перевірці

// //-----4-----

// let cities = ["Rome", "Lviv", "Warsaw"];
// console.log(cities.join('*'));

// //----5-----

// let isAdult = prompt("How old are you?");
// if (isAdult > 18){alert("Welcome!")}
// else (alert ("Warning, sensitive content, you are to yong"));

// //-----6-----

// let as = prompt("Input length of first side ");
// let bs = prompt("Input length of second side ");
// let cs = prompt("Input length of third side ");

// let a = parseInt(as);
// let b = parseInt(bs);
// let c = parseInt(cs);

// let p = (a + b + c) / 2;
// let sl = (p * (p-a) * (p-b) * (p-c)) ** (1/2);
// let s = Math.round( sl * 100) / 100;

// if (isNaN(sl) == true || s<0 || a<0 || b<0 || c<0 ){document.write("6.1 Incorrect data" + "<br \/>")}
// else (document.write("6.1 Area of triangle is " + s + "<br \/>"));

// if( sl == (a*b) / 2 || sl == (b*c) / 2 || sl == (c*a) / 2){ document.write("6.2 This triangle is right.")}
// else(document.write("6.2 This triangle isn't right."))

//----7-----

let nowhour = (new Date()).getHours();

//-----7.1-----

if (nowhour <= 5 || 23 <= nowhour){alert("ДоброЇ ночі")}
else if (nowhour > 5 || nowhour <= 11){alert("Доброго ранку")}
else if (nowhour > 11 || nowhourm <= 17){alert("Доброго дня")}
else(alert("Доброго вечора"));

//-----7.2-----

// switch(nowhour){
//     case 0: alert("ДоброЇ ночі");
//     break;

//     case 1: alert("ДоброЇ ночі");
//     break;

//     case 2: alert("ДоброЇ ночі");
//     break;

//     case 3: alert("ДоброЇ ночі");
//     break;

//     case 4: alert("ДоброЇ ночі");
//     break;

//     case 5: alert("ДоброЇ ночі");
//     break;

//     case 6: alert("Доброго ранку");
//     break;

//     case 7: alert("Доброго ранку");
//     break;

//     case 8: alert("Доброго ранку");
//     break;

//     case 9: alert("Доброго ранку");
//     break;

//     case 10: alert("Доброго ранку");
//     break;

//     case 11: alert("Доброго ранку");
//     break;

//     case 12: alert("Доброго дня");
//     break;

//     case 13: alert("Доброго дня");
//     break;

//     case 14: alert("Доброго дня");
//     break;

//     case 15: alert("Доброго дня");
//     break;

//     case 16: alert("Доброго дня");
//     break;

//     case 17: alert("Доброго дня");
//     break;

//     case 18: alert("Доброго вечора");
//     break;

//     case 19: alert("Доброго вечора");
//     break;

//     case 20: alert("Доброго вечора");
//     break;

//     case 21: alert("Доброго вечора");
//     break;

//     case 22: alert("Доброго вечора");
//     break;

//     case 23: alert("ДоброЇ ночі");
//     break;

// }
