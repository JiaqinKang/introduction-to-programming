/*

The Game Project - 5

Game interaction

*/


var gameChar_x;
var gameChar_y;
var floorPos_y;

var isLeft;
var isRight;
var isFalling;//
var isPlummeting;
var gravity;
//max jump dis
var jumpAmount;

var canyon;
var collectable;
var collectableOffsets;
var gameCharOffsets;

function setup()
{
	createCanvas(1024, 576);
	floorPos_y = height * 3/4;
	gameChar_x = width/2;
	gameChar_y = floorPos_y;
	isLeft = false;
	isRight = false;
	isFalling = false;
	isPlummeting = false;
    canyon = {x_pos: 100, width: 100};
	gravity =1;
	jumpAmount = 1;
	collectable ={x_pos: 100, y_pos: 100, 
				  size: 50,isFound: false}
}

function draw()
{

	///////////DRAWING CODE//////////

	background(100,155,255); //fill the sky blue


	noStroke();
	fill(0,155,0);
	rect(0, floorPos_y, width, height - floorPos_y); //draw some green ground
//  canyon
    fill(100,155,255);
    rect(canyon.x_pos,431,
         canyon.width,190);	
	
//  coin
//offsets
	collectableOffsets ={collectableOffsetsX:collectable.x_pos+337,
						 collectableOffsetsY:collectable.y_pos+293}
	gameCharOffsets = {gameCharOffsetsX:gameChar_x+10,
					   gameCharOffsetsY:gameChar_y-50}
//coin compare dist to appear and dissapear
	var distCharCollectable = dist(gameCharOffsets.gameCharOffsetsX,
								   gameCharOffsets.gameCharOffsetsY,
								   collectableOffsets.collectableOffsetsX,
								   collectableOffsets.collectableOffsetsY);
//coin dissapear
if (distCharCollectable  <60){
	collectable.isFound = true;
}
//coin spawn
if (collectable.isFound ==false){
		fill(217,158,58);
		ellipse(collectable.x_pos+337,collectable.x_pos+293,
				collectable.size+20,collectable.size+20);
		//inner ring
		fill(240,198,84);
		ellipse(collectable.x_pos+337,collectable.x_pos+293,
				collectable.size,collectable.size);
		//inner rect
		fill(217,158,58);
		rect(collectable.x_pos+326,collectable.x_pos+278.5,
			 collectable.size-27.5,collectable.size-21);
}
	//the game character
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

	///////////INTERACTION CODE//////////
	//Put conditional statements to move the game character below here
	
//jump amount
gameChar_y -= jumpAmount;
//makes falling
jumpAmount -= 1;
	
	
//left
if (isLeft){
	gameChar_x -=5;
}
//right
if (isRight){
	gameChar_x +=5;
}
//gravity	
if (gameChar_y < floorPos_y){
	gameChar_y += gravity;
	isFalling = true;
}


else if (isPlummeting ==false) {
	isFalling =  false;
	gameChar_y = floorPos_y;
}
//isplummenting	
	//((canyon.x_pos+canyon.width)-10) make sure char whole body is in canyon
if (gameChar_x > canyon.x_pos && 
	(gameChar_x) < ((canyon.x_pos+canyon.width)-10)&&
   gameChar_y == floorPos_y){
	isPlummeting = true;
}

if (isPlummeting == true){
	gameChar_y +=5;
}
	
	
	
	
}












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