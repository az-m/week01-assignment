console.log("Hello World :)");

// all this mouseover color change would be better done with css and hover styles, but it's here
// because I wanted to add some js and I couldn't think of anything more exciting to do

const box1 = document.getElementById("box1");

box1.addEventListener("mouseover", function (event) {
  this.style.backgroundColor = "#ff0000";
});

box1.addEventListener("mouseleave", function (event) {
  this.style.backgroundColor = "#570202";
});

const box2 = document.getElementById("box2");

box2.addEventListener("mouseover", function (event) {
  this.style.backgroundColor = "#002aff";
});

box2.addEventListener("mouseleave", function (event) {
  this.style.backgroundColor = "#021366";
});

const box3 = document.getElementById("box3");

box3.addEventListener("mouseover", function (event) {
  this.style.backgroundColor = "#ff7700";
});

box3.addEventListener("mouseleave", function (event) {
  this.style.backgroundColor = "#5c2c02";
});

const box4 = document.getElementById("box4");

box4.addEventListener("mouseover", function (event) {
  this.style.backgroundColor = "#06cf06ec";
});

box4.addEventListener("mouseleave", function (event) {
  this.style.backgroundColor = "#036903ec";
});
