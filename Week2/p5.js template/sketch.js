function setup()
{
	createCanvas(800, 600);
}



function draw()
{
    //background red
    background(255);
    
    //line
    stroke(0);
    strokeWeight(20);
    line(150,0,150,600);
    
    //line
    stroke(0);
    strokeWeight(30);
    line(0,200,145,200);   
    
    //line
    stroke(0);
    strokeWeight(20);
    line(0,450,800,450);  

    //line
    stroke(0);
    strokeWeight(20);
    line(725,450,725,600);
    
    //line
    stroke(0);
    strokeWeight(20);
    line(725,520,800,520);
    
    //red rect
    stroke(0,0,0,0);
    fill(255,0,0);
    rect(160,0,640,440);
    
    //blue rect
    stroke(0,0,0,0);
    fill(51,51,255);
    rect(0,460,140,140);
    
    //yellow rect
    stroke(0,0,0,0);
    fill(255,255,0);
    rect(735,530,140,140);
    
    
}