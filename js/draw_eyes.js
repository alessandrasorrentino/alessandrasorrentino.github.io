/*CONNECTION WITH THE SERVER
var ws = new WebSocket("ws://127.0.0.1:5678/"),
  messages = document.createElement('ul');
  ws.onmessage = function (event) {
    var messages = document.getElementsByTagName('ul')[0],
    message = document.createElement('li'),
    content = document.createTextNode(event.data);
    message.appendChild(content);
    messages.appendChild(message);
    };
document.body.appendChild(messages);
*/

var eyes_configurations=[0,1,2,3,4];
const eyes_conf= eyes_configurations[Math.floor(Math.random()*eyes_configurations.length)]
const radius=10; //original 20

var canvas_eye_lu=document.getElementById("eye_l_u");
var canvas_eye_ru=document.getElementById("eye_r_u");
var canvas_eye_ld=document.getElementById("eye_l_d");
var canvas_eye_rd=document.getElementById("eye_r_d");

draw_eye_l_u();
draw_eye_r_u();
draw_eye_l_d();
draw_eye_r_d();

function draw_eye_l_u() {
    //var canvas = document.getElementById("eye_l_u");
    //console.log("I am here")
    var ctx = canvas_eye_lu.getContext("2d");
    if (eyes_conf==0 || eyes_conf==2){
      ctx.beginPath();
      ctx.arc(90, 120, radius, 0, 2 * Math.PI);
      ctx.fillStyle="blue"
      ctx.fill();
      ctx.beginPath();
      ctx.arc(120, 70, radius, 0, 2 * Math.PI);
      ctx.fillStyle="blue"
      ctx.fill();
      ctx.beginPath();
      ctx.arc(180, 50, radius, 0, 2 * Math.PI);
      ctx.fillStyle="blue"
      ctx.fill();
      ctx.beginPath();
      ctx.arc(240, 70, radius, 0, 2 * Math.PI);
      ctx.fillStyle="blue"
      ctx.fill();
      ctx.beginPath();
      ctx.arc(270, 120, radius, 0, 2 * Math.PI);
      ctx.fillStyle="blue"
      ctx.fill();
	}
	else if (eyes_conf==3){
      ctx.beginPath();
      ctx.arc(180, 50, radius, 0, 2 * Math.PI);
      ctx.fillStyle="blue"
      ctx.fill();
      ctx.beginPath();
      ctx.arc(240, 70, radius, 0, 2 * Math.PI);
      ctx.fillStyle="blue"
      ctx.fill();
      ctx.beginPath();
      ctx.arc(270, 120, radius, 0, 2 * Math.PI);
      ctx.fillStyle="blue"
      ctx.fill();
	}else if(eyes_conf==4){
      ctx.beginPath();
      ctx.arc(270, 120, radius, 0, 2 * Math.PI);
      ctx.fillStyle="blue"
      ctx.fill();
	}else{
        console.log("Eyes not active")
	}
}
function draw_eye_r_u() {
    var ctx = canvas_eye_ru.getContext("2d");
    if(eyes_conf==0 || eyes_conf==2){
	ctx.beginPath();
      ctx.arc(90, 120, radius, 0, 2 * Math.PI);
      ctx.fillStyle="blue"
      ctx.fill();
      ctx.beginPath();
      ctx.arc(120, 70, radius, 0, 2 * Math.PI);
      ctx.fillStyle="blue"
      ctx.fill();
      ctx.beginPath();
      ctx.arc(180, 50, radius, 0, 2 * Math.PI);
      ctx.fillStyle="blue"
      ctx.fill();
      ctx.beginPath();
      ctx.arc(240, 70, radius, 0, 2 * Math.PI);
      ctx.fillStyle="blue"
      ctx.fill();
      ctx.beginPath();
      ctx.arc(270, 120, radius, 0, 2 * Math.PI);
      ctx.fillStyle="blue"
      ctx.fill();
        }else if (eyes_conf== 3){
	ctx.beginPath();
      ctx.arc(90, 120, radius, 0, 2 * Math.PI);
      ctx.fillStyle="blue"
      ctx.fill();
      ctx.beginPath();
      ctx.arc(120, 70, radius, 0, 2 * Math.PI);
      ctx.fillStyle="blue"
      ctx.fill();
      ctx.beginPath();
      ctx.arc(180, 50, radius, 0, 2 * Math.PI);
      ctx.fillStyle="blue"
      ctx.fill();
       }else if(eyes_conf==4){
	ctx.beginPath();
      ctx.arc(90, 120, radius, 0, 2 * Math.PI);
      ctx.fillStyle="blue"
      ctx.fill();
     }else{
        console.log("Eyes not active")
	} 
}
function draw_eye_l_d() {
    var crd_ctx = canvas_eye_ld.getContext("2d");
      if(eyes_conf==1 || eyes_conf==2){
	crd_ctx.beginPath();
        crd_ctx.arc(100, 20, radius, 0, 2 * Math.PI);
        crd_ctx.fillStyle="blue"
        crd_ctx.fill();
        crd_ctx.beginPath();
        crd_ctx.arc(150, 50, radius, 0, 2 * Math.PI);
        crd_ctx.fillStyle="blue"
        crd_ctx.fill();
        crd_ctx.beginPath();
        crd_ctx.arc(210, 50, radius, 0, 2 * Math.PI);
        crd_ctx.fillStyle="blue"
        crd_ctx.fill();
	crd_ctx.beginPath();
        crd_ctx.arc(260, 20, radius, 0, 2 * Math.PI);
        crd_ctx.fillStyle="blue"
        crd_ctx.fill();
      }
       else if (eyes_conf==4){
	        crd_ctx.beginPath();
        crd_ctx.arc(210, 50, radius, 0, 2 * Math.PI);
        crd_ctx.fillStyle="blue"
        crd_ctx.fill();
        crd_ctx.beginPath();
        crd_ctx.arc(260, 20, radius, 0, 2 * Math.PI);
        crd_ctx.fillStyle="blue"
        crd_ctx.fill();
	}else{
        console.log("Eyes not active")
	 }
 } 
  function draw_eye_r_d() {
    var crd_ctx = canvas_eye_rd.getContext("2d");
      if(eyes_conf==1 || eyes_conf==2){
        crd_ctx.beginPath();
        crd_ctx.arc(100, 20, radius, 0, 2 * Math.PI);
        crd_ctx.fillStyle="blue"
        crd_ctx.fill();
        crd_ctx.beginPath();
        crd_ctx.arc(150, 50, radius, 0, 2 * Math.PI);
        crd_ctx.fillStyle="blue"
        crd_ctx.fill();
        crd_ctx.beginPath();
        crd_ctx.arc(210, 50, radius, 0, 2 * Math.PI);
        crd_ctx.fillStyle="blue"
        crd_ctx.fill();
        crd_ctx.arc(260, 20, radius, 0, 2 * Math.PI);
        crd_ctx.fillStyle="blue"
        crd_ctx.fill();

     }else if (eyes_conf==4){
        crd_ctx.beginPath();
        crd_ctx.arc(100, 20, radius, 0, 2 * Math.PI);
        crd_ctx.fillStyle="blue"
        crd_ctx.fill();
        crd_ctx.beginPath();
        crd_ctx.arc(150, 50, radius, 0, 2 * Math.PI);
        crd_ctx.fillStyle="blue"
        crd_ctx.fill();
	}else{
        console.log("Eyes not active")
	 }
}
