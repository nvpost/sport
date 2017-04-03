var divTimer='<div class="timerField"><div class="timerTablo"><span id="tablo" class="tablo"></span></div><div class="preTimer"><span>Готовьсь!</span></div></div>'

$('.day_ex_item:not(.passed)').click(function(){
	if(!$(this).hasClass('passed')){
		
	if($(this).data('task')!==0){
		$(this).addClass("passed")
		countDay()
	}else{
		if($(this).hasClass('planka')){
			
		}else{
			$(this).animate({'height':'350'},{duration: 700, complete:  function()
					{
						$('.timer').html(divTimer)
						drowPre()
					}
			});
			$(this).addClass('planka')
			setTimeout(countDay, time*10);
			}
		}
	}
	
	
})
function countDay(){
	countDayEx++;
	console.log(countDayEx);
	if(countDayEx==5){
		console.log('День завершён');
		m++
		var nd = +new Date()
		localStorage.setItem("sportApp-m", m);
		localStorage.setItem('sportApp-lastExTime', nd)
	}
}






