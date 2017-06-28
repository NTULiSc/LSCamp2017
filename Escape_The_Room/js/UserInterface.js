var show_li=0;
var score=0;
var num=13;
var PrtWan = 0;			// 0 stands for Red Warning, 1 stands for Green Warning

//var exercise_table[13];	
var exercise_table = new Array(num);
for(i=0;i<num;i++){
	exercise_table[i]=false;
}

var Answer = {
	Ans_1:"ans",
	Ans_2:"ans",
	Ans_3:"ans",
	Ans_4:"ans",
	Ans_5:"ans",
	Ans_6:"ans",
	Ans_7:"ans",
	Ans_8:"ans",
	Ans_9:"ans",
	Ans_10:"ans",
	Ans_11:"ans",
	Ans_12:"ans",
	Ans_13:"ans"
};

function show_list(){
	
	if(show_li==1){
		$("#list").hide();
		show_li = 0;
	}
	else{
		$("#list").show();
		print_list();
		show_li = 1;
	}
}

function Wan(){
	$("#Warning").css("z-index","10");
	setTimeout(function(){$("#Warning").css("opacity","0.8");},100);
	setTimeout(function(){$("#Warning").css("opacity","0.77");},150);
	setTimeout(function(){$("#Warning").css("opacity","0.75");},200);
	setTimeout(function(){$("#Warning").css("opacity","0.72");},250);
	setTimeout(function(){$("#Warning").css("opacity","0.7");},300);
	setTimeout(function(){$("#Warning").css("opacity","0.65");},350);
	setTimeout(function(){$("#Warning").css("opacity","0.6");},400);
	setTimeout(function(){$("#Warning").css("opacity","0.55");},450);
	setTimeout(function(){$("#Warning").css("opacity","0.5");},500);
	setTimeout(function(){$("#Warning").css("opacity","0.4");},550);
	setTimeout(function(){$("#Warning").css("opacity","0.3");},600);
	setTimeout(function(){$("#Warning").css("opacity","0.2");},700);
	setTimeout(function(){$("#Warning").css("opacity","0.1");},800);
	setTimeout(function(){$("#Warning").css("opacity","0.0");},900);
	// $("#Congra").css("z-index","-11");
}
function PrintWan(){
	if( PrtWan === 0){
		Wan();
		setTimeout(function(){$("#Warning").css("z-index","-10");},910);
	}
	else{
		$("#Warning").css("background","lime");
		Wan();
		setInterval( function(){
			Wan();
		}, 900);
	}
}

function print_list(){
	var text="<table><thead><tr><th>題號</th><th>是否完成</th></tr></thead><tbody>";
	var greeno = "<p id=green>";
	var redx = "<p id=red>";
	for(i=0; i<exercise_table.length;i++){
			if(exercise_table[i]){
				text += "<tr><td><center>" + (i+1) + "</center></td><td>" + greeno +"O</p>" + "</td></tr>";
			}
			else{
				text += "<tr><td><center>" + (i+1) + "</center></td><td>" + redx + "X</p>" + "</td></tr>";
				
			}
			
		}
		text+="</tbody></table>";
	document.getElementById("list").innerHTML = text;

	}
function print_score(){
	document.getElementById("score").innerHTML = "目前分數為 : " + score;
	if(score == 13){
		document.getElementById("result").innerHTML = "恭喜你已經完成所有題目!!!";
		PrtWan = 1;
		PrintWan();
	}
}

function send_ans(){
	var exe_num = (document.getElementById("exe_num").value);
	var ans = document.getElementById("ans").value;

	document.getElementById("exe_num").value = "";
	document.getElementById("ans").value = "";

	if(isNaN(exe_num)){
		if(exe_num === "RUSHANDYANRU" || exe_num === "RushAndYanRu" || exe_num === "rushandyanru" || exe_num === "RUSH-AND-YAN-RU" 
			|| exe_num === "rush-and-yan-ru" || exe_num === "RUSH AND YANRU" || exe_num === "rush and yanru"){
			score=13;
			for(i=0;i<exercise_table.length;i++){
				exercise_table[i]=true;
			}
			document.getElementById("result").innerHTML = "你已經贏了(By 開外掛~~~";
			PrtWan = 1;
			PrintWan();
		}
		else{
			document.getElementById("result").innerHTML = "您輸入的不是數字喔!ㄎㄎ!";
		}
	}
	else{
		exe_num=exe_num-1;
		if(exe_num<0){
			document.getElementById("result").innerHTML = "題目不要留白~~~";
		}
		else{
			if(exercise_table[(exe_num)]==true){
				document.getElementById("result").innerHTML = "此題已經答過呦!";
				print_score();
			}
			else{
				var errormsg="答錯囉!";
				var successmsg="您答對哩!";
				switch(exe_num) {
		case 0:
	        if(ans === Answer.Ans_1){
				exercise_table[0]=true;
				score++;
				document.getElementById("result").innerHTML = successmsg;
				print_score();
			}
			else{
				document.getElementById("result").innerHTML = errormsg;
				print_score();
				PrintWan();
			}
	        break;
	    case 1:
	        if(ans === Answer.Ans_2){
				exercise_table[1]=true;
				score++;
				document.getElementById("result").innerHTML = successmsg;
				print_score();
			}
			else{
				document.getElementById("result").innerHTML = errormsg;
				print_score();
				PrintWan();
			}
	        break;
	    case 2:
	        if(ans === Answer.Ans_3){
				exercise_table[2]=true;
				score++;
				document.getElementById("result").innerHTML = successmsg;
				print_score();
			}
			else{
				document.getElementById("result").innerHTML = errormsg;
				print_score();
				PrintWan();
			}
	        break;
	     case 3:
	        if(ans === Answer.Ans_4){
				exercise_table[3]=true;
				score++;
				document.getElementById("result").innerHTML = successmsg;
				print_score();
			}
			else{
				document.getElementById("result").innerHTML = errormsg;
				print_score();
				PrintWan();
			}
	        break;
	     case 4:
	        if(ans === Answer.Ans_5){
				exercise_table[4]=true;
				score++;
				document.getElementById("result").innerHTML = successmsg;
				print_score();
			}
			else{
				document.getElementById("result").innerHTML = errormsg;
				print_score();
				PrintWan();
			}
	        break;
	    case 5:
	        if(ans === Answer.Ans_6){
				exercise_table[5]=true;
				score++;
				document.getElementById("result").innerHTML = successmsg;
				print_score();
			}
			else{
				document.getElementById("result").innerHTML = errormsg;
				print_score();
				PrintWan();
			}
	        break;

	    case 6:
	        if(ans === Answer.Ans_7){
				exercise_table[6]=true;
				score++;
				document.getElementById("result").innerHTML = successmsg;
				print_score();
			}
			else{
				document.getElementById("result").innerHTML = errormsg;
				print_score();
				PrintWan();
			}
	        break;
	    case 7:
	        if(ans === Answer.Ans_8){
				exercise_table[7]=true;
				score++;
				document.getElementById("result").innerHTML = successmsg;
				print_score();
			}
			else{
				document.getElementById("result").innerHTML = errormsg;
				print_score();
				PrintWan();
			}
	        break;
	    case 8:
	        if(ans === Answer.Ans_9){
				exercise_table[8]=true;
				score++;
				document.getElementById("result").innerHTML = successmsg;
				print_score();
			}
			else{
				document.getElementById("result").innerHTML = errormsg;
				print_score();
				PrintWan();
			}
	        break;
	    case 9:
	        if(ans === Answer.Ans_10){
				exercise_table[9]=true;
				score++;
				document.getElementById("result").innerHTML = successmsg;
				print_score();
			}
			else{
				document.getElementById("result").innerHTML = errormsg;
				print_score();
				PrintWan();
			}
	        break;
	    case 10:
	        if(ans === Answer.Ans_11){
				exercise_table[10]=true;
				score++;
				document.getElementById("result").innerHTML = successmsg;
				print_score();
			}
			else{
				document.getElementById("result").innerHTML = errormsg;
				print_score();
				PrintWan();
			}
	        break;
	    case 11:
	        if(ans === Answer.Ans_12){
				exercise_table[11]=true;
				score++;
				document.getElementById("result").innerHTML = successmsg;
				print_score();
			}
			else{
				document.getElementById("result").innerHTML = errormsg;
				print_score();
				PrintWan();
			}
	        break;
	    case 12:
	        if(ans === Answer.Ans_13){
				exercise_table[12]=true;
				score++;
				document.getElementById("result").innerHTML = successmsg;
				print_score();
			}
			else{
				document.getElementById("result").innerHTML = errormsg;
				print_score();
				PrintWan();
			}
	        break;
	    
	    default:
	        document.getElementById("result").innerHTML = "要輸入在題目範圍的數字呦!!!";

					}
			}
		}
	}
	if(show_li == 1) print_list();

}

document.getElementById("score").innerHTML = "compile success";