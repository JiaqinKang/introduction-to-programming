/*

The Game Project

1 - Background Scenery

Use p5 drawing functions such as rect, ellipse, line, triangle and
point to draw the scenery as set out in the code comments. The items
should appear next to the text titles.

Each bit of scenery is worth two marks:

0 marks = not a reasonable attempt
1 mark = attempted but it's messy or lacks detail
2 marks = you've used several shape functions to create the scenery

I've given titles and chosen some base colours, but feel free to
imaginatively modify these and interpret the scenery titles loosely to
match your game theme.


WARNING: Do not get too carried away. If you're shape takes more than 5 lines
of code to draw then you've probably over done it.


*/

function setup()
{
	createCanvas(1024, 576);
}

function draw()
{
	background(100, 155, 255); //fill the sky blue

	noStroke();
	fill(0,155,0);
	rect(0, 432, 1024, 144); //draw some green ground

	//1. a cloud in the sky
    //... add your code here
    fill(255,255,255,255);
    ellipse(213,94,110,110);
    ellipse(172,120,90,90);
    ellipse(276,80,130,130);
    ellipse(309,110,110,110);
    fill(100,155,255);
    rect(125,138,240,28);
	noStroke();
	fill(100,155,255);
	text("cloud", 200, 100);

	//2. a mountain in the distance
	//... add your code here
    //mountain 1
    fill(101,67,33);
    triangle(520,180,386,432,664,432);
    
    
    //moutain 2
    fill(101,67,40);
    triangle(640,102,486,432,764,432);
    
    
    //mountain 3
    fill(101,70,40);
    triangle(762,140,586,432,864,432);
	noStroke();
    
	fill(255);
	text("mountain", 500, 256);

	//3. a tree
	//... add your code here
    
    //triangle 1.1
    fill(0,145,0);
    triangle(800,170,700,275,830,275);
    //1.2
    fill(0,104,0);
    triangle(800,170,830,275,900,275);
    
    //triangle 2.1
    fill(0,145,0);
    triangle(817.5,231,690,290,835,290);
    //2.2
    fill(0,104,0);
    triangle(817.5,231,835,290,900,290);
    
    //triangle 3.1
    fill(0,145,0);
    triangle(825,256,670,320,847.5,320);
    //3.2
    fill(0,104,0);
    triangle(825,256,847.5,320,910,320);
    
    //wood
    fill(128,77,0);
    rect(776,320,30,113);
    //wood 2
    fill(97,58,0);
    rect(806,320,20,113);
    
	noStroke();
	fill(255);
	text("tree", 800, 346);

	//4. a canyon
	//NB. the canyon should go from ground-level to the bottom of the screen
	//... add your code here  
    fill(100,155,255);
    rect(90,431,80,190);
    
	noStroke();
	fill(255);
	text("canyon", 100, 480);
    

	//5. a collectable token - eg. a jewel, fruit, coins
	//... add your code here
    
    //coin
    //outer ring
    fill(217,158,58);
    ellipse(437,393,70,70);
    //inner ring
    fill(240,198,84);
    ellipse(437,393,50,50);
    //inner rect
    fill(217,158,58);
    rect(426,378.5,22.5,29);


	noStroke();
	fill(255);
	text("collectable item", 400, 400);
}
