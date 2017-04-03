
//Рисуем экран всех дней
var pass=0
var btn=" btn'>"
var countDayEx=0
if(m){
	pass = m
}
var allTable="";
for (var i=0; i<30; i++ ){

	allTable+="<div class='plitka"
	if (pass!==0){
		allTable+=" passed'>"
		pass--;
	}else{
		allTable+=btn;
		btn="'>";
		
	}
	//Заголовок
	allTable+="<div class='plitka_header'>"
	allTable+="<div class='header_left'><p>День "+(parseInt(i)+1)+"</p></div>"
	if(completeDay[i][0]!==0){allTable+="<div class='header_right'><p>Время выполнения</p><p>completeDay[i].time</p></div>"}
	allTable+="</div>";
	// Конец заголовка

	//Тело плитки
	allTable+="<div class='plitka_body'>"	
	for (j in exercises){
		allTable+="<div class='ex_item'><div class='exName'>"+exercises[j].name+": </div><div class='exCount'>"+exercises[j].ex[i]+"</div></div>"
	}
	allTable+="</div>"
	allTable+="</div>"

}

$(".div_body").html(allTable)
//////////////////////////////////////////////
var timerContent="";
//рисуем экран одного дня
function drowDay(){

	var day_ex_item="";
	$(".menu_right").html("<p>День "+(m+1)+"</p>")
	for (var i in exercises){
		day_ex_item+="<div class='day_ex_item' data-task="+i+">"
		day_ex_item+="<div class='day_ex_item_left'>"+exercises[i].name+"</div>"
		/*if(exercises[i].ex[m]=='0'){
			console.log('das')
			zeroPassed(i)
		}*/
		day_ex_item+="<div class='day_ex_item_middle'>"+exercises[i].ex[m]+"</div>"
		//day_ex_item+="<div class='day_ex_item_right'></div>"
		if(i==0){day_ex_item+="<div class='timer'></div>"}
		day_ex_item+="</div>"
	}
	$('.div_body_day').html(day_ex_item)
}

$(".btn").click(function(){
	var eplTime= +new Date() - lastExTime;
	var eplSec=(eplTime/1000).toFixed(0)
	var eplMin=Math.floor(eplSec/60)
	var eplH=Math.floor(eplMin/60)
	if(eplH<13){
		console.log("Прошло всего "+eplH+"ч. "+eplMin+"мин. "+(eplSec%60)+"сек. ")
		if(confirm('Действительно продолжить?')){document.location.href="screen_day.html"}
	}
	
})

drowDay()
$('[data-task]').each(function(){
	if($(this).find('.day_ex_item_middle').text()==0){
		$(this).addClass('passed')
		console.log(countDayEx)
		countDayEx++;
	}
})




