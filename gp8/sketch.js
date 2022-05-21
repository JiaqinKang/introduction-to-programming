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
var game_score;
var fallspeed;
var isContact;

//objects
var trees_x;
var trees_y;
var clouds;
var mountains;
var canyon;
var collectable;
var flagpole;
var platforms;
var lives;
var keys;
var enemies;

function preload(){
	soundFormats('mp3','wav');
	
	//load sound in file
	jumpSound = loadSound('assets/smb_jump-super.wav');
	BGMSound =  loadSound('assets/BGM.mp3');
	walkingSound = loadSound('assets/walking.mp3');
	coinSound = loadSound('assets/coin.mp3');
	gameLoseSound = loadSound('assets/smb_mariodie.wav');
	gameWinSound = loadSound('assets/smb_stage_clear.wav');
	gameStartSound = loadSound('assets/smb_vine.wav');
	gameRespawnSound = loadSound('assets/smb_pipe.wav');
	keyCollectedSound = loadSound('assets/smb_pause.wav');
	
	//volume control
	jumpSound.setVolume(0.1);
	BGMSound.setVolume(0.1);
	walkingSound.setVolume(0.1);
	coinSound.setVolume(0.1);
	gameWinSound.setVolume(0.1);
	gameStartSound.setVolume(0.1);
	gameRespawnSound.setVolume(0.1);
	gameLoseSound.setVolume(0.1);
	keyCollectedSound.setVolume(0.1);
	
	//sound speed rate
	walkingSound.rate(2);
	
	//bgm loop
	BGMSound.loop();

}

function setup()
{
	createCanvas(1024, 576);
	floorPos_y = height * 3/4;
	lives = 4;
	startGame();
	window.confirm("WASD to move and jump,get the key and find the flag!");
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
		if (collectable[i].isFound == false){
			drawCollectable(collectable[i]);
			checkCollectable(collectable[i]);
		}
	}
	
	
	if (!flagpole.isReached){
        checkFlagpole();
    }

    drawFlagpole();
	//draw keys and check
	renderkeys();
	checkkeys();
	
	
	//draw platforms
	for(var i = 0;i < platforms.length;i ++){
		platforms[i].draw();
	}
	//draw enemies
	for (var i = 0; i < enemies.length; i ++){
		enemies[i].update();
		enemies[i].draw();
		if (enemies[i].isContact(gameChar_world_x,
							 gameChar_y)){
			console.log("in pain");
			gameLoseSound.play();
			startGame();
			lives -=1;
			break;
		}
	}

	//scrolling end
	pop();
	
	//lives reset
	if (lives <=0){
        // game over text
        fill (255);
        text("Game over. Press space to continue", width/2-400, height/2);
		return;
    }
	
	// Draw game character.
	drawGameChar();
	
	
	//flagpole is reached and pause game
	if (flagpole.isReached){
        // level complete text
        fill (255);
		textSize(40)
        text("Level complete. Press space to continue.", width/2-350, height/2);
		return;
	}

	// Logic to make the game character move or the background scroll.
	if(isLeft){
		if(gameChar_x > width * 0.2){
			gameChar_x -= 5;
		}
		else{
			scrollPos += 10;
		}
	}
	if(isRight){
		if(gameChar_x < width * 0.8){
			gameChar_x  += 5;
		}
		else{
			scrollPos -= 5; // negative for moving against the background
		}
	}
	

	//gravity	
	if (gameChar_y < floorPos_y){
		isContact = false;
		
		for (var i =0 ; i < platforms.length; i++){
			if (platforms[i].checkContact(gameChar_world_x,
										  gameChar_y)==true){
				isContact = true;
				break;
			}
		
		}
		if (isContact == false)
		{
			gameChar_y +=fallspeed;
			isFalling = true;
		}
		else 
		{
			isFalling = false;
		}
	}	
	if (isPlummeting == true){
        gameChar_y += 15;
    }
	
	// Update real position of gameChar for collision detection.
	gameChar_world_x = gameChar_x - scrollPos;
	
	//game_score
	gameScoreBoard();
	//live score
	liveCount();
	
	//gameresets 
	gameResets();
	

}
// ---------------------
// Key control functions
// ---------------------

function keyPressed(){
	// if statements to control the animation of the character when keys are pressed.
	//game won
	if(flagpole.isReached && keyCode == 32 && keys.keys_isFound == true ){//space
		lives = 4;
		keys.keys_isFound = false;
		startGame();
    }
	//game over
	else if (lives <= 0 && keyCode == 32 && lives <= 1){//space
		gameStartSound.play();
		lives = 4;
		keys.keys_isFound = false;
		startGame();
    }
//stop moving when falling
if(isPlummeting == true && isFalling==true){
	return;
}	
	//keypress
if (keyCode ==65  && lives >=1){//A
	isLeft = true;
	walkingSound.loop();
}
else if (keyCode ==68 && lives >=1){//D
	isRight = true;
	walkingSound.loop();
}
	//jump
else if ((keyCode ==87 && gameChar_y == floorPos_y && lives >=1 )||
		 (keyCode ==87 && isContact == true && lives >=1)
		){//W
	gameChar_y -= 200;
	//play jump sound
	jumpSound.play();
	//stop walking sound
	walkingSound.stop();
	
}
	else {}
}

function keyReleased(){
	// if statements to control the animation of the character when
	// keys are released.
if (keyCode ==65){//A
	isLeft = false;
	walkingSound.stop();
}
else if (keyCode ==68){//D
	isRight = false;
	walkingSound.stop();
}
else if (keyCode ==87){//D
	isFalling = false;
	walkingSound.stop();
}
else{}
}


// ------------------------------
// Game character render function
// ------------------------------

// Function to draw the game character.

function drawGameChar(){
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
				 clouds[i].cloudWidth+240,clouds[i].cloudHight+28);}
}
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
					 864-mountains[i].moutainX_pos,432+mountains[i].moutainY_pos);}
}
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
			 20,113);}
}
// ---------------------------------
// Canyon render and check functions
// ---------------------------------

// Function to draw canyon objects.

function drawCanyon(t_canyon){
		fill(100,155,255);
    	rect(t_canyon.x_pos,floorPos_y,
			 t_canyon.width,190);
}

// Function to check character is over a canyon.

function checkCanyon(t_canyon){
	//isplummeting	
	//((canyon.x_pos+canyon.width)-10) make sure char whole body is in canyon
	if (gameChar_world_x > t_canyon.x_pos&&
		(gameChar_world_x) < ((t_canyon.x_pos+t_canyon.width)-10)&&
		gameChar_y >= floorPos_y)
	{
		isPlummeting = true;
	}
}

// ----------------------------------
// Collectable items render and check functions
// ----------------------------------

// Function to draw collectable objects.

function drawCollectable(t_collectable){
	//coin spawn
		fill(217,158,58);
		ellipse(t_collectable.x_pos,t_collectable.y_pos,
				t_collectable.size+20,t_collectable.size+20);
		//inner ring
		fill(240,198,84);
		ellipse(t_collectable.x_pos,t_collectable.y_pos,
				t_collectable.size,t_collectable.size);
		//inner rect
		fill(217,158,58);
		rect(t_collectable.x_pos-11,t_collectable.y_pos-15,
			 t_collectable.size-27.5,t_collectable.size-21);
}

// Function to check character has collected an item.

function checkCollectable(t_collectable){		
	var distCharCollectable = dist(gameChar_world_x,
								   gameChar_y,
								   t_collectable.x_pos,
								   t_collectable.y_pos);
	if ((distCharCollectable-30)  < 30){
		t_collectable.isFound = true;
		//add score
		game_score ++;
		//play coin sound
		coinSound.play();
		}
}

function renderkeys(){
	if (keys.keys_Xpos != width){
		if (keys.keys_isFound == false ){
			fill (255);
			triangle((keys.keys_Xpos)+=1,
			keys.keys_Ypos,
			(keys.keys_Xpos)+=1,
			keys.keys_Ypos-50,
			(keys.keys_Xpos)+=1,
			keys.keys_Ypos);
		}
		//once key reach width key y set to unreachable 
		if (keys.keys_Xpos == width){
			keys.keys_Ypos = -10000;
		}
	}
}

function checkkeys(){
	var distkey = dist(gameChar_world_x,
					   gameChar_y,
					   keys.keys_Xpos,
					   keys.keys_Ypos);
	if ((distkey-30) <=30){
		keys.keys_isFound = true;
		//play coin sound
		keyCollectedSound.play();
		keys.keys_Ypos = -1000;
		}
}

function liveCount(){
	textSize (48);
    for (var i = 0; i < 4; i++){
        if (i >= lives){
            text("", 10, 80 + 50 * i)
        }
        else{
            text("💩", 10, 80 + 50 * i)
        }
    }
}

function gameScoreBoard(){
	textSize(32);
	text("Coins: " + game_score,10,30);
}	

function checkFlagpole(){
    if (gameChar_world_x > flagpole.x_pos && 
		keys.keys_isFound == true && 
		game_score >= 25){
		flagpole.isReached = true;
		gameWinSound.play();
}
	else if (gameChar_world_x > flagpole.x_pos && keys.keys_isFound ==false){
		fill(255);
		textSize(43);
		text("You didn't have the key,You should Kill Yourself",gameChar_world_x-450,gameChar_y-100);
		}
	else if (gameChar_world_x > flagpole.x_pos && game_score <10){
		fill(255);
		textSize(43);
		text("You didn't collect all the coins,You should Kill Yourself",gameChar_world_x-450,gameChar_y-200);
		}
	}

function drawFlagpole(){
    fill (215);
    rect(flagpole.x_pos, floorPos_y, 10, -300);
    fill ("red");
    if (flagpole.isReached){
        // flag up
        rect(flagpole.x_pos, floorPos_y - 300, 140, 60, 0, 10, 10, 0);
    }
    else{
        // flag down
        rect(flagpole.x_pos, floorPos_y-60, 140, 60, 0, 10, 10, 0);
    }
}

function startGame(){
	gameChar_x = 50;
	gameChar_y = floorPos_y;
	game_score = 0;
	isContact = false;
	
	flagpole = {
        x_pos: 5000,
        isReached: false,
    }

	// Variable to control the background scrolling.
	scrollPos = 0;

	// Variable to store the real position of the gameChar in the game
	// world. Needed for collision detection.
	gameChar_world_x = gameChar_x - scrollPos;

	//tree offsets -145 to offset to ground
	trees_y = floorPos_y-145;
	
	// Boolean variables to control the movement of the game character.
	isLeft = false;
	isRight = false;
	isFalling = false;
	isPlummeting = false;
	fallspeed = 5;

	// Initialise arrays of scenery objects.
	//trees
	trees_x =  [random(0,5000),random(0,5000),random(0,5000),
				random(0,5000),random(0,5000),random(0,5000),
				random(0,5000),random(0,5000),random(0,5000),
				random(0,5000),random(0,5000),random(0,5000),
				random(0,5000),random(0,5000),random(0,5000),
				random(0,5000),random(0,5000),random(0,5000),
				random(0,5000),random(0,5000),random(0,5000),
				random(0,5000),random(0,5000),random(0,5000),
				random(0,5000),random(0,5000),random(0,5000),
				random(0,5000),random(0,5000),random(0,5000),
				random(0,5000),random(0,5000),random(0,5000),
				random(0,5000),random(0,5000),random(0,5000),
				random(0,5000),random(0,5000),random(0,5000),
				random(0,5000),random(0,5000),random(0,5000),
				random(0,5000),random(0,5000),random(0,5000),
				random(0,5000),random(0,5000),random(0,5000),
				random(0,5000),random(0,5000),random(0,5000),
				random(0,5000),random(0,5000),random(0,5000),
				random(0,5000),random(0,5000),random(0,5000),
	];
	
	//cloud 
	clouds= [{cloudX_pos:random(0,5000),
			  cloudY_pos:25,
			  cloudWidth:random(5,10),
			  cloudHight:random(0,5)},
			{cloudX_pos:random(0,5000),
			  cloudY_pos:25,
			  cloudWidth:random(5,10),
			  cloudHight:random(0,5)},
			{cloudX_pos:random(0,5000),
			  cloudY_pos:25,
			  cloudWidth:random(5,10),
			  cloudHight:random(0,5)},
			{cloudX_pos:random(0,5000),
			  cloudY_pos:25,
			  cloudWidth:random(5,10),
			  cloudHight:random(0,5)},
			{cloudX_pos:random(0,5000),
			  cloudY_pos:25,
			  cloudWidth:random(5,10),
			  cloudHight:random(0,5)},
			{cloudX_pos:random(0,5000),
			  cloudY_pos:25,
			  cloudWidth:random(5,10),
			  cloudHight:random(0,5)},
			{cloudX_pos:random(0,5000),
			  cloudY_pos:25,
			  cloudWidth:random(5,10),
			  cloudHight:random(0,5)},
			{cloudX_pos:random(0,5000),
			  cloudY_pos:25,
			  cloudWidth:random(5,10),
			  cloudHight:random(0,5)},
			{cloudX_pos:random(0,5000),
			  cloudY_pos:25,
			  cloudWidth:random(5,10),
			  cloudHight:random(0,5)},
			{cloudX_pos:random(0,5000),
			  cloudY_pos:25,
			  cloudWidth:random(5,10),
			  cloudHight:random(0,5)},
			{cloudX_pos:random(0,5000),
			  cloudY_pos:25,
			  cloudWidth:random(5,10),
			  cloudHight:random(0,5)},
			{cloudX_pos:random(0,5000),
			  cloudY_pos:25,
			  cloudWidth:random(5,10),
			  cloudHight:random(0,5)},
			{cloudX_pos:random(0,5000),
			  cloudY_pos:25,
			  cloudWidth:random(5,10),
			  cloudHight:random(0,5)},
			{cloudX_pos:random(0,5000),
			  cloudY_pos:25,
			  cloudWidth:random(5,10),
			  cloudHight:random(0,5)},
			{cloudX_pos:random(0,5000),
			  cloudY_pos:25,
			  cloudWidth:random(5,10),
			  cloudHight:random(0,5)},
			{cloudX_pos:random(0,5000),
			  cloudY_pos:25,
			  cloudWidth:random(5,10),
			  cloudHight:random(0,5)},
			{cloudX_pos:random(0,5000),
			  cloudY_pos:25,
			  cloudWidth:random(5,10),
			  cloudHight:random(0,5)},
			{cloudX_pos:random(0,5000),
			  cloudY_pos:25,
			  cloudWidth:random(5,10),
			  cloudHight:random(0,5)},
			{cloudX_pos:random(0,5000),
			  cloudY_pos:25,
			  cloudWidth:random(5,10),
			  cloudHight:random(0,5)},
			{cloudX_pos:random(0,5000),
			  cloudY_pos:25,
			  cloudWidth:random(5,10),
			  cloudHight:random(0,5)},
			{cloudX_pos:random(0,5000),
			  cloudY_pos:25,
			  cloudWidth:random(5,10),
			  cloudHight:random(0,5)},
			{cloudX_pos:random(0,5000),
			  cloudY_pos:25,
			  cloudWidth:random(5,10),
			  cloudHight:random(0,5)},
			{cloudX_pos:random(0,5000),
			  cloudY_pos:25,
			  cloudWidth:random(5,10),
			  cloudHight:random(0,5)},
			{cloudX_pos:random(0,5000),
			  cloudY_pos:25,
			  cloudWidth:random(5,10),
			  cloudHight:random(0,5)},
			{cloudX_pos:random(0,5000),
			  cloudY_pos:25,
			  cloudWidth:random(5,10),
			  cloudHight:random(0,5)},
			{cloudX_pos:random(0,5000),
			  cloudY_pos:25,
			  cloudWidth:random(5,10),
			  cloudHight:random(0,5)},
			{cloudX_pos:random(0,5000),
			  cloudY_pos:25,
			  cloudWidth:random(5,10),
			  cloudHight:random(0,5)},
			{cloudX_pos:random(0,5000),
			  cloudY_pos:25,
			  cloudWidth:random(5,10),
			  cloudHight:random(0,5)},
			{cloudX_pos:random(0,5000),
			  cloudY_pos:25,
			  cloudWidth:random(5,10),
			  cloudHight:random(0,5)},
			{cloudX_pos:random(0,5000),
			  cloudY_pos:25,
			  cloudWidth:random(5,10),
			  cloudHight:random(0,5)},
			{cloudX_pos:random(0,5000),
			  cloudY_pos:25,
			  cloudWidth:random(5,10),
			  cloudHight:random(0,5)},
			{cloudX_pos:random(0,5000),
			  cloudY_pos:25,
			  cloudWidth:random(5,10),
			  cloudHight:random(0,5)},
			{cloudX_pos:random(0,5000),
			  cloudY_pos:25,
			  cloudWidth:random(5,10),
			  cloudHight:random(0,5)},
			{cloudX_pos:random(0,5000),
			  cloudY_pos:25,
			  cloudWidth:random(5,10),
			  cloudHight:random(0,5)},
			{cloudX_pos:random(0,5000),
			  cloudY_pos:25,
			  cloudWidth:random(5,10),
			  cloudHight:random(0,5)},
			{cloudX_pos:random(0,5000),
			  cloudY_pos:25,
			  cloudWidth:random(5,10),
			  cloudHight:random(0,5)},
			{cloudX_pos:random(0,5000),
			  cloudY_pos:25,
			  cloudWidth:random(5,10),
			  cloudHight:random(0,5)},
			{cloudX_pos:random(0,5000),
			  cloudY_pos:25,
			  cloudWidth:random(5,10),
			  cloudHight:random(0,5)},
			{cloudX_pos:random(0,5000),
			  cloudY_pos:25,
			  cloudWidth:random(5,10),
			  cloudHight:random(0,5)},
			{cloudX_pos:random(0,5000),
			  cloudY_pos:25,
			  cloudWidth:random(5,10),
			  cloudHight:random(0,5)},
			{cloudX_pos:random(0,5000),
			  cloudY_pos:25,
			  cloudWidth:random(5,10),
			  cloudHight:random(0,5)},
			{cloudX_pos:random(0,5000),
			  cloudY_pos:25,
			  cloudWidth:random(5,10),
			  cloudHight:random(0,5)},
			{cloudX_pos:random(0,5000),
			  cloudY_pos:25,
			  cloudWidth:random(5,10),
			  cloudHight:random(0,5)},
			{cloudX_pos:random(0,5000),
			  cloudY_pos:25,
			  cloudWidth:random(5,10),
			  cloudHight:random(0,5)},
			{cloudX_pos:random(0,5000),
			  cloudY_pos:25,
			  cloudWidth:random(5,10),
			  cloudHight:random(0,5)},
			];
	
	//mountains	
	mountains =[{moutainX_pos:random(0,5000),
				 moutainY_pos:0},
				{moutainX_pos:random(0,5000),
				 moutainY_pos:0},
				{moutainX_pos:random(0,5000),
				 moutainY_pos:0},
				{moutainX_pos:random(0,5000),
				 moutainY_pos:0},
				{moutainX_pos:random(0,5000),
				 moutainY_pos:0},
				{moutainX_pos:random(0,5000),
				 moutainY_pos:0},
				{moutainX_pos:random(0,5000),
				 moutainY_pos:0},
				{moutainX_pos:random(0,5000),
				 moutainY_pos:0},
				{moutainX_pos:random(0,5000),
				 moutainY_pos:0},
				{moutainX_pos:random(0,5000),
				 moutainY_pos:0},
				{moutainX_pos:random(0,5000),
				 moutainY_pos:0},
				{moutainX_pos:random(0,5000),
				 moutainY_pos:0},
				{moutainX_pos:random(0,5000),
				 moutainY_pos:0},
				{moutainX_pos:random(0,5000),
				 moutainY_pos:0},
				{moutainX_pos:random(0,5000),
				 moutainY_pos:0},
				{moutainX_pos:random(0,5000),
				 moutainY_pos:0},
				{moutainX_pos:random(0,5000),
				 moutainY_pos:0},
				{moutainX_pos:random(0,5000),
				 moutainY_pos:0},
				{moutainX_pos:random(0,5000),
				 moutainY_pos:0},
				{moutainX_pos:random(0,5000),
				 moutainY_pos:0},
				{moutainX_pos:random(0,5000),
				 moutainY_pos:0},
				{moutainX_pos:random(0,5000),
				 moutainY_pos:0},
				{moutainX_pos:random(0,5000),
				 moutainY_pos:0},
				{moutainX_pos:random(0,5000),
				 moutainY_pos:0},
				{moutainX_pos:random(0,5000),
				 moutainY_pos:0},
				{moutainX_pos:random(0,5000),
				 moutainY_pos:0},
				{moutainX_pos:random(0,5000),
				 moutainY_pos:0},
				{moutainX_pos:random(0,5000),
				 moutainY_pos:0},
				{moutainX_pos:random(0,5000),
				 moutainY_pos:0},
				{moutainX_pos:random(0,5000),
				 moutainY_pos:0},
				{moutainX_pos:random(0,5000),
				 moutainY_pos:0},
				{moutainX_pos:random(0,5000),
				 moutainY_pos:0},
				{moutainX_pos:random(0,5000),
				 moutainY_pos:0},
				{moutainX_pos:random(0,5000),
				 moutainY_pos:0},
				{moutainX_pos:random(0,5000),
				 moutainY_pos:0},
				{moutainX_pos:random(0,5000),
				 moutainY_pos:0},
				{moutainX_pos:random(0,5000),
				 moutainY_pos:0},
				{moutainX_pos:random(0,5000),
				 moutainY_pos:0},
				{moutainX_pos:random(0,5000),
				 moutainY_pos:0},
				{moutainX_pos:random(0,5000),
				 moutainY_pos:0},
				{moutainX_pos:random(0,5000),
				 moutainY_pos:0},
				{moutainX_pos:random(0,5000),
				 moutainY_pos:0},
				{moutainX_pos:random(0,5000),
				 moutainY_pos:0},
				{moutainX_pos:random(0,5000),
				 moutainY_pos:0},
				{moutainX_pos:random(0,5000),
				 moutainY_pos:0},
				{moutainX_pos:random(0,5000),
				 moutainY_pos:0},
				{moutainX_pos:random(0,5000),
				 moutainY_pos:0},
				{moutainX_pos:random(0,5000),
				 moutainY_pos:0},
				{moutainX_pos:random(0,5000),
				 moutainY_pos:0},
				{moutainX_pos:random(0,5000),
				 moutainY_pos:0},
				{moutainX_pos:random(0,5000),
				 moutainY_pos:0},
				{moutainX_pos:random(0,5000),
				 moutainY_pos:0},
				{moutainX_pos:random(0,5000),
				 moutainY_pos:0},
				{moutainX_pos:random(0,5000),
				 moutainY_pos:0},
				{moutainX_pos:random(0,5000),
				 moutainY_pos:0},
				{moutainX_pos:random(0,5000),
				 moutainY_pos:0},
				{moutainX_pos:random(0,5000),
				 moutainY_pos:0},
				{moutainX_pos:random(0,5000),
				 moutainY_pos:0},
				{moutainX_pos:random(0,5000),
				 moutainY_pos:0},
				{moutainX_pos:random(0,5000),
				 moutainY_pos:0},
				{moutainX_pos:random(0,5000),
				 moutainY_pos:0},
				{moutainX_pos:random(0,5000),
				 moutainY_pos:0},
				{moutainX_pos:random(0,5000),
				 moutainY_pos:0},
				{moutainX_pos:random(0,5000),
				 moutainY_pos:0},
				{moutainX_pos:random(0,5000),
				 moutainY_pos:0},
				{moutainX_pos:random(0,5000),
				 moutainY_pos:0},
				{moutainX_pos:random(0,5000),
				 moutainY_pos:0},
				{moutainX_pos:random(0,5000),
				 moutainY_pos:0},
				{moutainX_pos:random(0,5000),
				 moutainY_pos:0},
				{moutainX_pos:random(0,5000),
				 moutainY_pos:0},
				{moutainX_pos:random(0,5000),
				 moutainY_pos:0},
				{moutainX_pos:random(0,5000),
				 moutainY_pos:0},
				{moutainX_pos:random(0,5000),
				 moutainY_pos:0},
				{moutainX_pos:random(0,5000),
				 moutainY_pos:0},
				{moutainX_pos:random(0,5000),
				 moutainY_pos:0},
				{moutainX_pos:random(0,5000),
				 moutainY_pos:0},
				{moutainX_pos:random(0,5000),
				 moutainY_pos:0},
				{moutainX_pos:random(0,5000),
				 moutainY_pos:0},
				{moutainX_pos:random(0,5000),
				 moutainY_pos:0},
				{moutainX_pos:random(0,5000),
				 moutainY_pos:0},
				{moutainX_pos:random(0,5000),
				 moutainY_pos:0},
				{moutainX_pos:random(0,5000),
				 moutainY_pos:0},
				{moutainX_pos:random(0,5000),
				 moutainY_pos:0},
				{moutainX_pos:random(0,5000),
				 moutainY_pos:0},
				{moutainX_pos:random(0,5000),
				 moutainY_pos:0},
				{moutainX_pos:random(0,5000),
				 moutainY_pos:0},
				{moutainX_pos:random(0,5000),
				 moutainY_pos:0},
				{moutainX_pos:random(0,5000),
				 moutainY_pos:0},
				{moutainX_pos:random(0,5000),
				 moutainY_pos:0},
				{moutainX_pos:random(0,5000),
				 moutainY_pos:0},
				{moutainX_pos:random(0,5000),
				 moutainY_pos:0},
				{moutainX_pos:random(0,5000),
				 moutainY_pos:0},
				{moutainX_pos:random(0,5000),
				 moutainY_pos:0},
				{moutainX_pos:random(0,5000),
				 moutainY_pos:0},
				{moutainX_pos:random(0,5000),
				 moutainY_pos:0},
				{moutainX_pos:random(0,5000),
				 moutainY_pos:0},
				{moutainX_pos:random(0,5000),
				 moutainY_pos:0},
				{moutainX_pos:random(0,5000),
				 moutainY_pos:0},
				{moutainX_pos:random(0,5000),
				 moutainY_pos:0},
				{moutainX_pos:random(0,5000),
				 moutainY_pos:0},
				{moutainX_pos:random(0,5000),
				 moutainY_pos:0},
				{moutainX_pos:random(0,5000),
				 moutainY_pos:0},
				{moutainX_pos:random(0,5000),
				 moutainY_pos:0},
				{moutainX_pos:random(0,5000),
				 moutainY_pos:0},
				{moutainX_pos:random(0,5000),
				 moutainY_pos:0},
				{moutainX_pos:random(0,5000),
				 moutainY_pos:0},
			   ]
				
	//canyon
	canyon = [
		{x_pos: -1000, width: 1000},
		{x_pos: 300, width: 100},
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
			 ];
	
	//collectable 
	collectable =[
		{ x_pos: 150, y_pos: 395, size: 50,isFound:false},
		{ x_pos: 250, y_pos: 395, size: 50, isFound:false},
		{ x_pos: 350, y_pos: 250, size: 50, isFound:false},
		{ x_pos: 450, y_pos: 395, size: 50, isFound:false},
		{ x_pos: 550, y_pos: 395, size: 50, isFound:false},
		{ x_pos: 650, y_pos: 395, size: 50, isFound:false},
		{ x_pos: 750, y_pos: 250, size: 50, isFound:false},
		{ x_pos: 850, y_pos: 395, size: 50, isFound:false},
		{ x_pos: 950, y_pos: 250, size: 50, isFound:false}, 
		{ x_pos: 1300, y_pos: 250, size: 50, isFound:false}, 
		{ x_pos: 1400, y_pos: 250, size: 50, isFound:false},
		{ x_pos: 1500, y_pos: 250, size: 50, isFound:false}, 
		{ x_pos: 1600, y_pos: 250, size: 50, isFound:false}, 
		{ x_pos: 1700, y_pos: 250, size: 50, isFound:false}, 
		{ x_pos: 1800, y_pos: 250, size: 50, isFound:false}, 
		{ x_pos: 1900, y_pos: 395, size: 50, isFound:false}, 
		{ x_pos: 2400, y_pos: 395, size: 50, isFound:false},
		{ x_pos: 2500, y_pos: 395, size: 50, isFound:false}, 
		{ x_pos: 2600, y_pos: 250, size: 50, isFound:false}, 
		{ x_pos: 2700, y_pos: 250, size: 50, isFound:false}, 
		{ x_pos: 2800, y_pos: 250, size: 50, isFound:false}, 
		{ x_pos: 2900, y_pos: 395, size: 50, isFound:false}, 
		{ x_pos: 3100, y_pos: 395, size: 50, isFound:false}, 
		{ x_pos: 3375, y_pos: 395, size: 50, isFound:false},
		{ x_pos: 3550, y_pos: 395, size: 50, isFound:false}, 
		{ x_pos: 3700, y_pos: 395, size: 50, isFound:false},
		{ x_pos: 3800, y_pos: 395, size: 50, isFound:false},
		{ x_pos: 3900, y_pos: 395, size: 50, isFound:false},
		{ x_pos: 4000, y_pos: 395, size: 50, isFound:false},
		{ x_pos: 4100, y_pos: 395, size: 50, isFound:false},
		{ x_pos: 4200, y_pos: 395, size: 50, isFound:false},
		{ x_pos: 4300, y_pos: 395, size: 50, isFound:false},
		{ x_pos: 4400, y_pos: 395, size: 50, isFound:false},
		{ x_pos: 4500, y_pos: 395, size: 50, isFound:false},
		{ x_pos: 4600, y_pos: 395, size: 50, isFound:false},
		{ x_pos: 4700, y_pos: 395, size: 50, isFound:false},
		{ x_pos: 4800, y_pos: 395, size: 50, isFound:false},
		{ x_pos: 4900, y_pos: 395, size: 50, isFound:false},
				 ];
	
	//keys
	keys ={
		keys_Xpos:250,keys_Ypos:floorPos_y,keys_isFound:false};
	//enemies
	enemies=[]; 
	
	enemies.push(new Enemy(4800,floorPos_y-10,100));
	//platforms
	platforms=[];
	
	platforms.push(createPlatform(4800,floorPos_y-150,100));
}

function gameResets(){
	if (gameChar_y >= height+100 && lives >= 2){
		gameRespawnSound.play();
		startGame();
		lives -=1;
    }
	if (gameChar_y >= height+100 && lives <= 1){
		gameLoseSound.play();
		startGame();
		lives -=1;
    }
	else{}
}

function createPlatform(x,y,length){
	var p = {
		x:x,
		y:y,
		length:length,
		draw:function(){
			fill(255,255,0);
			stroke(0);
			rect(this.x,this.y,this.length,20);
		},
		checkContact: function (gc_x,gc_y){
			//check whether game char is incontact with the platform
			if (gc_x > this.x && gc_x< this.x + this.length){
				var d = this.y-gc_y;
				if (d >=0 && d < 5){
					console.log("in bounce");
					return true;
				}
			}
			return false;
		}
	}
	return p;
	
}

function Enemy(x,y,range)
{
	this.x = x;
	this.y = y;
	this.range = range;
	this.current_x = x;
	this.incr = 1;
	
	this.draw = function(){
		fill(0);
		ellipse(this.current_x,this.y - 25, 50);
		stroke(255);
		strokeWeight(2);
		
		line(this.current_x - 15,
			 this.y -35,
			 this.current_x - 5,
			 this.y -30,);
		
		line(this.current_x + 15,
			 this.y -35,
			 this.current_x + 5,
			 this.y -30,);
		fill(255);
		ellipse(this.current_x - 5, this.y -25,5);
		ellipse(this.current_x + 5, this.y -25,5);
	};

	this.update = function ()
	{
		this.current_x += this.incr;
		if (this.current_x <= this.x){
			this.incr =1;

		}
		else if (this.current_x > this.x + this.range){
			this.incr= -1;
		}
	};
	
	this.isContact = function(gc_x,gc_y){
		//return true if contact is made
		var d = dist(gc_x, gc_y,this.current_x, this.y);
		if (d< 25){
			return true;
		}
		
		return false;
		
	}
	
	
		
}