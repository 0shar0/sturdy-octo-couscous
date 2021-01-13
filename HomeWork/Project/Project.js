function save() {
  let myPage = document.body.innerHTML;
  let val = $("#item").val();
  localStorage.clear();
  localStorage.setItem("page", myPage);
  localStorage.setItem("val", val);
}

function show() {
  if (localStorage.length != 0) {
    document.body.innerHTML = localStorage.getItem("page");
    $("#item").val(localStorage.getItem("val"));
    if (chooseRoom() == null) {
      turn();
      $("#item").val("Choose location");
    } else changeColor();
  }
}

document.addEventListener("load", show());

function turn() {
  $(".button").css("background", "radial-gradient(#FFE4E1,#4d4d4d)");
}

function chooseRoom() {
  return $("#item").val();
}

function off() {
  let par = event.target.parentElement.id;
  let elem = event.target.id;
  $("#item").val(par);
  changeColor();
  if (elem == "light") {
    $("#selector")
      .children("#lidhtButton")
      .css("background", "radial-gradient(#FFE4E1,#ff0000)");
    $("#" + par)
      .children("#" + elem)
      .remove();
  } else if (elem == "curtains") {
    $("#selector")
      .children("#curtainsButton")
      .css("background", "radial-gradient(#FFE4E1,#ff0000)");
    $("#" + par)
      .children("#" + elem)
      .remove();
  } else if (elem == "window") {
    $("#selector")
      .children("#windows")
      .css("background", "radial-gradient(#FFE4E1,#ff0000)");
    $("#" + par)
      .children("#" + elem)
      .remove();
  } else {
    $("#selector")
      .children("#" + elem)
      .css("background", "radial-gradient(#FFE4E1,#ff0000)");
    $("#" + par)
      .children("#" + elem)
      .remove();
  }
}

function of() {
  let par = event.target.parentElement.parentElement.id;
  let elem = event.target.parentElement.id;
  $("#item").val(par);
  changeColor();
  if (elem == "controlTempWater") {
    $("#selector")
      .children("#waterButton")
      .css("background", "radial-gradient(#FFE4E1,#ff0000)");
    $("#" + par)
      .children("#" + elem)
      .remove();
  } else if (elem == "controlTempAir") {
    $("#selector")
      .children("#climat")
      .css("background", "radial-gradient(#FFE4E1,#ff0000)");
    $("#" + par)
      .children("#" + elem)
      .remove();
  }
}

$("#lidhtButton").click(turnLight);
function turnLight() {
  if (chooseRoom() === null) {
    $("#selector")
      .children("#lidhtButton")
      .css("background", "radial-gradient(#FFE4E1,#4d4d4d)");
  } else if ($("#" + chooseRoom()).has("p#light").length == 1) {
    $("#" + chooseRoom())
      .children("p#light")
      .remove();
    $("#selector")
      .children("#lidhtButton")
      .css("background", "radial-gradient(#FFE4E1,#ff0000)");
  } else {
    $("#" + chooseRoom()).append(
      '<p id="light" onclick="off()">Light is turned on</p>'
    );
    $("#selector")
      .children("#lidhtButton")
      .css("background", "radial-gradient(#FFE4E1,#09ff00)");
  }
}

$("#waterButton").click(turnWater);
function turnWater() {
  if (chooseRoom() === null) {
    $("#selector")
      .children("#waterButton")
      .css("background", "radial-gradient(#FFE4E1,#4d4d4d)");
  } else if ($("#" + chooseRoom()).has("div#controlTempWater").length == 1) {
    $("#" + chooseRoom())
      .children("div#controlTempWater")
      .remove();
    $("#selector")
      .children("#waterButton")
      .css("background", "radial-gradient(#FFE4E1,#ff0000)");
  } else {
    $("#" + chooseRoom()).append(
      `<div  id="controlTempWater">
    <button id="minusw" class='contrM' onclick="minusW()">-</button>
    <p id="water" onclick="of()" >Water temperature: ` +
        w +
        ` &#176C</p>
    <button id="plusW" class='contrP' onclick="plusW()">+</button>
    </div>`
    );
    $("#selector")
      .children("#waterButton")
      .css("background", "radial-gradient(#FFE4E1,#09ff00)");
  }
}

$("#curtainsButton").click(curtainsOpen);
function curtainsOpen() {
  if (chooseRoom() === null) {
    $("#selector")
      .children("#curtainsButton")
      .css("background", "radial-gradient(#FFE4E1,#4d4d4d)");
  } else if ($("#" + chooseRoom()).has("p#curtains").length == 1) {
    $("#" + chooseRoom())
      .children("p#curtains")
      .remove();
    $("#selector")
      .children("#curtainsButton")
      .css("background", "radial-gradient(#FFE4E1,#ff0000)");
  } else {
    $("#" + chooseRoom()).append(
      '<p id="curtains" onclick="off()">Curtains are opened</p>'
    );
    $("#selector")
      .children("#curtainsButton")
      .css("background", "radial-gradient(#FFE4E1,#09ff00)");
  }
}

$("#windows").click(windowsOpen);
function windowsOpen() {
  if (chooseRoom() === null) {
    $("#selector")
      .children("#windows")
      .css("background", "radial-gradient(#FFE4E1,#4d4d4d)");
  } else if ($("#" + chooseRoom()).has("p#window").length == 1) {
    $("#" + chooseRoom())
      .children("p#window")
      .remove();
    $("#selector")
      .children("#windows")
      .css("background", "radial-gradient(#FFE4E1,#ff0000)");
  } else {
    $("#" + chooseRoom()).append(
      '<p id="window" onclick="off()">Windows are opened</p>'
    );
    $("#selector")
      .children("#windows")
      .css("background", "radial-gradient(#FFE4E1,#09ff00)");
  }
}

$("#climat").click(turnClimat);
function turnClimat() {
  if (chooseRoom() === null) {
    $("#selector")
      .children("#climat")
      .css("background", "radial-gradient(#FFE4E1,#4d4d4d)");
  } else if ($("#" + chooseRoom()).has("div#controlTempAir").length == 1) {
    $("#" + chooseRoom())
      .children("div#controlTempAir")
      .remove();
    $("#selector")
      .children("#climat")
      .css("background", "radial-gradient(#FFE4E1,#ff0000)");
  } else {
    $("#" + chooseRoom()).append(
      `<div  id="controlTempAir">
    <button id="minusA" class='contrM' onclick="minusA()">-</button>
    <p id="climatControl" onclick="of()" >Climat temperature: ` +
        a +
        ` &#176C</p>
    <button id="plusA" class='contrP' onclick="plusA()">+</button>
    </div>`
    );
    $("#selector")
      .children("#climat")
      .css("background", "radial-gradient(#FFE4E1,#09ff00)");
  }
}

let a = 22;
function minusA() {
  let par = event.target.parentElement.parentElement.id;
  $("#item").val(par);
  let c = $("#" + par)
    .children()
    .children("#climatControl")
    .html();
  let re = /\d+/g;
  let a = c.match(re) - 1;
  if (w <= 15) {
    w = 15;
  }
  $("#" + par)
    .children()
    .children("#climatControl")
    .html("Climat temperature: " + a + " &#176C");
  changeColor();
}

function plusA() {
  let par = event.target.parentElement.parentElement.id;
  $("#item").val(par);
  let c = $("#" + par)
    .children()
    .children("#climatControl")
    .html();
  let re = /\d+/g;
  let r = parseInt(c.match(re)[0]);
  let a = r + 1;
  if (a > 30) {
    a = 30;
  }
  $("#" + par)
    .children()
    .children("#climatControl")
    .html("Climat temperature: " + a + " &#176C");
  changeColor();
}

let w = 20;
function minusW() {
  let par = event.target.parentElement.parentElement.id;
  $("#item").val(par);
  let c = $("#" + par)
    .children()
    .children("#water")
    .html();
  let re = /\d+/g;
  let w = c.match(re) - 5;
  if (w <= 5) {
    w = 5;
  }
  $("#" + par)
    .children()
    .children("#water")
    .html("Water temperature: " + w + " &#176C");
  changeColor();
}

function plusW() {
  let par = event.target.parentElement.parentElement.id;
  $("#item").val(par);
  let c = $("#" + par)
    .children()
    .children("#water")
    .html();
  let re = /\d+/g;
  let r = parseInt(c.match(re)[0]);
  let w = r + 5;
  if (w > 80) {
    w = 80;
  }
  $("#" + par)
    .children()
    .children("#water")
    .html("Water temperature: " + w + " &#176C");
  changeColor();
}

function remove() {
  let room = document.getElementsByClassName("room");
  for (i = 0; i < room.length; i++) {
    let it = room.item(i).children;
    for (o = 0; o < it.length; o++) {
      room.item(i).children.item(o).remove();
      o--;
    }
  }
  turn();
  $("#item").val("Choose location");
}

$("#addButton").click(add);
function add() {
  let val = $("#inputButton").val();
  let reg = /^[A-Z][a-z0-9]+/;
  if (reg.test(val) == false) {
    alert("Incorrect buttons name!");
    $("#inputButton").val("");
  } else if (
    $("#selector").has("#" + val).length == 1 ||
    val == "Light" ||
    val == "Water" ||
    val == "Curtains" ||
    val == "Windows" ||
    val == "Climat Control"
  ) {
    alert("This button is aledy istalled!");
    $("#inputButton").val("");
  } else {
    if (chooseRoom() == null) {
      $("#selector").append(
        "<button class='button' onclick='newFunc()' id='" +
          val +
          "'>" +
          val +
          "</button>"
      );
      $("#" + val).css("background", "radial-gradient(#FFE4E1,#4d4d4d)");
      $("#inputButton").val("");
    } else {
      $("#selector").append(
        "<button class='button' onclick='newFunc()' id='" +
          val +
          "'>" +
          val +
          "</button>"
      );
      $("#" + val).css("background", "radial-gradient(#FFE4E1,#ff0000)");
      $("#inputButton").val("");
    }
  }
}

function remB() {
  let val = $("#inputButton").val();
  let reg = /^[A-Z][a-z0-9]+/;
  if (reg.test(val) == false) {
    alert("Incorrect input!");
    $("#inputButton").val("");
  } else if (
    val == "Light" ||
    val == "Water" ||
    val == "Curtains" ||
    val == "Windows" ||
    val == "Climat Control"
  ) {
    alert("This button can`t be removed!");
    $("#inputButton").val("");
  } else if ($("#selector").has("#" + val).length == 1) {
    let newButtons = $("#selector").children();
    let newArray = [];
    for (i = 0; i < newButtons.length; i++) {
      newArray.push(newButtons[i].id);
    }
    newArray.splice(0, 5);
    for (i = 0; i < $("#appartaments").children(i).length; i++) {
      newArray.forEach((element) => {
        $("#appartaments")
          .children(i)
          .children("#" + element)
          .remove();
      });
    }
    $("#" + val).remove();
    $("#inputButton").val("");
  } else {
    alert("Button not found!");
    $("#inputButton").val("");
  }
}

function newFunc() {
  va = event.target.id;
  pa = event.target.parentElement.id;
  if (chooseRoom() === null) {
    $("#selector")
      .children("#" + va)
      .css("background", "radial-gradient(#FFE4E1,#4d4d4d)");
  } else if ($("#" + chooseRoom()).has("p#" + va).length == 1) {
    $("#" + chooseRoom())
      .children("p#" + va)
      .remove();
    $("#" + pa)
      .children("#" + va)
      .css("background", "radial-gradient(#FFE4E1,#ff0000)");
  } else {
    $("#" + chooseRoom()).append(
      '<p id="' + va + '" onclick="off()">' + va + " is turned on</p>"
    );
    $("#" + pa)
      .children("#" + va)
      .css("background", "radial-gradient(#FFE4E1,#09ff00)");
  }
}

$("#item").change(changeColor);
function changeColor() {
  if ($("#" + chooseRoom()).has("p#light").length == 1) {
    $("#selector")
      .children("#lidhtButton")
      .css("background", "radial-gradient(#FFE4E1,#09ff00)");
  } else
    $("#selector")
      .children("#lidhtButton")
      .css("background", "radial-gradient(#FFE4E1,#ff0000)");
  if ($("#" + chooseRoom()).has("div#controlTempWater").length == 1) {
    $("#selector")
      .children("#waterButton")
      .css("background", "radial-gradient(#FFE4E1,#09ff00)");
  } else
    $("#selector")
      .children("#waterButton")
      .css("background", "radial-gradient(#FFE4E1,#ff0000)");
  if ($("#" + chooseRoom()).has("p#curtains").length == 1) {
    $("#selector")
      .children("#curtainsButton")
      .css("background", "radial-gradient(#FFE4E1,#09ff00)");
  } else
    $("#selector")
      .children("#curtainsButton")
      .css("background", "radial-gradient(#FFE4E1,#ff0000)");
  if ($("#" + chooseRoom()).has("p#window").length == 1) {
    $("#selector")
      .children("#windows")
      .css("background", "radial-gradient(#FFE4E1,#09ff00)");
  } else
    $("#selector")
      .children("#windows")
      .css("background", "radial-gradient(#FFE4E1,#ff0000)");
  if ($("#" + chooseRoom()).has("div#controlTempAir").length == 1) {
    $("#selector")
      .children("#climat")
      .css("background", "radial-gradient(#FFE4E1,#09ff00)");
  } else
    $("#selector")
      .children("#climat")
      .css("background", "radial-gradient(#FFE4E1,#ff0000)");
  let newButtons = $("#selector").children();
  let newArray = [];
  for (i = 0; i < newButtons.length; i++) {
    newArray.push(newButtons[i].id);
  }
  newArray.splice(0, 5);
  newArray.forEach((element) => {
    if ($("#" + chooseRoom()).has("p#" + element).length == 1) {
      $("#selector")
        .children("#" + element)
        .css("background", "radial-gradient(#FFE4E1,#09ff00)");
    } else
      $("#selector")
        .children("#" + element)
        .css("background", "radial-gradient(#FFE4E1,#ff0000)");
  });
}
