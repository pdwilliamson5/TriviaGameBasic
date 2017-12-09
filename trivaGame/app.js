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
		alert("You're getting to old for this sh*t");
	}
	else{
		alert("Boom you're dead!");
	}

}

var counter = 0;
var timeleft = 20;
function setup {
	noCanvas();
 var timer = select('#clock');
		timer.html('0');

		function timeIt(){
			counter ++;
			timer.html(timeleft - counter);

		}
		setInterval(timeIt, 1000);
	}