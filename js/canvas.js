var eyes_configurations=['0','1','2','3','4'];
const eyes_conf=0;
function Draw_eye_l_u() {
    var canvas = document.getElementById("eye_l_u");
    var ctx = canvas.getContext("2d");
    switch (expr){
      case '0' or case '2':
      ctx.beginPath();
      ctx.arc(100, 250, 50, 0, 2 * Math.PI);
      ctx.fillStyle="blue"
      ctx.fill();
      ctx.beginPath();
      ctx.arc(170, 140, 50, 0, 2 * Math.PI);
      ctx.fillStyle="blue"
      ctx.fill();
      ctx.beginPath();
      ctx.arc(300, 80, 50, 0, 2 * Math.PI);
      ctx.fillStyle="blue"
      ctx.fill();
      ctx.beginPath();
      ctx.arc(440, 140, 50, 0, 2 * Math.PI);
      ctx.fillStyle="blue"
      ctx.fill();
      ctx.beginPath();
      ctx.arc(500, 250, 50, 0, 2 * Math.PI);
      ctx.fillStyle="blue"
      ctx.fill();
      break;
      case '3':
        ctx.beginPath();
        ctx.arc(300, 80, 50, 0, 2 * Math.PI);
        ctx.fillStyle="blue"
        ctx.fill();
        ctx.beginPath();
        ctx.arc(440, 140, 50, 0, 2 * Math.PI);
        ctx.fillStyle="blue"
        ctx.fill();
        ctx.beginPath();
        ctx.arc(500, 250, 50, 0, 2 * Math.PI);
        ctx.fillStyle="blue"
        ctx.fill();
       break;
      default:
        console.log("Eyes not active")
       break;
}
function Draw_eye_r_u() {
    var canvas = document.getElementById("eye_r_u");
    var ctx = canvas.getContext("2d");
    switch (expr){
    case '0' or case '2':
        ctx.beginPath();
        ctx.arc(100, 250, 50, 0, 2 * Math.PI);
        ctx.fillStyle="blue"
        ctx.fill();
        ctx.beginPath();
        ctx.arc(170, 140, 50, 0, 2 * Math.PI);
        ctx.fillStyle="blue"
        ctx.fill();
        ctx.beginPath();
        ctx.arc(300, 80, 50, 0, 2 * Math.PI);
        ctx.fillStyle="blue"
        ctx.fill();
        ctx.beginPath();
        ctx.arc(440, 140, 50, 0, 2 * Math.PI);
        ctx.fillStyle="blue"
        ctx.fill();
        ctx.beginPath();
        ctx.arc(500, 250, 50, 0, 2 * Math.PI);
        ctx.fillStyle="blue"
        ctx.fill();
        break;
        case '3':
        ctx.beginPath();
        ctx.arc(100, 250, 50, 0, 2 * Math.PI);
        ctx.fillStyle="blue"
        ctx.fill();
        ctx.beginPath();
        ctx.arc(170, 140, 50, 0, 2 * Math.PI);
        ctx.fillStyle="blue"
        ctx.fill();
        ctx.beginPath();
        ctx.arc(300, 80, 50, 0, 2 * Math.PI);
        ctx.fillStyle="blue"
        ctx.fill();
       break;
      default:
        console.log("Eyes not active")
       break;
 }
function Draw_eye_l_d() {
    var canvas = document.getElementById("eye_l_d");
    var crd_ctx = canvas.getContext("2d");
    switch (expr){
      case '1' or case '2':
        crd_ctx.beginPath();
        crd_ctx.arc(130, 60, 50, 0, 2 * Math.PI);
        crd_ctx.fillStyle="blue"
        crd_ctx.fill();
        crd_ctx.beginPath();
        crd_ctx.arc(230, 140, 50, 0, 2 * Math.PI);
        crd_ctx.fillStyle="blue"
        crd_ctx.fill();
        crd_ctx.beginPath();
        crd_ctx.arc(380, 140, 50, 0, 2 * Math.PI);
        crd_ctx.fillStyle="blue"
        crd_ctx.fill();
        crd_ctx.arc(470, 60, 50, 0, 2 * Math.PI);
        crd_ctx.fillStyle="blue"
        crd_ctx.fill();
      break;
        case '4':
        crd_ctx.beginPath();
        crd_ctx.arc(380, 140, 50, 0, 2 * Math.PI);
        crd_ctx.fillStyle="blue"
        crd_ctx.fill();
        crd_ctx.arc(470, 60, 50, 0, 2 * Math.PI);
        crd_ctx.fillStyle="blue"
        crd_ctx.fill();
      break;
            default:
        console.log("Eyes not active")
       break;
 }
  
  function Draw_eye_r_d() {
    var canvas = document.getElementById("eye_r_d");
    var crd_ctx = canvas.getContext("2d");
    switch (expr){
      case '1' or case '2':
        crd_ctx.beginPath();
        crd_ctx.arc(130, 60, 50, 0, 2 * Math.PI);
        crd_ctx.fillStyle="blue"
        crd_ctx.fill();
        crd_ctx.beginPath();
        crd_ctx.arc(230, 140, 50, 0, 2 * Math.PI);
        crd_ctx.fillStyle="blue"
        crd_ctx.fill();
        crd_ctx.beginPath();
        crd_ctx.arc(380, 140, 50, 0, 2 * Math.PI);
        crd_ctx.fillStyle="blue"
        crd_ctx.fill();
        crd_ctx.arc(470, 60, 50, 0, 2 * Math.PI);
        crd_ctx.fillStyle="blue"
        crd_ctx.fill();
      break;
      case '4':
        crd_ctx.beginPath();
        crd_ctx.arc(130, 60, 50, 0, 2 * Math.PI);
        crd_ctx.fillStyle="blue"
        crd_ctx.fill();
        crd_ctx.beginPath();
        crd_ctx.arc(230, 140, 50, 0, 2 * Math.PI);
        crd_ctx.fillStyle="blue"
        crd_ctx.fill();
      break;
            default:
        console.log("Eyes not active")
       break;
 }
