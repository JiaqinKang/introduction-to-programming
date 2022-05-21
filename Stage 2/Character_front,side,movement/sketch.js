/*

The Game Project

2 - Game character

Use p5 drawing functions such as rect, ellipse, line, triangle and
point to draw the different states of your game character.

Write the code so that your character appears inside the box for each
state.

IMPORTANT: For each box the variables gameChar_x & gameChar_y are set to the bottom
center of the box. You must combine these variables with arithmetic to
determine the position of each shape that you draw. This will later allow
you to adjust the position of your game character.

Each state is worth two marks:

//standing front facing = 2
//jumping facing forwards = 2
//walking left = 2
//walking right = 2
//jumping left and jumping right = 2

0 marks = not a reasonable attempt
1 mark = attempted but it lacks detail and you didn't use gameChar_x and gameChar_y correctly
2 marks = you've used a selction of shape functions and made consistent use of gameChar_x and gameChar_y

WARNING: Do not get too carried away. If you're character takes more than 5 lines
of code to draw then you've probably over done it.

** Only submit your sketch.js **

*/

var gameChar_x = 0;
var gameChar_y = 0;

function setup()
{
	createCanvas(400, 600);
}

function draw()
{
	background(255);

	//Standing, facing frontwards

	stroke(100);
	noFill();
	rect(20, 60, 50, 80);
	noStroke();
	fill(0);
	text("1. standing front facing", 20, 160);

	gameChar_x = 45;
	gameChar_y = 137;
	//Add your code here ...
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
    
//___________________________________________________________
	//Jumping facing forwards
	stroke(100);
	noFill();
	rect(220, 60, 50, 80);
	noStroke();
	fill(0);
	text("2. jumping facing forwards", 220, 160);

	gameChar_x = 245;
	gameChar_y = 137;
	//Add your code here ...
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

//___________________________________________________________
	//Walking, turned left
	stroke(100);
	noFill();
	rect(20, 260, 50, 80);
	noStroke();
	fill(0);
	text("3. Walking left", 20, 360);

	gameChar_x = 45;
	gameChar_y = 337;
	//Add your code here ...
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
    
//___________________________________________________________
	//Walking, turned right
	stroke(100);
	noFill();
	rect(220, 260, 50, 80);
	noStroke();
	fill(0);
	text("4. Walking right", 220, 360);

	gameChar_x = 245;
	gameChar_y = 337;
	//Add your code here ...
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
    
//        //right hand
//    stroke(255,212,180);
//    strokeWeight(6);
//    line(gameChar_x+9,
//         gameChar_y-33,
//         gameChar_x+15.5,
//         gameChar_y-20);
//    noStroke();
    
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
    
//        //left hand
//    stroke(255,212,180);
//    strokeWeight(6);
//    line(gameChar_x-15.5,
//         gameChar_y-33,
//         gameChar_x-9,
//         gameChar_y-20);
//    noStroke();
    
    
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
    
//        stroke(220,237,193);
//    strokeWeight(11);
//    line(gameChar_x-6,
//         gameChar_y-13,
//         gameChar_x-9,
//         gameChar_y-12);
//    noStroke();
    
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
    
//    fill(0);
//    arc(gameChar_x-10,
//        gameChar_y-6.5,    
//        11,11,
//        PI,TWO_PI);
//        noStroke();
    
    //shoe right
    fill(0);
    arc(gameChar_x+10,
        gameChar_y-6.5,
        11,11,
        PI,TWO_PI);
        noStroke();

//___________________________________________________________
	//Jumping right
	stroke(100);
	noFill();
	rect(20, 460, 50, 80);
	noStroke();
	fill(0);
	text("5. Jumping to the right", 20, 560);

	gameChar_x = 45;
	gameChar_y = 537;
	//Add your code here ...
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
    
//___________________________________________________________
	//Jumping to the left
	stroke(100);
	noFill();
	rect(220, 460, 50, 80);
	noStroke();
	fill(0);
	text("6. Jumping to the left", 220, 560);

	gameChar_x = 245;
	gameChar_y = 537;
	//Add your code here ...
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
    
//___________________________________________________________

}
