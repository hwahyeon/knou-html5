// 3-2
var canvas = document.getElementById("myCanvas0302");
var context = canvas.getContext("2d");

canvas.width = 300; canvas.height = 300;
canvas.style.backgroundColor = "lightyellow";

context.lineWidth = 10;
context.strokeStyle = "blue";
context.fillStyle = "green";

context.strokeRect(50,50,100,100);
context.fillRect(150,150,100,100);
context.clearRect(100,100,100,100);