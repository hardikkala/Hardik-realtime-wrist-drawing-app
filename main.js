difference=0;
leftwristX=0;
rightwristX=0;


function setup(){
    video= createCapture(VIDEO);
    video.size(550,500);

    canvas= createCanvas(550,550);
    canvas.position(560,150);

    poseNet=ml5.poseNet(video,modelLoaded);
    poseNet.on('pose',gotPoses);
}
function modelLoaded(){
    console.log("Pose net is initialized !");
}
function gotPoses(results){
    if(results.length>0){
        console.log(results);

        leftwristX=results[0].pose.leftwrist.x;
        rightwristX=results[0].pose.rightwrist.x;
        difference=floor(leftwristX-rightwrist);
        console.log("LeftWristX = "+leftwristX+"RightWristX = "+rightwristX+"difference = "+difference);
    }
}
function draw(){
    background('#969A97');

    document.getElementById("squre_side"). innerHTML="Font size of the text will be = "+difference+"px";
    fill('#F90093');
    textSize(difference);    
    text('Hardik',50,400)
}