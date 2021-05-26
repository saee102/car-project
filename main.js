canvas=document.getElementById("myCanvas");
ctx=canvas.getContext("2d");

rover_width=100;
rover_height=90;

backround_image="racing.jpg";
rover_image="car1.png";

rover_x=10;
rover_y=10;

function add(){
    backround_Img=new Image();
    backround_Img.onload=uploadbackround;
    backround_Img.src=backround_image;

    rover_Img=new Image();
    rover_Img.onload=uploadrover;
    rover_Img.src=rover_image;


}
function uploadbackround(){
    ctx.drawImage(backround_Img,0,0,canvas.width,canvas.height);

}
function uploadrover(){
    ctx.drawImage(rover_Img,rover_x,rover_y,rover_width,rover_height);
}
window.addEventListener("keydown", my_keydown);
function my_keydown(e) { keyPressed = e.keyCode;
 console.log(keyPressed);

 if(keyPressed == '38') { up();
     console.log("up");
     } if(keyPressed == '40') { down();
         console.log("down");
         } if(keyPressed == '37') { left();
             console.log("left");
             } if(keyPressed == '39') { right();
                 console.log("right");
                 } }
