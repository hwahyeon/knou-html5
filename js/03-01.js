// 3-1
var canvas = document.getElementById("myCanvas0301");
var context = canvas.getContext("2d");

context.font = "20px 굴림체";
context.fillStyle = "red";
context.fillText("첫 캔버스", canvas.width/2-70, canvas.height/2-5);

context.strokeStyle = "blue";
context.strokeRect(70, 40, 200, 100);