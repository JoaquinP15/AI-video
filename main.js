video = "";

function preload(){
   video = createVideo("video.mp4");
}

function setup(){
   canvas = createCanvas(480,380);
   canvas.center();

   video.hide();
}

function draw(){
   image(video,0,0,480,380);
}

function start(){
   object_detector =  ml5.objectDetector("cocossd",modelLoaded);
   document.getElementById("status").innerHTML = 'status : detecting objects';
}

function modelLoaded(){
   console.log("modelLoaded has been initialized");
   Status = true;
   video.speed(1);
   video.volume(0);
   video.loop();
}