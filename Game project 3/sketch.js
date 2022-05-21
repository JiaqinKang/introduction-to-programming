/*

The Game Project

3 - using variables

*/

var floorPos_y;

var gameChar_x;
var gameChar_y;

var treePos_x;
var treePos_y;

var canyon;
var collectable;

var mountain;
var cloud;


function setup()
{
	createCanvas(1024, 576);
	floorPos_y = 432; //NB. we are now using a variable for the floor position
    

	//NB. We are now using the built in variables height and width
	gameChar_x = width/2;
	gameChar_y = floorPos_y;
    
    canyon = {x_pos: 100, width: 100};

	treePos_x = width/2;
	treePos_y = height/2;
    mountain ={moutainX_pos:300,
               moutainY_pos:0};
    
    cloud={cloudX_pos:0,
           cloudY_pos:0,
           cloudWidth:0,
           cloudHight:0};
    
    
    collectable ={x_pos: 100, y_pos: 100, size: 50}
}

function draw()
{
	background(100, 155, 255); //fill the sky blue

	noStroke();
	fill(0, 155, 0);
	rect(0, floorPos_y, height, width - floorPos_y); //draw some green ground
    
//1. cloud
    fill(255,255,255);
    ellipse(cloud.cloudX_pos+213,cloud.cloudY_pos+94,
            cloud.cloudWidth+110,cloud.cloudHight+110);
    
    ellipse(cloud.cloudX_pos+172,cloud.cloudY_pos+120,
            cloud.cloudWidth+90,cloud.cloudHight+90);
    
    ellipse(cloud.cloudX_pos+276,cloud.cloudY_pos+80,
            cloud.cloudWidth+130,cloud.cloudHight+130);
    
    ellipse(cloud.cloudX_pos+309,cloud.cloudY_pos+110,
            cloud.cloudWidth+110,cloud.cloudHight+110);
    
    fill(100,155,255);
    rect(cloud.cloudX_pos+125,cloud.cloudY_pos+138,
         cloud.cloudWidth+240,cloud.cloudHight+28);
    
//2. mountain
    fill(101,67,33);
    triangle(520-mountain.moutainX_pos,180+mountain.moutainY_pos,
             386-mountain.moutainX_pos,432+mountain.moutainY_pos,
             664-mountain.moutainX_pos,432+mountain.moutainY_pos);
    
    
    //moutain 2
    fill(101,67,40);
    triangle(640-mountain.moutainX_pos,102+mountain.moutainY_pos,
             486-mountain.moutainX_pos,432+mountain.moutainY_pos,
             764-mountain.moutainX_pos,432+mountain.moutainY_pos);
    
    //mountain 3
    fill(101,70,40);
    triangle(762-mountain.moutainX_pos,140+mountain.moutainY_pos,
             586-mountain.moutainX_pos,432+mountain.moutainY_pos,
             864-mountain.moutainX_pos,432+mountain.moutainY_pos);
    
//3. tree
    //800treePos_x
    //triangle 1.1
    //286Y
    fill(0,145,0);
    triangle(treePos_x,treePos_y-116,
             treePos_x-100,treePos_y-11,
             treePos_x+30,treePos_y-11);
    //1.2
    fill(0,104,0);
    triangle(treePos_x,treePos_y-116,
             treePos_x+30,treePos_y-11,
             treePos_x+100,treePos_y-11);
    
    //triangle 2.1
    fill(0,145,0);
    triangle(treePos_x+17.5,treePos_y-57,
             treePos_x-100,treePos_y+2,
             treePos_x+35,treePos_y+2);
    
//    //2.2
    fill(0,104,0);
    triangle(treePos_x+17.5,treePos_y-57,
             treePos_x+35,treePos_y+2,
             treePos_x+100,treePos_y+2);
//    
    //triangle 3.1
    fill(0,145,0);
    triangle(treePos_x+25,treePos_y-32,
             treePos_x-130,treePos_y+32,
             treePos_x+47.5,treePos_y+32);
    //3.2
    fill(0,104,0);
    triangle(treePos_x+25,treePos_y-32,
             treePos_x+47.5,treePos_y+32,
             treePos_x+110,treePos_y+32);
    
    //wood
    fill(128,77,0);
    rect(treePos_x-33,treePos_y+32,
         30,113);
    //wood 2
    fill(97,58,0);
    rect(treePos_x-6,treePos_y+32,
         20,113);

    
//4. canyon
    
    fill(100,155,255);
    rect(canyon.x_pos-90,431,
         canyon.width-30,190);
    
//5. coin
    //outer ring
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
    
//6. front character    
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


function mousePressed()
{
    gameChar_x=mouseX;
    gameChar_y=mouseY;

}
