canvas = document.getElementById('myCanvas');
ctx = canvas.getContext("2d");

nasa_array = ["1000ML0044630530405150E01_DXXX.jpeg", "1000ML0044630990305196E01_DXXX.jpeg", "1000ML0044631290305226E03_DXXX.jpeg", "1000MR0044631300503690C00_DXXX.jpeg", "FLB_486265257EDR_F0481570FHAZ00323M_.jpeg"];

random_number = Math.floor(Math.random() * 5);

rover_width = 100;
rover_height = 90;

background_image = nasa_array[random_number];
console.log("background_image = "+background_image);
rover_image = "rover.png";


rover_x = 10;
rover_y = 10;

function add(){
    background_imgTag = new Image();
    background_imgTag.onload = uploadBackground;
    background_imgTag.src = background_image;

    rower_imgTag = new Image();
    rower_imgTag.onload = uploadRover;
    rower_imgTag.src = rover_image;
}

function uploadBackground(){
    ctx.drawImage(background_imgTag, 0, 0, canvas.width, canvas.height);
}

function uploadRover(){
    ctx.drawImage(rower_imgTag, rover_x, rover_y, rover_width, rover_height);
}

window.addEventListener("keydown", my_keydown);
function my_keydown(e){
    keyPressed = e.keyCode;
    console.log(keyPressed);
    if(keyPressed == '38'){
        up();
        console.log("up");
    }
    if (keyPressed == '40'){
        down();
        console.log("down");
    }
    if(keyPressed == '37'){
        left();
        console.log("left");
    }
    if(keyPressed == '39'){
        right();
        console.log("right");
    }
}
function up(){
    if(rover_y >= 0){
        rover_y = rover_y - 10;
        console.log("When up arrow is pressed, x = " + rover_x + " | y = " + rover_y);
        uploadBackground();
        uploadRover();
    }
}
function down(){
    if(rover_y <= 500){
        rover_y = rover_y + 10;
        console.log("When down arrow is pressed, x = " + rover_x + " | y = " + rover_y);
        uploadBackground();
        uploadRover();
    }
}
function left(){
    if(rover_x >= 0){
        rover_x = rover_x - 10;
        console.log("When left arrow is pressed, x = " + rover_x + "| y = " + rover_y);
        uploadBackground();
        uploadRover();
    }
}
function right(){
    if(rover_x <= 700){
        rover_x = rover_x + 10;
        console.log("When right arrow is pressed, x = " + rover_x + "| y = " + rover_y);
        uploadBackground();
        uploadRover();
    }
}