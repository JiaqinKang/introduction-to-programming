/*

The Game Project 7 - Bring it all together

*/

var gameChar_x;
var gameChar_y;
var floorPos_y;
var scrollPos;
var gameChar_world_x;

var isLeft;
var isRight;
var isFalling;
var isPlummeting;

//jump and gravity
var jumpAmount;
var gravity;

//objects
var trees_x;
var trees_y;
var clouds;
var mountains;
var canyon;
var collectable;

function setup()
{
	createCanvas(1024, 576);
	floorPos_y = height * 3/4;
	gameChar_x = width/2;
	gameChar_y = floorPos_y;

	// Variable to control the background scrolling.
	scrollPos = 0;

	// Variable to store the real position of the gameChar in the game
	// world. Needed for collision detection.
	gameChar_world_x = gameChar_x - scrollPos;
	
	//jump and gravity
	jumpAmount = 1;
	gravity =1;

	//tree offsets -145 to offset to ground
	trees_y = floorPos_y-145;
	
	// Boolean variables to control the movement of the game character.
	isLeft = false;
	isRight = false;
	isFalling = false;
	isPlummeting = false;

	// Initialise arrays of scenery objects.
	//trees
	
	trees_x = [random(-5000,5000),random(-5000,5000),random(-5000,5000),random(-5000,5000),random(-5000,5000),random(-5000,5000),random(-5000,5000),random(-5000,5000),random(-5000,5000),random(-5000,5000),random(-5000,5000),random(-5000,5000),random(-5000,5000),random(-5000,5000),random(-5000,5000),random(-5000,5000),random(-5000,5000),random(-5000,5000),random(-5000,5000),random(-5000,5000),random(-5000,5000),random(-5000,5000),random(-5000,5000),random(-5000,5000),random(-5000,5000),random(-5000,5000),random(-5000,5000),random(-5000,5000),random(-5000,5000),random(-5000,5000),random(-5000,5000),random(-5000,5000),random(-5000,5000),random(-5000,5000),random(-5000,5000),random(-5000,5000),random(-5000,5000),random(-5000,5000),random(-5000,5000),random(-5000,5000),random(-5000,5000),random(-5000,5000),random(-5000,5000),random(-5000,5000),random(-5000,5000),random(-5000,5000),random(-5000,5000),random(-5000,5000),random(-5000,5000),random(-5000,5000),random(-5000,5000),random(-5000,5000),random(-5000,5000),random(-5000,5000),random(-5000,5000),random(-5000,5000)];
	
	//cloud 
	clouds= [{cloudX_pos:random(-5000,5000),
			  cloudY_pos:random(0,100),
			  cloudWidth:random(5,10),
			  cloudHight:random(0,5)},
			{cloudX_pos:random(-5000,5000),
			  cloudY_pos:random(0,100),
			  cloudWidth:random(5,10),
			  cloudHight:random(0,5)},
			{cloudX_pos:random(-5000,5000),
			  cloudY_pos:random(0,100),
			  cloudWidth:random(5,10),
			  cloudHight:random(0,5)},
			{cloudX_pos:random(-5000,5000),
			  cloudY_pos:random(0,100),
			  cloudWidth:random(5,10),
			  cloudHight:random(0,5)},
			{cloudX_pos:random(-5000,5000),
			  cloudY_pos:random(0,100),
			  cloudWidth:random(5,10),
			  cloudHight:random(0,5)},
			{cloudX_pos:random(-5000,5000),
			  cloudY_pos:random(0,100),
			  cloudWidth:random(5,10),
			  cloudHight:random(0,5)},
			{cloudX_pos:random(-5000,5000),
			  cloudY_pos:random(0,100),
			  cloudWidth:random(5,10),
			  cloudHight:random(0,5)},
			{cloudX_pos:random(-5000,5000),
			  cloudY_pos:random(0,100),
			  cloudWidth:random(5,10),
			  cloudHight:random(0,5)},
			{cloudX_pos:random(-5000,5000),
			  cloudY_pos:random(0,100),
			  cloudWidth:random(5,10),
			  cloudHight:random(0,5)},
			{cloudX_pos:random(-5000,5000),
			  cloudY_pos:random(0,100),
			  cloudWidth:random(5,10),
			  cloudHight:random(0,5)},
			{cloudX_pos:random(-5000,5000),
			  cloudY_pos:random(0,100),
			  cloudWidth:random(5,10),
			  cloudHight:random(0,5)},
			{cloudX_pos:random(-5000,5000),
			  cloudY_pos:random(0,100),
			  cloudWidth:random(5,10),
			  cloudHight:random(0,5)},
			{cloudX_pos:random(-5000,5000),
			  cloudY_pos:random(0,100),
			  cloudWidth:random(5,10),
			  cloudHight:random(0,5)},
			{cloudX_pos:random(-5000,5000),
			  cloudY_pos:random(0,100),
			  cloudWidth:random(5,10),
			  cloudHight:random(0,5)},
			{cloudX_pos:random(-5000,5000),
			  cloudY_pos:random(0,100),
			  cloudWidth:random(5,10),
			  cloudHight:random(0,5)},
			{cloudX_pos:random(-5000,5000),
			  cloudY_pos:random(0,100),
			  cloudWidth:random(5,10),
			  cloudHight:random(0,5)},
			{cloudX_pos:random(-5000,5000),
			  cloudY_pos:random(0,100),
			  cloudWidth:random(5,10),
			  cloudHight:random(0,5)},
			{cloudX_pos:random(-5000,5000),
			  cloudY_pos:random(0,100),
			  cloudWidth:random(5,10),
			  cloudHight:random(0,5)},
			{cloudX_pos:random(-5000,5000),
			  cloudY_pos:random(0,100),
			  cloudWidth:random(5,10),
			  cloudHight:random(0,5)},
			{cloudX_pos:random(-5000,5000),
			  cloudY_pos:random(0,100),
			  cloudWidth:random(5,10),
			  cloudHight:random(0,5)},
			{cloudX_pos:random(-5000,5000),
			  cloudY_pos:random(0,100),
			  cloudWidth:random(5,10),
			  cloudHight:random(0,5)},
			{cloudX_pos:random(-5000,5000),
			  cloudY_pos:random(0,100),
			  cloudWidth:random(5,10),
			  cloudHight:random(0,5)},
			{cloudX_pos:random(-5000,5000),
			  cloudY_pos:random(0,100),
			  cloudWidth:random(5,10),
			  cloudHight:random(0,5)},
			{cloudX_pos:random(-5000,5000),
			  cloudY_pos:random(0,100),
			  cloudWidth:random(5,10),
			  cloudHight:random(0,5)},
			{cloudX_pos:random(-5000,5000),
			  cloudY_pos:random(0,100),
			  cloudWidth:random(5,10),
			  cloudHight:random(0,5)},
			{cloudX_pos:random(-5000,5000),
			  cloudY_pos:random(0,100),
			  cloudWidth:random(5,10),
			  cloudHight:random(0,5)},
			{cloudX_pos:random(-5000,5000),
			  cloudY_pos:random(0,100),
			  cloudWidth:random(5,10),
			  cloudHight:random(0,5)},
			{cloudX_pos:random(-5000,5000),
			  cloudY_pos:random(0,100),
			  cloudWidth:random(5,10),
			  cloudHight:random(0,5)},
			{cloudX_pos:random(-5000,5000),
			  cloudY_pos:random(0,100),
			  cloudWidth:random(5,10),
			  cloudHight:random(0,5)},
			{cloudX_pos:random(-5000,5000),
			  cloudY_pos:random(0,100),
			  cloudWidth:random(5,10),
			  cloudHight:random(0,5)},
			{cloudX_pos:random(-5000,5000),
			  cloudY_pos:random(0,100),
			  cloudWidth:random(5,10),
			  cloudHight:random(0,5)},
			{cloudX_pos:random(-5000,5000),
			  cloudY_pos:random(0,100),
			  cloudWidth:random(5,10),
			  cloudHight:random(0,5)},
			{cloudX_pos:random(-5000,5000),
			  cloudY_pos:random(0,100),
			  cloudWidth:random(5,10),
			  cloudHight:random(0,5)},
			{cloudX_pos:random(-5000,5000),
			  cloudY_pos:random(0,100),
			  cloudWidth:random(5,10),
			  cloudHight:random(0,5)},
			{cloudX_pos:random(-5000,5000),
			  cloudY_pos:random(0,100),
			  cloudWidth:random(5,10),
			  cloudHight:random(0,5)},
			{cloudX_pos:random(-5000,5000),
			  cloudY_pos:random(0,100),
			  cloudWidth:random(5,10),
			  cloudHight:random(0,5)},
			{cloudX_pos:random(-5000,5000),
			  cloudY_pos:random(0,100),
			  cloudWidth:random(5,10),
			  cloudHight:random(0,5)},
			{cloudX_pos:random(-5000,5000),
			  cloudY_pos:random(0,100),
			  cloudWidth:random(5,10),
			  cloudHight:random(0,5)},
			{cloudX_pos:random(-5000,5000),
			  cloudY_pos:random(0,100),
			  cloudWidth:random(5,10),
			  cloudHight:random(0,5)},
			{cloudX_pos:random(-5000,5000),
			  cloudY_pos:random(0,100),
			  cloudWidth:random(5,10),
			  cloudHight:random(0,5)},
			{cloudX_pos:random(-5000,5000),
			  cloudY_pos:random(0,100),
			  cloudWidth:random(5,10),
			  cloudHight:random(0,5)},
			{cloudX_pos:random(-5000,5000),
			  cloudY_pos:random(0,100),
			  cloudWidth:random(5,10),
			  cloudHight:random(0,5)},
			{cloudX_pos:random(-5000,5000),
			  cloudY_pos:random(0,100),
			  cloudWidth:random(5,10),
			  cloudHight:random(0,5)},
			{cloudX_pos:random(-5000,5000),
			  cloudY_pos:random(0,100),
			  cloudWidth:random(5,10),
			  cloudHight:random(0,5)},
			{cloudX_pos:random(-5000,5000),
			  cloudY_pos:random(0,100),
			  cloudWidth:random(5,10),
			  cloudHight:random(0,5)},
			];
	
	//mountains	
	mountains =[{moutainX_pos:random(-5000,5000),
				 moutainY_pos:0},
				{moutainX_pos:random(-5000,5000),
				 moutainY_pos:0},
				{moutainX_pos:random(-5000,5000),
				 moutainY_pos:0},
				{moutainX_pos:random(-5000,5000),
				 moutainY_pos:0},
				{moutainX_pos:random(-5000,5000),
				 moutainY_pos:0},
				{moutainX_pos:random(-5000,5000),
				 moutainY_pos:0},
				{moutainX_pos:random(-5000,5000),
				 moutainY_pos:0},
				{moutainX_pos:random(-5000,5000),
				 moutainY_pos:0},
				{moutainX_pos:random(-5000,5000),
				 moutainY_pos:0},
				{moutainX_pos:random(-5000,5000),
				 moutainY_pos:0},
				{moutainX_pos:random(-5000,5000),
				 moutainY_pos:0},
				{moutainX_pos:random(-5000,5000),
				 moutainY_pos:0},
				{moutainX_pos:random(-5000,5000),
				 moutainY_pos:0},
				{moutainX_pos:random(-5000,5000),
				 moutainY_pos:0},
				{moutainX_pos:random(-5000,5000),
				 moutainY_pos:0},
				{moutainX_pos:random(-5000,5000),
				 moutainY_pos:0},
				{moutainX_pos:random(-5000,5000),
				 moutainY_pos:0},
				{moutainX_pos:random(-5000,5000),
				 moutainY_pos:0},
				{moutainX_pos:random(-5000,5000),
				 moutainY_pos:0},
				{moutainX_pos:random(-5000,5000),
				 moutainY_pos:0},
				{moutainX_pos:random(-5000,5000),
				 moutainY_pos:0},
				{moutainX_pos:random(-5000,5000),
				 moutainY_pos:0},
				{moutainX_pos:random(-5000,5000),
				 moutainY_pos:0},
				{moutainX_pos:random(-5000,5000),
				 moutainY_pos:0},
				{moutainX_pos:random(-5000,5000),
				 moutainY_pos:0},
				{moutainX_pos:random(-5000,5000),
				 moutainY_pos:0},
				{moutainX_pos:random(-5000,5000),
				 moutainY_pos:0},
				{moutainX_pos:random(-5000,5000),
				 moutainY_pos:0},
				{moutainX_pos:random(-5000,5000),
				 moutainY_pos:0},
				{moutainX_pos:random(-5000,5000),
				 moutainY_pos:0},
				{moutainX_pos:random(-5000,5000),
				 moutainY_pos:0},
				{moutainX_pos:random(-5000,5000),
				 moutainY_pos:0},
				{moutainX_pos:random(-5000,5000),
				 moutainY_pos:0},
				{moutainX_pos:random(-5000,5000),
				 moutainY_pos:0},
				{moutainX_pos:random(-5000,5000),
				 moutainY_pos:0},
				{moutainX_pos:random(-5000,5000),
				 moutainY_pos:0},
				{moutainX_pos:random(-5000,5000),
				 moutainY_pos:0},
				{moutainX_pos:random(-5000,5000),
				 moutainY_pos:0},
				{moutainX_pos:random(-5000,5000),
				 moutainY_pos:0},
				{moutainX_pos:random(-5000,5000),
				 moutainY_pos:0},
				{moutainX_pos:random(-5000,5000),
				 moutainY_pos:0},
				{moutainX_pos:random(-5000,5000),
				 moutainY_pos:0},
				{moutainX_pos:random(-5000,5000),
				 moutainY_pos:0},
				{moutainX_pos:random(-5000,5000),
				 moutainY_pos:0},
				{moutainX_pos:random(-5000,5000),
				 moutainY_pos:0},
				{moutainX_pos:random(-5000,5000),
				 moutainY_pos:0},
				{moutainX_pos:random(-5000,5000),
				 moutainY_pos:0},
				{moutainX_pos:random(-5000,5000),
				 moutainY_pos:0},
				{moutainX_pos:random(-5000,5000),
				 moutainY_pos:0},
				{moutainX_pos:random(-5000,5000),
				 moutainY_pos:0},
				{moutainX_pos:random(-5000,5000),
				 moutainY_pos:0},
				{moutainX_pos:random(-5000,5000),
				 moutainY_pos:0},
				{moutainX_pos:random(-5000,5000),
				 moutainY_pos:0},
				{moutainX_pos:random(-5000,5000),
				 moutainY_pos:0},
				{moutainX_pos:random(-5000,5000),
				 moutainY_pos:0},
				{moutainX_pos:random(-5000,5000),
				 moutainY_pos:0},
				{moutainX_pos:random(-5000,5000),
				 moutainY_pos:0},
				{moutainX_pos:random(-5000,5000),
				 moutainY_pos:0},
				{moutainX_pos:random(-5000,5000),
				 moutainY_pos:0},
				{moutainX_pos:random(-5000,5000),
				 moutainY_pos:0},
				{moutainX_pos:random(-5000,5000),
				 moutainY_pos:0},
				{moutainX_pos:random(-5000,5000),
				 moutainY_pos:0},
				{moutainX_pos:random(-5000,5000),
				 moutainY_pos:0},
				{moutainX_pos:random(-5000,5000),
				 moutainY_pos:0},
				{moutainX_pos:random(-5000,5000),
				 moutainY_pos:0},
				{moutainX_pos:random(-5000,5000),
				 moutainY_pos:0},
				{moutainX_pos:random(-5000,5000),
				 moutainY_pos:0},
				{moutainX_pos:random(-5000,5000),
				 moutainY_pos:0},
				{moutainX_pos:random(-5000,5000),
				 moutainY_pos:0},
				{moutainX_pos:random(-5000,5000),
				 moutainY_pos:0},
				{moutainX_pos:random(-5000,5000),
				 moutainY_pos:0},
				{moutainX_pos:random(-5000,5000),
				 moutainY_pos:0},
				{moutainX_pos:random(-5000,5000),
				 moutainY_pos:0},
				{moutainX_pos:random(-5000,5000),
				 moutainY_pos:0},
				{moutainX_pos:random(-5000,5000),
				 moutainY_pos:0},
				{moutainX_pos:random(-5000,5000),
				 moutainY_pos:0},
				{moutainX_pos:random(-5000,5000),
				 moutainY_pos:0},
				{moutainX_pos:random(-5000,5000),
				 moutainY_pos:0},
				{moutainX_pos:random(-5000,5000),
				 moutainY_pos:0},
				{moutainX_pos:random(-5000,5000),
				 moutainY_pos:0},
				{moutainX_pos:random(-5000,5000),
				 moutainY_pos:0},
				{moutainX_pos:random(-5000,5000),
				 moutainY_pos:0},
				{moutainX_pos:random(-5000,5000),
				 moutainY_pos:0},
				{moutainX_pos:random(-5000,5000),
				 moutainY_pos:0},
				{moutainX_pos:random(-5000,5000),
				 moutainY_pos:0},
				{moutainX_pos:random(-5000,5000),
				 moutainY_pos:0},
				{moutainX_pos:random(-5000,5000),
				 moutainY_pos:0},
				{moutainX_pos:random(-5000,5000),
				 moutainY_pos:0},
				{moutainX_pos:random(-5000,5000),
				 moutainY_pos:0},
				{moutainX_pos:random(-5000,5000),
				 moutainY_pos:0},
				{moutainX_pos:random(-5000,5000),
				 moutainY_pos:0},
				{moutainX_pos:random(-5000,5000),
				 moutainY_pos:0},
				{moutainX_pos:random(-5000,5000),
				 moutainY_pos:0},
				{moutainX_pos:random(-5000,5000),
				 moutainY_pos:0},
				{moutainX_pos:random(-5000,5000),
				 moutainY_pos:0},
				{moutainX_pos:random(-5000,5000),
				 moutainY_pos:0},
				{moutainX_pos:random(-5000,5000),
				 moutainY_pos:0},
				{moutainX_pos:random(-5000,5000),
				 moutainY_pos:0},
				{moutainX_pos:random(-5000,5000),
				 moutainY_pos:0},
				{moutainX_pos:random(-5000,5000),
				 moutainY_pos:0},
				{moutainX_pos:random(-5000,5000),
				 moutainY_pos:0},
				{moutainX_pos:random(-5000,5000),
				 moutainY_pos:0},
				{moutainX_pos:random(-5000,5000),
				 moutainY_pos:0},
				{moutainX_pos:random(-5000,5000),
				 moutainY_pos:0},
				{moutainX_pos:random(-5000,5000),
				 moutainY_pos:0},
				{moutainX_pos:random(-5000,5000),
				 moutainY_pos:0},
			   ]
				
	//canyon
	canyon = [{x_pos: 300, width: 100},
			  {x_pos: 1250, width: 100},
			  {x_pos: 1400, width: 100},
			  {x_pos: 1600, width: 100},
			  {x_pos: 1800, width: 100},
			  {x_pos: 2940, width: 100},
			  {x_pos: 3250, width: 100},
			  {x_pos: 3600, width: 100},
			  {x_pos: 3400, width: 100},
			  {x_pos: 700, width: 100},
			  {x_pos: 900, width: 100},
			  {x_pos: -300, width: 100},
			  {x_pos: -1250, width: 100},
			  {x_pos: -1400, width: 100},
			  {x_pos: -1600, width: 100},
			  {x_pos: -1800, width: 100},
			  {x_pos: -2940, width: 100},
			  {x_pos: -3250, width: 100},
			  {x_pos: -3600, width: 100},
			  {x_pos: -3400, width: 100},
			  {x_pos: -700, width: 100},
			  {x_pos: -900, width: 100}, 
			 ];
	
	//collectable 
	collectable =[{ x_pos: 200, y_pos: 380, size: 50,
				   isFound:false},
				  { x_pos: 300, y_pos: 380, size: 50, isFound:false},
				  { x_pos: 400, y_pos: 380, size: 50, isFound:false},
				  
				  { x_pos: -200, y_pos: 380, size: 50, isFound:false},
				  { x_pos: -300, y_pos: 380, size: 50, isFound:false},
				  { x_pos: -400, y_pos: 380, size: 50, isFound:false},
				  
				  { x_pos: 800, y_pos: 380, size: 50, isFound:false},
				  { x_pos: 1000, y_pos: 380, size: 50, isFound:false},
				  { x_pos: 1300, y_pos: 380, size: 50, isFound:false},
				  
				  { x_pos: 1200, y_pos: 380, size: 50, isFound:false},
				  { x_pos: 1400, y_pos: 380, size: 50, isFound:false},
				  { x_pos: 1700, y_pos: 380, size: 50, isFound:false},
				  
				  { x_pos: -500, y_pos: 380, size: 50, isFound:false},
				  { x_pos: -800, y_pos: 380, size: 50, isFound:false},
				  { x_pos: -1200, y_pos: 380, size: 50, isFound:false},
				  
				  { x_pos: -800, y_pos: 380, size: 50, isFound:false},
				  { x_pos: 1000, y_pos: 380, size: 50, isFound:false},
				  { x_pos: 1300, y_pos: 380, size: 50, isFound:false},
				  
				  { x_pos: -1200, y_pos: 380, size: 50, isFound:false},
				  { x_pos: 1400, y_pos: 380, size: 50, isFound:false},
				  { x_pos: 1700, y_pos: 380, size: 50, isFound:false},
				  
				  { x_pos: 500, y_pos: 380, size: 50, isFound:false},
				  { x_pos: 800, y_pos: 380, size: 50, isFound:false},
				  { x_pos: 1200, y_pos: 380, size: 50, isFound:false},
				 ];	
}
function draw()
{
	background(100, 155, 255); // fill the sky blue

	noStroke();
	fill(0,155,0);
	rect(0, floorPos_y, width, height/4); // draw some green ground
	//scrolling
	push();
	translate(scrollPos,0);
	
	// Draw clouds.
	drawClouds();
	// Draw mountains.
	drawMountains();
	// Draw trees.
	drawTrees();
	// Draw canyons.
	for (var i = 0 ; i < canyon.length ; i++){
		drawCanyon(canyon[i]);
		checkCanyon(canyon[i]);
	};
	// Draw collectable items.
	for (var i = 0 ; i < collectable.length; i++){
		drawCollectable(collectable[i]);
		checkCollectable(collectable[i]);
	}
	//scrolling end
	pop();
	
	// Draw game character.
	drawGameChar();
	
	// Logic to make the game character move or the background scroll.
	if(isLeft)
	{
		if(gameChar_x > width * 0.2)
		{
			gameChar_x -= 5;
		}
		else
		{
			scrollPos += 5;
		}
	}
	if(isRight)
	{
		if(gameChar_x < width * 0.8)
		{
			gameChar_x  += 5;
		}
		else
		{
			scrollPos -= 5; // negative for moving against the background
		}
	}
	
	// Logic to make the game character rise and fall.
		gameChar_y -= jumpAmount;
		//makes falling
		jumpAmount -= 1;

	//gravity	
	if (gameChar_y < floorPos_y){
		gameChar_y += gravity;
		isFalling = true;
	}	

	else if (isPlummeting ==false) {
		isFalling =  false;
		gameChar_y = floorPos_y;
	}
	// Update real position of gameChar for collision detection.
		gameChar_world_x = gameChar_x - scrollPos;
	
	}

// ---------------------
// Key control functions
// ---------------------

function keyPressed()
{
	// if statements to control the animation of the character when
	// keys are pressed.
//stop moving when falling
if(isPlummeting == true && isFalling==true){
	return;

}
		
	//keypress
if (keyCode ==65){//A
	isLeft = true;
	
}
else if (keyCode ==68){//D
	isRight = true;
}
	//jump
else if (keyCode ==87 && gameChar_y == floorPos_y){//W
	jumpAmount = 20;
	
	
		
}
else {}


	//open up the console to see how these work
	console.log("keyPressed: " + key);
	console.log("keyPressed: " + keyCode);
}

function keyReleased()
{
	// if statements to control the animation of the character when
	// keys are released.
if (keyCode ==65){//A
	isLeft = false;
}

else if (keyCode ==68){//D
	isRight = false;
}
else if (keyCode ==87 ){//W
	
	isFalling = false;
}
else{}
//else if (keyCode == ){
//		 
//		 }
	console.log("keyReleased: " + key);
	console.log("keyReleased: " + keyCode);
}

// ------------------------------
// Game character render function
// ------------------------------

// Function to draw the game character.

function drawGameChar()
{
	// draw game character
	//jumping left
	if(isLeft && isFalling){
		// add your jumping-left code
		//hair1
    fill(0);
    ellipse(gameChar_x-8,
            gameChar_y-60,
            14,14);
    
    //face
    fill(255,212,180);
    rect(gameChar_x-12,
         gameChar_y-65,
         25,25,
         5);
    
    //hair2
    fill(0);
    ellipse(gameChar_x+10,
            gameChar_y-50,
            14,14);
    
    //hair3
    fill(0);
    ellipse(gameChar_x-5,
            gameChar_y-64,        
            15,14.5);
    
    //hair4
    fill(0);
    ellipse(gameChar_x+7,
            gameChar_y-60,
            20,20);
    
    //eye left
    fill(255);
    ellipse(gameChar_x-8,
            gameChar_y-53,
            5,7);
    
    //eye ball left
    fill(0);
    ellipse(gameChar_x-9,
            gameChar_y-52,
            3,3);
    
    //mouth
    fill(255);
    ellipse(gameChar_x-10,
            gameChar_y-45,
            8,8);
    
    //tougn
    fill(255,139,148);
    arc(gameChar_x-10,
        gameChar_y-45,
        8,8,
        0, HALF_PI);   
    
    //left hand
    stroke(255,212,180);
    strokeWeight(6);
    line(gameChar_x-9,
         gameChar_y-35,
         gameChar_x-15.5,
         gameChar_y-40);
    noStroke();
    
    //right hand
    stroke(255,212,180);
    strokeWeight(6);
    line(gameChar_x+9,
         gameChar_y-35,
         gameChar_x+15.5,
         gameChar_y-40);
    
    noStroke();
    
    //body
    fill(169,198,206);
    rect(gameChar_x-12.5
         ,gameChar_y-38,
         25,14, 
         3);
    
    //neck
    fill(255,212,180);
    rect(gameChar_x-4,
         gameChar_y-41.1,
         8,6,
         180);
    
    //pants
    fill(220,237,193);
    arc(gameChar_x,
        gameChar_y-25,
        24,12,
        TWO_PI,PI)
    
    //leg left
    stroke(220,237,193);
    strokeWeight(11);
    line(gameChar_x-6,
         gameChar_y-19.5,
         gameChar_x-10,
         gameChar_y-14);
    noStroke();

    //leg right
    stroke(220,237,193);
    strokeWeight(11);
    line(gameChar_x+6,
         gameChar_y-19.5,
         gameChar_x+10,
         gameChar_y-14);
    noStroke();
    
    //shoe left
    fill(0);
    arc(gameChar_x-12.5,
        gameChar_y-8.5,
        11,11,
        PI,TWO_PI);
        noStroke();
    
    //shoe right
    fill(0);
    arc(gameChar_x+12.5,
        gameChar_y-8.5,
        11,11,
        PI,TWO_PI);
        noStroke();

	}
	//jumping right
	else if(isRight && isFalling){
		// add your jumping-right code
		//hair1
    fill(0);
    ellipse(gameChar_x+8,
            gameChar_y-60,
            14,14);
    
    //face
    fill(255,212,180);
    rect(gameChar_x-12,
         gameChar_y-65,
         25,25,
         5);
    
    //hair2
    fill(0);
    ellipse(gameChar_x-10,
            gameChar_y-50,
            14,14);
    
    //hair3
    fill(0);
    ellipse(gameChar_x+5,
            gameChar_y-64,   
            15,14.5);
    
    //hair4
    fill(0);
    ellipse(gameChar_x-7,
            gameChar_y-60,
            20,20);
    
    //eye left
    fill(255);
    ellipse(gameChar_x+8,
            gameChar_y-53,
            5,7);
    
    //eye ball left
    fill(0);
    ellipse(gameChar_x+9,
            gameChar_y-52,
            3,3);
    
    //mouth
    fill(255);
    ellipse(gameChar_x+10,
            gameChar_y-45,
            8,8);
    
    //tougn
    fill(255,139,148);
    arc(gameChar_x+10,
        gameChar_y-45,
        8,8,
        HALF_PI, PI); 
    
    //left hand
    stroke(255,212,180);
    strokeWeight(6);
    line(gameChar_x-9,
         gameChar_y-35,
         gameChar_x-15.5,
         gameChar_y-40);
    noStroke();
    
    //right hand
    stroke(255,212,180);
    strokeWeight(6);
    line(gameChar_x+9,
         gameChar_y-35,
         gameChar_x+15.5,
         gameChar_y-40);
    noStroke();
    
    //body
    fill(169,198,206);
    rect(gameChar_x-12.5
         ,gameChar_y-38,
         25,14, 
         3);
    
    //neck
    fill(255,212,180);
    rect(gameChar_x-4,
         gameChar_y-41.1,
         8,6,
         180);
    
    //pants
    fill(220,237,193);
    arc(gameChar_x,
        gameChar_y-25,
        24,12,
        TWO_PI,PI)
    
    //leg left
    stroke(220,237,193);
    strokeWeight(11);
    line(gameChar_x-6,
         gameChar_y-19.5,
         gameChar_x-10,
         gameChar_y-14);
    noStroke();

    //leg right
    stroke(220,237,193);
    strokeWeight(11);
    line(gameChar_x+6,
         gameChar_y-19.5,
         gameChar_x+10,
         gameChar_y-14);
    noStroke();
    
    //shoe left
    fill(0);
    arc(gameChar_x-12.5,
        gameChar_y-8.5,
        11,11,
        PI,TWO_PI);
        noStroke();
    
    //shoe right
    fill(0);
    arc(gameChar_x+12.5,
        gameChar_y-8.5,
        11,11,
        PI,TWO_PI);
        noStroke();

	}
	//walking left
	else if(isLeft){
		// add your walking left code
		//hair1
    fill(0);
    ellipse(gameChar_x-8,
            gameChar_y-60,
            14,14);
    
    //face
    fill(255,212,180);
    rect(gameChar_x-12,
         gameChar_y-65,
         25,27,
         5);
    
    //hair2
    fill(0);
    ellipse(gameChar_x+10,
            gameChar_y-50,
            14,14);
    
    //hair3
    fill(0);
    ellipse(gameChar_x-5,
            gameChar_y-64,        
            15,14.5);
    
    //hair4
    fill(0);
    ellipse(gameChar_x+7,
            gameChar_y-60,
            20,20);
    
    //eye left
    fill(255);
    ellipse(gameChar_x-8,
            gameChar_y-53,
            5,7);
    
    //eye ball left
    fill(0);
    ellipse(gameChar_x-9,
            gameChar_y-52,
            3,3);
    
    //mouth
    fill(255);
    ellipse(gameChar_x-10,
            gameChar_y-45,
            8,8);
    
    //tougn
    fill(255,139,148);
    arc(gameChar_x-10,
        gameChar_y-45,
        8,8,
        0, HALF_PI);   
    
    //left hand
    stroke(255,212,180);
    strokeWeight(6);
    line(gameChar_x-15.5,
         gameChar_y-33,
         gameChar_x-9,
         gameChar_y-20);
    noStroke();
    
    //body
    fill(169,198,206);
    rect(gameChar_x-12.5
         ,gameChar_y-36,
         25,18, 
         3);
    
    //right hand
    stroke(255,212,180);
    strokeWeight(6);
    line(gameChar_x+9,
         gameChar_y-33,
         gameChar_x+15.5,
         gameChar_y-20);
    noStroke();
    
    //neck
    fill(255,212,180);
    rect(gameChar_x-4,
         gameChar_y-41,
         8,9,
         180);
    
    //pants
    fill(220,237,193);
    arc(gameChar_x,
        gameChar_y-19,
        24,12,
        TWO_PI,PI)
    
    //leg left
    stroke(220,237,193);
    strokeWeight(11);
    line(gameChar_x-6,
         gameChar_y-13,
         gameChar_x-9,
         gameChar_y-12);
    noStroke();
    
    //leg right
    stroke(220,237,193);
    strokeWeight(11);
    line(gameChar_x+6,
         gameChar_y-13,
         gameChar_x+6,
         gameChar_y-10);
    noStroke();
    
    //shoe left
    fill(0);
    arc(gameChar_x-10,
        gameChar_y-6.5,    
        11,11,
        PI,TWO_PI);
        noStroke();
    
    //shoe right
    fill(0);
    arc(gameChar_x+7,
        gameChar_y-4.5,
        11,11,
        PI,TWO_PI);
        noStroke();

	}
	//walking right
	else if(isRight){
		// add your walking right code
//hair1
    fill(0);
    ellipse(gameChar_x+8,
            gameChar_y-60,
            14,14);
    
    //face
    fill(255,212,180);
    rect(gameChar_x-12,
         gameChar_y-65,
         25,25,
         5);

    //hair2
    fill(0);
    ellipse(gameChar_x-10,
            gameChar_y-50,
            14,14);
    
    //hair3
    fill(0);
    ellipse(gameChar_x+5,
            gameChar_y-64,   
            15,14.5);
    
    //hair4
    fill(0);
    ellipse(gameChar_x-7,
            gameChar_y-60,
            20,20);
    
    //eye left
    fill(255);
    ellipse(gameChar_x+8,
            gameChar_y-53,
            5,7);
    
    //eye ball left
    fill(0);
    ellipse(gameChar_x+9,
            gameChar_y-52,
            3,3);
    
    //mouth
    fill(255);
    ellipse(gameChar_x+10,
            gameChar_y-45,
            8,8);
    
    //tougn
    fill(255,139,148);
    arc(gameChar_x+10,
        gameChar_y-45,
        8,8,
        HALF_PI, PI); 
    
    //right hand
    stroke(255,212,180);
    strokeWeight(6);
    line(gameChar_x+15.5,
         gameChar_y-33,
         gameChar_x+9,
         gameChar_y-20);
    noStroke();
    
    //body
    fill(169,198,206);
    rect(gameChar_x-12.5
         ,gameChar_y-36,
         25,18, 
         3);
    
    //left hand
    stroke(255,212,180);
    strokeWeight(6);
    line(gameChar_x-9,
         gameChar_y-33,
         gameChar_x-15.5,
         gameChar_y-20);
    noStroke();
    
    //neck
    fill(255,212,180);
    rect(gameChar_x-4,
         gameChar_y-41,
         8,9,
         180);
    
    //pants
    fill(220,237,193);
    arc(gameChar_x,
        gameChar_y-19,
        24,12,
        TWO_PI,PI)
    
    //leg left
    stroke(220,237,193);
    strokeWeight(11);
    line(gameChar_x-6,
         gameChar_y-13,
         gameChar_x-6,
         gameChar_y-10);
    noStroke();
    
    //leg right
    stroke(220,237,193);
    strokeWeight(11);
    line(gameChar_x+6,
         gameChar_y-13,
         gameChar_x+9,
         gameChar_y-12);
    noStroke();
    
    //shoe left
    fill(0);
    arc(gameChar_x-7,
        gameChar_y-4.5,    
        11,11,
        PI,TWO_PI);
        noStroke();

    //shoe right
    fill(0);
    arc(gameChar_x+10,
        gameChar_y-6.5,
        11,11,
        PI,TWO_PI);
        noStroke();
	}
	//falling
	else if(isFalling || isPlummeting){
		// add your jumping facing forwards code
    //hair1
    fill(0);
    ellipse(gameChar_x-8,
            gameChar_y-60,
            14,14);
    
    //hair2
    fill(0);
    ellipse(gameChar_x+8,
            gameChar_y-60,
            14,14);
    
    //face
    fill(255,212,180);
    rect(gameChar_x-12,
         gameChar_y-65,
         25,25,
         5);
    
    //hair3
    fill(0);
    ellipse(gameChar_x-5,
            gameChar_y-64,        
            15,14.5);
    
    //hair4
    fill(0);
    ellipse(gameChar_x+7,
            gameChar_y-64,
            13,12);
    
    //eye left
    fill(255);
    ellipse(gameChar_x-6,
            gameChar_y-53,
            5,7);
    
    //eye ball left
    fill(0);
    ellipse(gameChar_x-6,
            gameChar_y-52,
            3,3);

    //left right
    fill(255);
    ellipse(gameChar_x+6,
            gameChar_y-53,
            5,7);
    
    //eye ball right
    fill(0);
    ellipse(gameChar_x+6,
            gameChar_y-52,
            3,3);
    
    //mouth
    fill(255);
    ellipse(gameChar_x,
            gameChar_y-45,
            8,8);
    
    //tougn
    fill(255,139,148);
    arc(gameChar_x,
        gameChar_y-45,
        8,8,
        TWO_PI,PI);   
    
    //left hand
    stroke(255,212,180);
    strokeWeight(6);
    line(gameChar_x-9,
         gameChar_y-35,
         gameChar_x-15.5,
         gameChar_y-40);
    noStroke();
    
    //right hand
    stroke(255,212,180);
    strokeWeight(6);
    line(gameChar_x+9,
         gameChar_y-35,
         gameChar_x+15.5,
         gameChar_y-40);
    
    noStroke();
    
    //body
    fill(169,198,206);
    rect(gameChar_x-12.5
         ,gameChar_y-38,
         25,14, 
         3);
    
    //neck
    fill(255,212,180);
    rect(gameChar_x-4,
         gameChar_y-41.1,
         8,6,
         180);
    
    //pants
    fill(220,237,193);
    arc(gameChar_x,
        gameChar_y-25,
        24,12,
        TWO_PI,PI)
    
    //leg left
    stroke(220,237,193);
    strokeWeight(11);
    line(gameChar_x-6,
         gameChar_y-19.5,
         gameChar_x-10,
         gameChar_y-14);
    noStroke();

    //leg right
    stroke(220,237,193);
    strokeWeight(11);
    line(gameChar_x+6,
         gameChar_y-19.5,
         gameChar_x+10,
         gameChar_y-14);
    noStroke();
    
    //shoe left
    fill(0);
    arc(gameChar_x-12.5,
        gameChar_y-8.5,
        11,11,
        PI,TWO_PI);
        noStroke();
    
    //shoe right
    fill(0);
    arc(gameChar_x+12.5,
        gameChar_y-8.5,
        11,11,
        PI,TWO_PI);
        noStroke();
		

	}
	//front
	else{
		// add your standing front facing code
		//hair1
    fill(0);
    ellipse(gameChar_x-8,
            gameChar_y-60,
            14,14);
    
    //hair2
    fill(0);
    ellipse(gameChar_x+8,
            gameChar_y-60,
            14,14);
    
    //face
    fill(255,212,180);
    rect(gameChar_x-12,
         gameChar_y-65,
         25,27,
         5);
    
    //hair3
    fill(0);
    ellipse(gameChar_x-5,
            gameChar_y-64,        
            15,14.5);
    
    //hair4
    fill(0);
    ellipse(gameChar_x+7,
            gameChar_y-64,
            13,12);
    
    //eye left
    fill(255);
    ellipse(gameChar_x-6,
            gameChar_y-53,
            5,7);
    
    //eye ball left
    fill(0);
    ellipse(gameChar_x-6,
            gameChar_y-52,
            3,3);

    //left right
    fill(255);
    ellipse(gameChar_x+6,
            gameChar_y-53,
            5,7);
    
    //eye ball right
    fill(0);
    ellipse(gameChar_x+6,
            gameChar_y-52,
            3,3);
    
    //mouth
    fill(255);
    ellipse(gameChar_x,
            gameChar_y-45,
            8,8);
    
    //tougn
    fill(255,139,148);
    arc(gameChar_x,
        gameChar_y-45,
        8,8,
        TWO_PI,PI);   
    
    //left hand
    stroke(255,212,180);
    strokeWeight(6);
    line(gameChar_x-9,
         gameChar_y-33,
         gameChar_x-15.5,
         gameChar_y-20);
    noStroke();
    
    //right hand
    stroke(255,212,180);
    strokeWeight(6);
    line(gameChar_x+9,
         gameChar_y-33,
         gameChar_x+15.5,
         gameChar_y-20);
    noStroke();
    
    //body
    fill(169,198,206);
    rect(gameChar_x-12.5
         ,gameChar_y-36,
         25,18, 
         3);
    
    //neck
    fill(255,212,180);
    rect(gameChar_x-4,
         gameChar_y-41,
         8,9,
         180);
    
    //pants
    fill(220,237,193);
    arc(gameChar_x,
        gameChar_y-19,
        24,12,
        TWO_PI,PI)
    
    //leg left
    stroke(220,237,193);
    strokeWeight(11);
    line(gameChar_x-6,
         gameChar_y-13,
         gameChar_x-6,
         gameChar_y-10);
    noStroke();
    
    //leg right
    stroke(220,237,193);
    strokeWeight(11);
    line(gameChar_x+6,
         gameChar_y-13,
         gameChar_x+6,
         gameChar_y-10);
    noStroke();
    
    //shoe left
    fill(0);
    arc(gameChar_x-7,
        gameChar_y-4.5,
        11,11,
        PI,TWO_PI);
        noStroke();
    
    //shoe right
    fill(0);
    arc(gameChar_x+7,
        gameChar_y-4.5,
        11,11,
        PI,TWO_PI);
        noStroke();
	}
}
// ---------------------------
// Background render functions
// ---------------------------

// Function to draw cloud objects.
function drawClouds(){
	for (i = 0 ; i < clouds.length; i++){	
			fill(255,255,255);
			ellipse(clouds[i].cloudX_pos+213,clouds[i].cloudY_pos+94,
					clouds[i].cloudWidth+110,clouds[i].cloudHight+110);

			ellipse(clouds[i].cloudX_pos+172,clouds[i].cloudY_pos+120,
					clouds[i].cloudWidth+90,clouds[i].cloudHight+90);

			ellipse(clouds[i].cloudX_pos+276,clouds[i].cloudY_pos+80,
					clouds[i].cloudWidth+130,clouds[i].cloudHight+130);

			ellipse(clouds[i].cloudX_pos+309,clouds[i].cloudY_pos+110,
					clouds[i].cloudWidth+110,clouds[i].cloudHight+110);
			fill(100,155,255);

			rect(clouds[i].cloudX_pos+125,clouds[i].cloudY_pos+138,
				 clouds[i].cloudWidth+240,clouds[i].cloudHight+28);}}
// Function to draw mountains objects.
function drawMountains(){
	for (var i = 0 ; i< mountains.length; i++){
			fill(101,67,33);
			triangle(520-mountains[i].moutainX_pos,180+mountains[i].moutainY_pos,
					 386-mountains[i].moutainX_pos,432+mountains[i].moutainY_pos,
					 664-mountains[i].moutainX_pos,432+mountains[i].moutainY_pos);
		//moutain 2
			fill(101,67,40);
			triangle(640-mountains[i].moutainX_pos,102+mountains[i].moutainY_pos,
					 486-mountains[i].moutainX_pos,432+mountains[i].moutainY_pos,
					 764-mountains[i].moutainX_pos,432+mountains[i].moutainY_pos);

		//mountain 3
			fill(101,70,40);
			triangle(762-mountains[i].moutainX_pos,140+mountains[i].moutainY_pos,
					 586-mountains[i].moutainX_pos,432+mountains[i].moutainY_pos,
					 864-mountains[i].moutainX_pos,432+mountains[i].moutainY_pos);}}
// Function to draw trees objects.
function drawTrees(){
	for (var i = 0 ; i < trees_x.length; i++){
		fill(0,145,0);
		triangle(trees_x[i],trees_y-116,
				 trees_x[i]-100,trees_y-11,
				 trees_x[i]+30,trees_y-11);
		//1.2
		fill(0,104,0);
		triangle(trees_x[i],trees_y-116,
				 trees_x[i]+30,trees_y-11,
				 trees_x[i]+100,trees_y-11);

		//triangle 2.1
		fill(0,145,0);
		triangle(trees_x[i]+17.5,trees_y-57,
				 trees_x[i]-100,trees_y+2,
				 trees_x[i]+35,trees_y+2);
	//    //2.2
		fill(0,104,0);
		triangle(trees_x[i]+17.5,trees_y-57,
				 trees_x[i]+35,trees_y+2,
				 trees_x[i]+100,trees_y+2);  
		//triangle 3.1
		fill(0,145,0);
		triangle(trees_x[i]+25,trees_y-32,
				 trees_x[i]-130,trees_y+32,
				 trees_x[i]+47.5,trees_y+32);
		//3.2
		fill(0,104,0);
		triangle(trees_x[i]+25,trees_y-32,
				 trees_x[i]+47.5,trees_y+32,
				 trees_x[i]+110,trees_y+32);
		//wood
		fill(128,77,0);
		rect(trees_x[i]-33,trees_y+32,
			 30,113);
		//wood 2
		fill(97,58,0);
		rect(trees_x[i]-6,trees_y+32,
			 20,113);}}
// ---------------------------------
// Canyon render and check functions
// ---------------------------------

// Function to draw canyon objects.

function drawCanyon(t_canyon)
{
		fill(100,155,255);
    	rect(t_canyon.x_pos,floorPos_y,
			 t_canyon.width,190);
}

// Function to check character is over a canyon.

function checkCanyon(t_canyon)
{
	//isplummenting	
	//((canyon.x_pos+canyon.width)-10) make sure char whole body is in canyon
	if (gameChar_world_x > t_canyon.x_pos && 
		(gameChar_world_x) < ((t_canyon.x_pos+t_canyon.width)-10)&&
	   gameChar_y == floorPos_y){
		isPlummeting = true;
	}
}

// ----------------------------------
// Collectable items render and check functions
// ----------------------------------

// Function to draw collectable objects.

function drawCollectable(t_collectable)
{
	//coin spawn
	if (t_collectable.isFound ==false){
		// coin
		//outer ring
		fill(217,158,58);
		ellipse(t_collectable.x_pos,t_collectable.y_pos+15,
				t_collectable.size+20,t_collectable.size+20);
		//inner ring
		fill(240,198,84);
		ellipse(t_collectable.x_pos,t_collectable.y_pos+15,
				t_collectable.size,t_collectable.size);
		//inner rect
		fill(217,158,58);
		rect(t_collectable.x_pos-11,t_collectable.y_pos,
			 t_collectable.size-27.5,t_collectable.size-21);
	}
	
	if (t_collectable.isFound == true){
		console.log("is true");
	}
}

// Function to check character has collected an item.

function checkCollectable(t_collectable)
{		
	var distCharCollectable = dist(gameChar_world_x,gameChar_y,t_collectable.x_pos,t_collectable.y_pos);

	if (distCharCollectable  < 60){
		t_collectable.isFound = true;
		}
}
