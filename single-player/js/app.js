let grid;
let colors = ["blue","green"] ;
let color="blue";
let i =1;

let score = [];
function setup(){
	createCanvas(300,450);
	background(0);
	grid = new Grid(color);
}

function draw() {
	clear();
	grid.drawGrid(color);
	grid.boxes.forEach((box)=>{
		box.drawBall()
	})
}

function mouseClicked() {
	if(mouseX > width || mouseY > height){
		return;
	}
	let pos = Box.getPosition(mouseX,mouseY)
	let box = grid.getBox(pos.x,pos.y)
	console.log(box)
	
	if(color === box.color || box.color === ""){
		logic(box);

	score = [];
	grid.boxes.forEach((box)=>{
		if(box.color !== ""){
			if(score[box.color] === undefined)
				score[box.color]= 0;
			score[box.color] += box.balls.length; 
		}
	})
	console.log(score)
	color=colors[i%colors.length];
	i++;
	}
	
	
	
}


function logic(box){
	let sideBoxes = [];
	if(box === undefined)
		return
	if(box.isBoxFull()){
		box.resetBox();
		if(box.posX-1 >=0){
			sideBoxes.push(grid.getBox(box.posX-1,box.posY))
		}
		if(box.posX+1 <=5){
			sideBoxes.push(grid.getBox(box.posX+1,box.posY))
		}
		if(box.posY-1 >=0){
			sideBoxes.push(grid.getBox(box.posX,box.posY-1))
		}
		if(box.posY+1 <=9){
			sideBoxes.push(grid.getBox(box.posX,box.posY+1))
		}
	}
	else{
		
		box.addBall(color);
			
	}
	sideBoxes.forEach((box)=>{
		logic(box,color);
	})
}