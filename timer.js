
var pretimer=3
var time=exercises[0].ex[m]*100
function drowPre(){
  //$('.preTimer').html("Готовьсь!")
  $('#tablo').html(time/100+".<span class='ms'>00</span>")
  var w=$('#tablo').width()/2
  $('.timerTablo').css("left", "calc(50% - "+w+"px)")
  preInterval = setInterval(preTimer, 1000)
}



function timer(){
  $('#tablo').html(drowTimer(time))
  time-=1;
  if(time<0){
    clearInterval(interval);
    molodetc()
  } 
}

function drowTimer(t){
  var m = (t/100).toFixed();
  var ms=t%100;
  if(String(ms).length==1){
    if(ms>10){
      ms=ms+"0";
    }else{
      ms="0"+ms;
    }
  }
  return m+".<span class='ms'>"+ms+"</span>"
}
function preTimer(){
  $('.preTimer').find('span').text(pretimer)
    if (pretimer==0){
      clearInterval(preInterval);
      $('.preTimer').find('span').html("Погнали")
      pognali()
    }
   pretimer-=1
}
function pognali(){
  $('.preTimer').find('span').fadeOut(2000, function(){
    $('#tablo').addClass('bigTimer')
  })
  $('#tablo').fadeIn(500)
  interval = setInterval(timer, 10)
}

function molodetc(){
  setTimeout(function(){
    $('#tablo').fadeOut(300)
    $('[data-task=0]').addClass('passed').animate({'height':'70'},500);
  }, 1000)
}