
//Рисуем экран всех дней
var allTable="";
for (var i=0; i<30; i++ ){
	allTable+="<div class='plitka'>"
	//Заголовок
	allTable+="<div class='plitka_header'>"
	allTable+="<div class='header_left'><p>День "+(parseInt(i)+1)+"</p></div>"
	if(completeDay[i][0]!==0){allTable+="<div class='header_right'><p>Время выполнения</p><p>completeDay[i].time</p></div>"}
	allTable+="</div>";
	// Конец заголовка

	//Тело плитки
	allTable+="<div class='plitka_body'>"	
	for (j in exercises){
		allTable+="<p class='ex_item'>"+exercises[j].name+": <span>"+exercises[j].ex[i]+"</span></p>"
	}
	allTable+="</div>"
	allTable+="</div>"

}

$(".div_body").html(allTable)
//////////////////////////////////////////////

//рисуем экран одного дня
function drowDay(){

	m = 3 // День который рисуем (берем из локалсторидж)
	var day_ex_item="";
	$(".menu_right").html("<p>День "+m+"</p>")
	for (var i=1; i<=completeDay[m].lenght; i++){
		day_ex_item+="<div class='day_ex_item'>"
		day_ex_item+="<div class='day_ex_item_left'></div>"
		day_ex_item+="<div class='day_ex_item_middle'></div>"
		day_ex_item+="<div class='day_ex_item_right'></div>"
		day_ex_item+="</div>"
	}
}

drowDay()

