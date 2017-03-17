var time=300
$("#timer").html(time/100+".<span class='ms'>"+time%100+"</span>")
$(".ms").text("00")
$("#btnStart").click(function(){
    $('.btn').addClass('btn-active')
    interval = setInterval(sec, 10)
    $('.loader-ring').css('animation', 'rotate '+((time-1)/100)+'s linear infinite')
    
})
function sec() {
  time-=1
  if(time<0){
    $('.loader-ring').css('animation', '')
    clearInterval(interval);
    $('#btnStart').find('p').text("Отлично")
    $('.btn').css('box-shadow', '1px 5px 10px -4px rgba(0,255,0,1)')
  }else{
    $("#timer").html(drowTimer(time))
  }
  
}
function drowTimer(t){
  var m = (t/100).toFixed();
  var ms=t%100;
  return m+".<span class='ms'>"+ms+"</span>"
}

