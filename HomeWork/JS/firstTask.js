// ----2----

alert("Sharko");

// ----3----

let first = "some value "
let second = "another value "
document.write(first + "<br \/>");
document.write(second + "<br \/>");
first = second
document.write(first + "<br \/>");
document.write(second + "<br \/>");

// ----4----

let u;
let obj = {
    name:"something",
    count: 5,
    available: true,
    notes: u,
    nul: null,
};

// ----5----

let isAdult = confirm ("Are you 18 yars old?");

//----6----

let nameIs = "Bohdan"; //string
let secondName = "Sharko"; //string
let myGroup = "Lv-548"; //string
let birth = 1992; //number
let marr = true; //boolean
let children = null; //object
let happiness; //undefind

//----7----

let myName = prompt("What is your name?");
let myMail = prompt("What is your e-mail?");
let myPass = prompt("Enter your password");
document.write("Dear " + myName + ", your e-mail is " + myMail + ", your password is " + myPass  + "." + "<br \/>");

//----8----

let x = 60 * 60;
let y = x * 24;
let z = y * 30;
document.write("One hour has " + x + "seconds." + "<br \/>");
document.write("One day has " + y + "seconds." + "<br \/>");
document.write("One month has " + z + "seconds." + "<br \/>");