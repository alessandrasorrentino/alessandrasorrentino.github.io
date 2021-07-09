var mouth_configurations=[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14];
const mouth_conf= mouth_configurations[Math.floor(Math.random()*mouth_configurations.length)]
const color="orange";
const widthLine=10;
var canvas_mouth=document.getElementById("mouth");

draw_mouth();

function draw_mouth() {
    //var canvas = document.getElementById("eye_l_u");
    //console.log("I am here")
    var ctx = canvas_mouth.getContext("2d");
	switch(mouth_conf){
	case 0:
	ctx.beginPath();
        ctx.arc(15,75,5,0,2*Math.PI)
        ctx.fillStyle=color;
        ctx.fill();
        ctx.beginPath();
        ctx.arc(540,75,5,0,2*Math.PI)
        ctx.fillStyle=color;
        ctx.fill();
	start_width=15
	for(i=1;i<5;i++){
                ctx.beginPath();
                ctx.arc(15*i,90,5,0,2*Math.PI)
                ctx.fillStyle=color;
                ctx.fill();
        	ctx.beginPath();
		ctx.arc(480+(15*i),90,5,0,2*Math.PI)
                ctx.fillStyle=color;
                ctx.fill();
      }
       start_width=18;
        for(i=2;i<30;i++){
                ctx.beginPath();
                ctx.arc(start_width*i,105,5,0,2*Math.PI)
                ctx.fillStyle=color;
                ctx.fill();
      }
        for(i=3;i<29;i++){
                ctx.beginPath();
                ctx.arc(start_width*i,130,5,0,2*Math.PI)
                ctx.fillStyle=color;
                ctx.fill();
      }
        for(i=4;i<28;i++){
                ctx.beginPath();
                ctx.arc(start_width*i,155,5,0,2*Math.PI)
                ctx.fillStyle=color;
                ctx.fill();
      }
	break;
	case 1:
	ctx.beginPath();
        ctx.arc(35,155,5,0,2*Math.PI)
        ctx.fillStyle=color;
        ctx.fill();
        ctx.beginPath();
        ctx.arc(515,155,5,0,2*Math.PI)
        ctx.fillStyle=color;
        ctx.fill();
        start_width=15
        for(i=1;i<4;i++){
                ctx.beginPath();
                ctx.arc(20+(15*i),130,5,0,2*Math.PI)
                ctx.fillStyle=color;
                ctx.fill();
                ctx.beginPath()
                ctx.arc(470+(15*i),130,5,0,2*Math.PI)
                ctx.fillStyle=color;
                ctx.fill();
      }
       start_width=18;
        for(i=4;i<28;i++){
                ctx.beginPath();
                ctx.arc(start_width*i,105,5,0,2*Math.PI)
                ctx.fillStyle=color;
                ctx.fill();
      } 
        for(i=5;i<27;i++){
                ctx.beginPath();
                ctx.arc(start_width*i,90,5,0,2*Math.PI)
                ctx.fillStyle=color;
                ctx.fill();
      }

        for(i=6;i<26;i++){
                ctx.beginPath();
                ctx.arc(start_width*i,75,5,0,2*Math.PI)
                ctx.fillStyle=color;
                ctx.fill();
      }
	break;
	case 2:
	start_width=18;
        for(i=1;i<33;i++){
                ctx.beginPath();
                ctx.arc(start_width*i,50,5,0,2*Math.PI)
                ctx.fillStyle=color;
                ctx.fill();
	}
	for (i=1;i<3;i++){
		ctx.beginPath();
                ctx.arc(start_width,50+(25*i),5,0,2*Math.PI)
                ctx.fillStyle=color;
                ctx.fill();
                ctx.beginPath();
                ctx.arc(576,50+(25*i),5,0,2*Math.PI)
                ctx.fillStyle=color;
                ctx.fill();

	}
	start_height=125
	start_width_l=0
	start_width_r=594
	for (i=1;i<3;i++){
                for(j=1;j<4;j++){
                	ctx.beginPath();
                	ctx.arc(start_width_l+(18*j),start_height,5,0,2*Math.PI)
                	ctx.fillStyle=color;
                	ctx.fill();
                        ctx.beginPath();
                        ctx.arc(start_width_r-(18*j),start_height,5,0,2*Math.PI)
                        ctx.fillStyle=color;
                        ctx.fill();
                        temp_width_left=start_width_l+(18*j);
			temp_width_right=start_width_r-(18*j);
                }
                start_width_l=temp_width_left-18;
		start_width_r=temp_width_right+18;
		start_height+=25;
        }
	start_width=18
	for(i=6;i<28;i++){
                ctx.beginPath();
                ctx.arc(start_width*i,start_height,5,0,2*Math.PI)
                ctx.fillStyle=color;
                ctx.fill();
        }
	break;
        case 3:
        start_width=18;
        for(i=1;i<33;i++){
                ctx.beginPath();
                ctx.arc(start_width*i,90,5,0,2*Math.PI)
                ctx.fillStyle=color;
                ctx.fill();
      }
	//Tongue
	start_width_l=380
	start_width_r=550
	start_height=90
	for(i=1;i<3;i++){
                ctx.beginPath();
                ctx.arc(start_width_l,start_height+(25*i),5,0,2*Math.PI)
                ctx.fillStyle=color;
                ctx.fill();
                ctx.beginPath();
                ctx.arc(start_width_r,start_height+(25*i),5,0,2*Math.PI)
                ctx.fillStyle=color;
                ctx.fill();
	}
	start_height=140
        for(i=1;i<3;i++){
                ctx.beginPath();
                ctx.arc(start_width_l+(18*i),start_height+(25*i),5,0,2*Math.PI)
                ctx.fillStyle=color;
                ctx.fill();
                ctx.beginPath();
                ctx.arc(start_width_r-(18*i),start_height+(25*i),5,0,2*Math.PI)
                ctx.fillStyle=color;
                ctx.fill();
        }
	start_height=190;
	start_width_l=416
	for (i=1;i<4; i++){
		ctx.beginPath();
                ctx.arc(start_width_l+(25*i),start_height,5,0,2*Math.PI)
                ctx.fillStyle=color;
                ctx.fill();
	}
	start_height=90;
        start_width=465;
        for (i=1;i<4; i++){
                ctx.beginPath();
                ctx.arc(start_width,start_height+(25*i),5,0,2*Math.PI)
                ctx.fillStyle=color;
                ctx.fill();
        }
        break;
	case 4:
	start_width_l=18;
	start_width_r=582
	start_height=25;
	for(i=1;i<6;i++){
                ctx.beginPath();
                ctx.arc(start_width_l+(18*i),start_height+(25*i),5,0,2*Math.PI)
                ctx.fillStyle=color;
                ctx.fill();
                ctx.beginPath();
                ctx.arc(start_width_r-(18*i),start_height+(25*i),5,0,2*Math.PI)
                ctx.fillStyle=color;
                ctx.fill();
        }
	start_width=110
	for (i=1; i< 19; i++){
	        ctx.beginPath();
                ctx.arc(start_width+(20*i),185,5,0,2*Math.PI)
                ctx.fillStyle=color;
                ctx.fill();
	}
	//Tongue
	for(i=1;i<4; i++){
		ctx.beginPath();
                ctx.arc(410,185-(25*i),5,0,2*Math.PI)
                ctx.fillStyle=color;
                ctx.fill();
	}
	ctx.beginPath();
        ctx.arc(504,110,5,0,2*Math.PI)
        ctx.fillStyle=color;
        ctx.fill();
	for(i=1; i<3; i++){
		ctx.beginPath();
                ctx.arc(410+(18*i),110-(25*i),5,0,2*Math.PI)
                ctx.fillStyle=color;
                ctx.fill();
                ctx.beginPath();
                ctx.arc(504-(18*i),110-(25*i),5,0,2*Math.PI)
                ctx.fillStyle=color;
                ctx.fill();
	}
	break;
	case 5:
        start_width=18;
        start_height=25;
        for (i=1;i<7;i++){
                start_height=start_height+25;
		for(j=1;j<6;j++){
                ctx.beginPath();
                ctx.arc(start_width+(18*j),start_height,5,0,2*Math.PI)
                ctx.fillStyle=color;
                ctx.fill();
		temp_width=start_width+(18*j);
                }
		start_width=temp_width;
        }
	break;
	case 6:
	start_width=18;
	for(i=1;i<33;i++){
		ctx.beginPath();
		ctx.arc(start_width*i,90,5,0,2*Math.PI)
        	ctx.fillStyle=color;
        	ctx.fill();
      }
	break;
	case 7:
	start_height=25;
	end_height=195;
	start_width=250;
	end_width=340;	
	for(i=0;i<5; i++){
		ctx.beginPath();
		ctx.arc(start_width-(15*i),start_height+(18*i),5,0,2*Math.PI)
        	ctx.fillStyle=color;
        	ctx.fill();
		ctx.beginPath();
		ctx.arc(end_width+(15*i),start_height+(18*i),5,0,2*Math.PI)
        	ctx.fillStyle=color;
        	ctx.fill();
		ctx.beginPath();
		ctx.arc(start_width-(15*i),end_height-(18*i),5,0,2*Math.PI)
        	ctx.fillStyle=color;
        	ctx.fill();
		ctx.beginPath();
		ctx.arc(end_width+(15*i),end_height-(18*i),5,0,2*Math.PI)
        	ctx.fillStyle=color;
        	ctx.fill();
	}
	for(i=1;i<6; i++){
		ctx.beginPath();
		ctx.arc(start_width+(18*i),start_height,5,0,2*Math.PI)
        	ctx.fillStyle=color;
        	ctx.fill();
		ctx.beginPath(); //internal up
		ctx.arc(start_width+15 -(12*i),(start_height+5)+(15*i),5,0,2*Math.PI)
        	ctx.fillStyle=color;
        	ctx.fill();		
		ctx.beginPath(); 
		ctx.arc(end_width-15+(12*i),(start_height+5)+(15*i),5,0,2*Math.PI)
        	ctx.fillStyle=color;
        	ctx.fill();
		ctx.beginPath();
		ctx.arc(start_width+(18*i),end_height,5,0,2*Math.PI)
        	ctx.fillStyle=color;
        	ctx.fill();
		ctx.beginPath(); //internal  down
		ctx.arc(start_width+15-(12*i),(end_height-5)-(15*i),5,0,2*Math.PI)
        	ctx.fillStyle=color;
        	ctx.fill();
		ctx.beginPath(); 
		ctx.arc(end_width-15+(12*i),(end_height-5)-(15*i),5,0,2*Math.PI)
        	ctx.fillStyle=color;
        	ctx.fill();
	}
	break;
	case 8:
        start_width=18;
        for(i=3;i<30;i++){
                ctx.beginPath();
                ctx.arc(start_width*i,75,5,0,2*Math.PI)
                ctx.fillStyle=color;
                ctx.fill();
		ctx.beginPath();
                ctx.arc(start_width*i,105,5,0,2*Math.PI)
                ctx.fillStyle=color;
                ctx.fill();
      } 
        for(i=1;i<32;i++){
                ctx.beginPath();
                ctx.arc(start_width*i,90,5,0,2*Math.PI)
                ctx.fillStyle=color;
                ctx.fill();
      }
	break;
	case 9:
       start_width=18;
        for(i=3;i<30;i++){
                ctx.beginPath();
                ctx.arc(start_width*i,105,5,0,2*Math.PI)
                ctx.fillStyle=color;
                ctx.fill();
      } 
        for(i=1;i<32;i++){
                ctx.beginPath();
                ctx.arc(start_width*i,90,5,0,2*Math.PI)
                ctx.fillStyle=color;
                ctx.fill();
      }
	break;
	case 10:
	start_width=18;
        for(i=1;i<32;i++){
                ctx.beginPath();
                ctx.arc(start_width*i,75,5,0,2*Math.PI)
                ctx.fillStyle=color;
                ctx.fill();
	}
	start_height=90
	start_width_l=0
	start_width_r=576
	for (i=1;i<3;i++){
                for(j=1;j<4;j++){
                	ctx.beginPath();
                	ctx.arc(start_width_l+(18*j),start_height,5,0,2*Math.PI)
                	ctx.fillStyle=color;
                	ctx.fill();
                        ctx.beginPath();
                        ctx.arc(start_width_r-(18*j),start_height,5,0,2*Math.PI)
                        ctx.fillStyle=color;
                        ctx.fill();
                        temp_width_left=start_width_l+(18*j);
			temp_width_right=start_width_r-(18*j);
                }
                start_width_l=temp_width_left-18;
		start_width_r=temp_width_right+18;
		start_height+=25;
        }
	start_width=18
	for(i=4;i<29;i++){
                ctx.beginPath();
                ctx.arc(start_width*i,start_height,5,0,2*Math.PI)
                ctx.fillStyle=color;
                ctx.fill();
        }
	for(i=4;i<22;i++){
                ctx.beginPath();
                ctx.arc(start_width_l+(18*i),90,5,0,2*Math.PI)
                ctx.fillStyle=color;
                ctx.fill();
        }
	break;
	case 11:
       	start_width=18;
       	for(i=2;i<31;i++){
       	         ctx.beginPath();
               ctx.arc(start_width*i,75,5,0,2*Math.PI)
                ctx.fillStyle="orange";
                ctx.fill();
      	} 
        for(i=1;i<32;i++){
                ctx.beginPath();
                ctx.arc(start_width*i,90,5,0,2*Math.PI)
                ctx.fillStyle="orange";
                ctx.fill();
      	}
     	for(i=6;i<27;i++){
                ctx.beginPath();
                ctx.arc(start_width*i,130,5,0,2*Math.PI)
                ctx.fillStyle="orange";
                ctx.fill();
      	} 
	break;
	case 12:
	start_height=75;
	end_height=155;
	start_width=250;
	end_width=304;	
	for(i=0;i<3; i++){
		ctx.beginPath();
		ctx.arc(start_width-(15*i),start_height+(18*i),5,0,2*Math.PI)
        	ctx.fillStyle=color;
        	ctx.fill();
		ctx.beginPath();
		ctx.arc(end_width+(15*i),start_height+(18*i),5,0,2*Math.PI)
        	ctx.fillStyle=color;
        	ctx.fill();
		ctx.beginPath();
		ctx.arc(start_width-(15*i),end_height-(18*i),5,0,2*Math.PI)
        	ctx.fillStyle=color;
        	ctx.fill();
		ctx.beginPath();
		ctx.arc(end_width+(15*i),end_height-(18*i),5,0,2*Math.PI)
        	ctx.fillStyle=color;
        	ctx.fill();
	}
	for(i=1;i<3; i++){
		ctx.beginPath();
		ctx.arc(start_width+(18*i),start_height,5,0,2*Math.PI)
        	ctx.fillStyle=color;
        	ctx.fill();
		ctx.beginPath(); //internal up
		ctx.arc(start_width+15 -(12*i),(start_height+5)+(15*i),5,0,2*Math.PI)
        	ctx.fillStyle=color;
        	ctx.fill();		
		ctx.beginPath(); 
		ctx.arc(end_width-15+(12*i),(start_height+5)+(15*i),5,0,2*Math.PI)
        	ctx.fillStyle=color;
        	ctx.fill();
		ctx.beginPath();
		ctx.arc(start_width+(18*i),end_height,5,0,2*Math.PI)
        	ctx.fillStyle=color;
        	ctx.fill();
		ctx.beginPath(); //internal  down
		ctx.arc(start_width+15-(12*i),(end_height-5)-(15*i),5,0,2*Math.PI)
        	ctx.fillStyle=color;
        	ctx.fill();
		ctx.beginPath(); 
		ctx.arc(end_width-15+(12*i),(end_height-5)-(15*i),5,0,2*Math.PI)
        	ctx.fillStyle=color;
        	ctx.fill();
	}
	break;
	case 13:
	start_width=18; //smaller width 28
        for(i=1;i<32;i++){ //smaller width 19
                ctx.beginPath();
                ctx.arc(start_width*i,75,5,0,2*Math.PI)
                ctx.fillStyle=color;
                ctx.fill();
	}
	start_height=90;
	start_width_l=0;
	start_width_r=576; //smaller width 536
	for (i=1;i<4;i++){
                for(j=1;j<3;j++){
                	ctx.beginPath();
                	ctx.arc(start_width_l+(18*j),start_height,5,0,2*Math.PI) //smaller width 28
                	ctx.fillStyle=color;
                	ctx.fill();
                        ctx.beginPath();
                        ctx.arc(start_width_r-(18*j),start_height,5,0,2*Math.PI) //smaller width 28
                        ctx.fillStyle=color;
                        ctx.fill();
                        temp_width_left=start_width_l+(18*j); //smaller width 28
			temp_width_right=start_width_r-(18*j); //smaller width 28
                }
                start_width_l=temp_width_left-18; //smaller width 28
		start_width_r=temp_width_right+18; //smaller width 28
		start_height+=25;
        }
	start_width=18; //smaller width 28
	for(i=4;i<29;i++){ //smaller width 4 and 16
                ctx.beginPath();
                ctx.arc(start_width*i,start_height,5,0,2*Math.PI)
                ctx.fillStyle=color;
                ctx.fill();
        }
	break;
	case 14:
	start_width=18;
        for(i=1;i<32;i++){
                ctx.beginPath();
                ctx.arc(start_width*i,75,5,0,2*Math.PI)
                ctx.fillStyle=color;
                ctx.fill();
	}
	start_height=90
	start_width_l=0
	start_width_r=576
	for (i=1;i<3;i++){
                for(j=1;j<4;j++){
                	ctx.beginPath();
                	ctx.arc(start_width_l+(18*j),start_height,5,0,2*Math.PI)
                	ctx.fillStyle=color;
                	ctx.fill();
                        ctx.beginPath();
                        ctx.arc(start_width_r-(18*j),start_height,5,0,2*Math.PI)
                        ctx.fillStyle=color;
                        ctx.fill();
                        temp_width_left=start_width_l+(18*j);
			temp_width_right=start_width_r-(18*j);
                }
                start_width_l=temp_width_left-18;
		start_width_r=temp_width_right+18;
		start_height+=25;
        }
	start_width=18
	for(i=4;i<29;i++){
                ctx.beginPath();
                ctx.arc(start_width*i,start_height,5,0,2*Math.PI)
                ctx.fillStyle=color;
                ctx.fill();
        }
	break;
	default:
        console.log("Mouth not active");
	}
}


