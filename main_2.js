img = "";
status = "";

function preload() {
    img = loadImage('desk.jpeg');
}
function setup() {
    canvas = createCanvas(600,400);
    canvas.center();
    objectDetector = ml5.objectDetector("cocossd", modelLoaded);
    document.getElementById("status").innerHTML = "Status : Object is Detecting";
    
}

function modelLoaded(){
status = true;
console.log("Done!");
objectDetector.detect(img, gotResult);
}

function gotResult(error, results){
    if (error){
        console.error(error);
    }
    console.log(results);
}

function draw(){
    
    image(img, 0, 0, 600, 400);
    fill("#000000");
    text("dog", 90, 60);
    
    noFill();
    stroke("#32a852");
    rect(70, 30, 300, 300);

   
    fill("#ffffff");
    text("cat", 290, 90);
    noFill();
    stroke("#000000");
    rect(280, 69, 260, 300);
}