


var count = 20;
var counter=setInterval(timer, 1000);

function timer()
{
	count=count-1;
	if (count <= 0)
	{	clearInterval(counter);
		alert("Boom you are dead!")
		return;
		
	}
	document.getElementById("timer").innerHTML=count + "secs";
}



function check()
{	var q1 = document.quiz.group1.value;
	var q2 = document.quiz.group2.value;
	var q3 = document.quiz.group3.value;
	var count = 0;

	if(q1 =="right"){
		count++;
	}
	else{
		count--;
	}
	if(q2=="right"){
		count ++;
	}
	else{
		count --;
	}
	if(q3=="right"){
		count++;
	}
	else{
		count--;
	}
	if(count == 3){
		alert("You're getting to old for this sh*t!");
		
	}
	else{
		alert("Boom you're dead!");
	}

}

