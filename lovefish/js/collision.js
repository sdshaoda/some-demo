// 判断大鱼和食物的距离
function momFruitCollision(){
	for(var i = 0; i < fruit.num; i++){
		if(fruit.alive[i]){
			var l = calLength2(fruit.x[i], fruit.y[i], mom.x, mom.y);
			if(l < 900){
				fruit.dead(i);
				data.fruitNum++;
				mom.momBodyCount++;
				if(mom.momBodyCount > 7){
					mom.momBodyCount = 7;
				}
				if(fruit.fruitType[i] =="blue"){
					data.double++;
				}
			}
		}
	}
}
//大鱼喂小鱼
function momBabyCollision(){
	var l = calLength2(mom.x, mom.y, baby.x, baby.y);
	if(l < 900){
		if(data.fruitNum > 0){
			baby.babyBodyCount = 0;
			// data.reset();

			mom.momBodyCount = 0;

			data.addScore();
		}
	}
}