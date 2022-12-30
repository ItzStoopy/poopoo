nose_x=0;
nose_y=0;
difference=0;
leftWristX=0;
rightWristX=0;
function setup()
{
video = createCapture(VIDEO);
video.size(400,500);

canvas= createCanvas(600,600);
canvas.position(540,300);
poseNet=ml5.poseNet(video,modelLoaded);
}
function modelLoaded(){
console.log('The model has been loaded or has it?');
}

function draw(){
background ('#aa6f73');
}

function gotPoses(results)
{
    if (results.length >0)
{
    console.log(results);
  }

}
