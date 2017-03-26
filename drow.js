
//Рисуем экран всех дней
var pass=0
var btn=" btn'>"
if(notStart){
	pass = lhis.length
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
		allTable+="<p class='ex_item'>"+exercises[j].name+": <span>"+exercises[j].ex[i]+drowPassed(j, i)+"</span></p>"
	}
	allTable+="</div>"
	allTable+="</div>"

}
//Добавляем в таблицу результату которые уже есть
function drowPassed(j, i){
	var passSrt=''
	if(i<lhis.length){
		passSrt=" ("+lhis[i][j]+")"
	}
	return passSrt;
}

$(".div_body").html(allTable)
//////////////////////////////////////////////
var timerContent="";
//рисуем экран одного дня
function drowDay(){

	m = typeof lhis !== 'undefined' ? lhis.length  : 0; // День который рисуем (берем из локалсторидж)
	var day_ex_item="";
	$(".menu_right").html("<p>День "+(m+1)+"</p>")
	for (var i in exercises){
		day_ex_item+="<div class='day_ex_item' data-task="+i+">"
		day_ex_item+="<div class='day_ex_item_left'>"+exercises[i].name+"</div>"
		day_ex_item+="<div class='day_ex_item_middle'>"+exercises[i].ex[m]+"</div>"
		day_ex_item+="<div class='day_ex_item_right'></div>"
		if(i==0){day_ex_item+="<div class='timer'></div>"}
		day_ex_item+="</div>"
	}
	$('.div_body_day').html(day_ex_item)
}



$(".btn").click(function(){
	console.log('sdf')
	document.location.href="screen_day.html"
})

drowDay()



