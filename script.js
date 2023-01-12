var a = document.getElementById("yellow");
var b = document.getElementById("black");
var c = document.getElementById("red");
var d = document.getElementById("product-photo");
var e = document.getElementById("price");
var f = document.getElementById("grey")

a.addEventListener("mouseover", function() {
  console.log("yellow");
  d.src= "imgs/bmw-yellow.jpg";
  document.getElementById("yellow").className += " selected"
  e.innerHTML = "$80,000";
  e.style.color = "black";
});

b.addEventListener("mouseover", function() {
  console.log("black");
  d.src= "imgs/bmw-black.jpg";
  document.getElementById("black").className += " selected"
  e.innerHTML = "$70,000";
  e.style.color = "green";
  e.innerHTML += " (Sale)";
});

c.addEventListener("mouseover", function() {
  console.log("red");
  d.src= "imgs/bmw-red.jpg";
  document.getElementById("red").className += " selected"
  e.innerHTML = "$60,000";
  e.style.color = "red";
  e.innerHTML += " (Clearance)";
});

f.addEventListener("mouseover", function() {
  console.log("grey");
  d.src= "imgs/bmw-grey.jpg";
  document.getElementById("grey").className += " selected"
  e.innerHTML = "$60,000";
  e.style.color = "red";
  e.innerHTML += " (Clearance)";
});