$('.day_ex_item:not(.passed)').click(function(){
	if($(this).data('task')!==0){
		$(this).addClass("passed")
	}else{
		if($(this).hasClass('planka')){
			console.log('dd')
			$(this).animate({'height':'70'},1000);
			$(this).removeClass('planka')
		}else{
			$(this).animate({'height':'350'},1000);
			$(this).addClass('planka')
		}
	
	
	}
	
})