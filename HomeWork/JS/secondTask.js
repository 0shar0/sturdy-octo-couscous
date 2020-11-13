//-----1-----
let x = 1;
let y = 2;

let res1 = x + y + "";
let res2 = Boolean(x) + "" + y;
let res3 = x < y;
let res4 = parseInt("x + y");

//-----2-----

let anyNumber = prompt("Entrer any number");
let q = anyNumber % 2;
if (anyNumber > 0 && q==0){document.write("2.a: Number is correct." + "<br \/>")}
else(document.write("2.a: Number isn't correct." + "<br \/>"));

let w = anyNumber % 7;
if (w == 0){document.write("2.b: Number is correct. " + "<br \/>")}
else(document.write("2.b: Number isn't correct." + "<br \/>"));

//-----3-----



//-----4-----



//----5-----

let isAdult = prompt("How old are you?");
if (isAdult > 18){alert("Welcome!")}
else (alert ("Warning, sensitive content, you are to yong"));

//-----6-----

let as = prompt("Input length of first side ");
let bs = prompt("Input length of second side ");
let cs = prompt("Input length of third side ");

let a = parseInt(as);
let b = parseInt(bs);
let c = parseInt(cs);

let p = (a + b + c) / 2;
let sl = (p * (p-a) * (p-b) * (p-c)) ** (1/2);
let s = Math.round( sl * 100) / 100;

if (isNaN(sl) == true || s<0 || a<0 || b<0 || c<0 ){document.write("6.1 Incorrect data" + "<br \/>")}
else (document.write("6.1 Area of triangle is " + s + "<br \/>"));

if( sl == (a*b) / 2 || sl == (b*c) / 2 || sl == (c*a) / 2){ document.write("6.2 This triangle is right.")}
else(document.write("6.2 This triangle isn't right."))

// Дивне значення площі

//----7-----