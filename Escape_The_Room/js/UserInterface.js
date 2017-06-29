var show_li=0;
var score=0;
var num=10;
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
	Ans_10:"ans"
};

$('#exe_num').keypress(function(event) {
    if (event.keyCode == 13 || event.which == 13) {
        $('#ans').focus();
        event.preventDefault();
    }
});

$('#ans').keypress(function(event) {
    if (event.keyCode == 13 || event.which == 13) {
    	send_ans();
    	$('#exe_num').focus();
        event.preventDefault();
    }
});

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

function closeMe()
{
    // window.opener = self;
    // window.close();
    window.location.reload(false);
}
$(document).ready(
	function(){
		$(".quit").hover(function(){
				$("#Warning").css("z-index","-20");
			},function(){
				$("#Warning").css("z-index","20");
			});
});

function Wan(){
	
	setTimeout(function(){$("#Warning").css("opacity","0.5");},100);
	setTimeout(function(){$("#Warning").css("opacity","0.45");},150);
	setTimeout(function(){$("#Warning").css("opacity","0.42");},200);
	setTimeout(function(){$("#Warning").css("opacity","0.40");},250);
	setTimeout(function(){$("#Warning").css("opacity","0.38");},300);
	setTimeout(function(){$("#Warning").css("opacity","0.35");},350);
	setTimeout(function(){$("#Warning").css("opacity","0.32");},400);
	setTimeout(function(){$("#Warning").css("opacity","0.30");},450);
	setTimeout(function(){$("#Warning").css("opacity","0.27");},500);
	setTimeout(function(){$("#Warning").css("opacity","0.25");},550);
	setTimeout(function(){$("#Warning").css("opacity","0.22");},600);
	setTimeout(function(){$("#Warning").css("opacity","0.18");},700);
	setTimeout(function(){$("#Warning").css("opacity","0.1");},800);
	setTimeout(function(){$("#Warning").css("opacity","0.0");},900);
	// $("#Congra").css("z-index","-11");
}
function PrintWan(){
	
	if( PrtWan === 0){
		$("#Warning").css("z-index","10"); 
		Wan();
		setTimeout(function(){$("#Warning").css("z-index","-10");},910);
	}
	else{
		$("#Warning").css("background","lime");
		$(".quit").css("display","block");
		$(".quit").css("z-index","20");
		$("#Warning").css("z-index","10"); 
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
	if(score == 10){
		document.getElementById("result").innerHTML = "恭喜你已經完成所有題目!!!";
		PrtWan = 1;
		PrintWan();
	}
}

function send_ans(){
	var exe_num = (document.getElementById("exe_num").value);
	var ans = document.getElementById("ans").value;
	exe_num=exe_num.trim();
	ans=ans.trim();

	document.getElementById("exe_num").value = "";
	document.getElementById("ans").value = "";

	if(isNaN(exe_num)){				//If input is not number
		if(exe_num === "RUSHANDYANRU" || exe_num === "RushAndYanRu" || exe_num === "rushandyanru" || exe_num === "RUSH-AND-YAN-RU" 
			|| exe_num === "rush-and-yan-ru" || exe_num === "RUSH AND YANRU" || exe_num === "rush and yanru"){
			score=10;
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
	else if(exe_num === ""){
		document.getElementById("result").innerHTML = "題目不要留白~~~";
	}
	else{							//If input is number
		exe_num=exe_num-1;
		if(exe_num === -1){
			document.getElementById("result").innerHTML = "第0題!? 您應該讀資工系!!!";
		}
		else if(exe_num < -1 ){
			document.getElementById("result").innerHTML = "幹你媽有人題目號碼在負的嗎?????";	
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
	    /*case 10:
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
	        break;*/
	    default:
	        document.getElementById("result").innerHTML = "要輸入在題目範圍的數字呦!!!";

					}
			}
		}
	}
	if(show_li == 1) print_list();

}

document.getElementById("score").innerHTML = "compile success";