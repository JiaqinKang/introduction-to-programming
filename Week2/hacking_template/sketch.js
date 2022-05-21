var data;
var totals;
var sum;

function setup() 
{
    // Sets the screen to be 720 pixels wide and 400 pixels high
    createCanvas(360,360);
	 data = [[2,6,3,7,1],
			 [4,5,2,9,8],
			 [1,7,4,5,4],
			 [6,9,0,4,2],
			 [4,3,2,6,5]
			];
	sum = 0;
	
	
	for (var i = 0; i < data.length; i++){
		sum += data[i][3];
		console.log(sum);

	}
}
	

	

	




//

//function draw()
//{
//
//	
//	
//
//}	
//
//function percentage(x){
//	return x* 100;
//}