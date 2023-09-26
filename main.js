function preload() {
	world_start = loadSound("world_start.wav");
	setSprites();
	MarioAnimation();
}

function setup() {
	canvas = createCanvas(1240,336);
	canvas.parent("canvas")
	instializeInSetup(mario);
	video= createCapture(VIDEO);
	video.size(800, 400);
	video.parent("game_console");

	posenet = ml5.poseNet(video, Modelloaded);
	posenet.on("pose", gotposes);
}

function Modelloaded() {
	console.log("Model Loaded");
}
noseX=0;
noseY=0;
function gotposes(results) {
	if(results.length > 0){
		console.log(results);
		noseX = results[0].pose.nose.x;
		noseY = results[0].pose.nose.y;
		console.log("nosex = " + noseX + " nosey = " + noseY);
	}
}

function draw() {
	game()
}






