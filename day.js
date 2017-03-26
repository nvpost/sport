var divTimer='<div class="timerField"><div class="preTimer"><span>Готовьсь!</span></div><div class="timerTablo"><span id="tablo"></span></div></div>'



$('.day_ex_item:not(.passed)').click(function(){
	if($(this).data('task')!==0){
		$(this).addClass("passed")
	}else{
		if($(this).hasClass('planka')){
			$(this).animate({'height':'70'},700);
			$(this).removeClass('planka')
		}else{
			$(this).animate({'height':'350'},{duration: 700, complete:  function()
					{
						$('.timer').html(divTimer)
						drowPre()
					}
			});
			$(this).addClass('planka')
			//drowBtn($(this))
			
		}
	
	}
	
})






