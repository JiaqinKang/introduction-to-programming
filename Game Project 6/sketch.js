/*

The Game Project 6 - Side scrolling

*/

var gameChar_x;
var gameChar_y;
var floorPos_y;
var isLeft;
var isRight;
var scrollPos;

var clouds;
var mountains;
var trees_x;
var trees_y;
var canyon;
var collectable;


function setup()
{
	createCanvas(1024, 576);
	floorPos_y = height * 3/4;
	gameChar_x = width/2;
	//gamechar_y + 5 to offset to ground
	gameChar_y = floorPos_y+5;

	// Boolean variables to control the movement of the game character.
	isLeft = false;
	isRight = false;

	// Variable to control the background scrolling.
	scrollPos = 0;
	
	// Initialise arrays of scenery objects.
	trees_x = [319,552,846,632,229,297,49,504,802,785,1000];
	//-145 to offset to ground
	trees_y = floorPos_y-145;
	
	//cloud 
	clouds= [{cloudX_pos:0,
			  cloudY_pos:0,
			  cloudWidth:0,
			  cloudHight:0},
			 
			 {cloudX_pos:70,
			  cloudY_pos:100,
			  cloudWidth:10,
			  cloudHight:10},

			 {cloudX_pos:300,
			  cloudY_pos:0,
			  cloudWidth:5,
			  cloudHight:5},

			 {cloudX_pos:370,
			  cloudY_pos:0,
			  cloudWidth:0,
			  cloudHight:0},
			 
			 {cloudX_pos:700,
			  cloudY_pos:0,
			  cloudWidth:0,
			  cloudHight:0},
			
			{cloudX_pos:-1000,
			  cloudY_pos:0,
			  cloudWidth:0,
			  cloudHight:0},
			 
			 {cloudX_pos:-400,
			  cloudY_pos:100,
			  cloudWidth:10,
			  cloudHight:10},

			 {cloudX_pos:-1400,
			  cloudY_pos:0,
			  cloudWidth:5,
			  cloudHight:5},

			 {cloudX_pos:-370,
			  cloudY_pos:0,
			  cloudWidth:0,
			  cloudHight:1},
			 
			 {cloudX_pos:1700,
			  cloudY_pos:0,
			  cloudWidth:0,
			  cloudHight:0},
			 
			{cloudX_pos:1900,
			  cloudY_pos:0,
			  cloudWidth:0,
			  cloudHight:0},
			 
			{cloudX_pos:2000,
			  cloudY_pos:0,
			  cloudWidth:0,
			  cloudHight:0},
			 
			{cloudX_pos:2300,
			  cloudY_pos:0,
			  cloudWidth:0,
			  cloudHight:0},
			 
			{cloudX_pos:1700,
			  cloudY_pos:0,
			  cloudWidth:0,
			  cloudHight:0},];
	//mountains	
	mountains =[{moutainX_pos:300,
				 moutainY_pos:0},
				
			   {moutainX_pos:700,
				 moutainY_pos:0},
				
				{moutainX_pos:-100,
				 moutainY_pos:0},
			   
			   {moutainX_pos:900,
				 moutainY_pos:0},
				
			   {moutainX_pos:700,
				 moutainY_pos:0},
				
				{moutainX_pos:1400,
				 moutainY_pos:0},
			   
			   {moutainX_pos:-700,
				 moutainY_pos:0},
				
			   {moutainX_pos:-900,
				 moutainY_pos:0},
				
				{moutainX_pos:-1000,
				 moutainY_pos:0}];
	//canyon
	canyon = [{x_pos: 100, width: 100},
			  {x_pos: 300, width: 100},
			  {x_pos: 1250, width: 100},
			  {x_pos: 1400, width: 100},
			  {x_pos: 1600, width: 100},
			  {x_pos: 1800, width: 100},
			  {x_pos: 1400, width: 100},
			  {x_pos: 1200, width: 100},
			  {x_pos: -1140, width: 100},
			  {x_pos: -1400, width: 100},
			  {x_pos: -1500, width: 100},
			 ];	
	//collectable 
	collectable =[{ x_pos: 200, y_pos: 100, size: 50},
				  { x_pos: 300, y_pos: 100, size: 50},
				  { x_pos: 400, y_pos: 100, size: 50},
				  
				  { x_pos: -200, y_pos: 100, size: 50},
				  { x_pos: -300, y_pos: 100, size: 50},
				  { x_pos: -400, y_pos: 100, size: 50},
				  
				  { x_pos: 800, y_pos: 100, size: 50},
				  { x_pos: 1000, y_pos: 100, size: 50},
				  { x_pos: 1300, y_pos: 100, size: 50},
				  
				  { x_pos: 1200, y_pos: 100, size: 50},
				  { x_pos: 1400, y_pos: 100, size: 50},
				  { x_pos: 1700, y_pos: 100, size: 50},
				  
				  { x_pos: -500, y_pos: 100, size: 50},
				  { x_pos: -800, y_pos: 100, size: 50},
				  { x_pos: -1200, y_pos: 100, size: 50},
				 ];	
}

function draw()
{
	background(100, 155, 255); // fill the sky blue

	noStroke();
	fill(0, 155, 0);
	rect(0, floorPos_y, width, height/4); // draw some green ground
	
	push();
	translate(scrollPos,0);

	// Draw clouds.
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
			 clouds[i].cloudWidth+240,clouds[i].cloudHight+28);}
	// Draw mountains.
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
				 864-mountains[i].moutainX_pos,432+mountains[i].moutainY_pos);}
	// Draw trees.
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
			 20,113);}
	// Draw canyons
	for (var i = 0 ; i < canyon.length; i++){
		fill(100,155,255);
    	rect(canyon[i].x_pos,floorPos_y,
			 canyon[i].width,190);}
	// Draw collectable items
	for (var i = 0 ; i < collectable.length; i++){
	// coin
    //outer ring
    fill(217,158,58);
    ellipse(collectable[i].x_pos,collectable[i].y_pos+293,
            collectable[i].size+20,collectable[i].size+20);
    //inner ring
    fill(240,198,84);
    ellipse(collectable[i].x_pos,collectable[i].y_pos+293,
            collectable[i].size,collectable[i].size);
    //inner rect
    fill(217,158,58);
    rect(collectable[i].x_pos-11,collectable[i].y_pos+278.5,
         collectable[i].size-27.5,collectable[i].size-21);}
	// Draw the game character - this must be last
	pop();
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
	//////// Game character logic ///////
	// Logic to move
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
}

function keyPressed()
{

	if(key == 'A' || keyCode == 37)
	{
		isLeft = true;
	}

	if(key == 'D' || keyCode == 39)
	{
		isRight = true;
	}

}

function keyReleased()
{
	if(key == 'A' || keyCode == 37)
	{
		isLeft = false;
	}

	if(key == 'D' || keyCode == 39)
	{
		isRight = false;
	}
}
