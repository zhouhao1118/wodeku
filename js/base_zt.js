
$(function(){
  // 大轮播图
  var index=0;
  var $lis=$('#b_bigbox li');
  $('.arrow_right').click(function(){
    if (index===$lis.length-1) {
      index=-1;
    }
    index++;
    $lis.eq(index).stop().fadeIn(1000).siblings().stop().fadeOut(1000);
  });
  $('.arrow_left').click(function(){
    if (index===0) {
      index=$lis.length;
    }
    index--;
    $lis.eq(index).stop().fadeIn(1000).siblings().stop().fadeOut(1000);


  });
  // 轮播图定时器
  var b_bigbox=document.getElementById('b_bigbox');
  var timer=null;
  b_bigbox.onmouseout=function(){
    
    timer=setInterval(function(){
       if (index===$lis.length-1) {
      index=-1;
    }
    index++;
    $lis.eq(index).stop().fadeIn(1000).siblings().stop().fadeOut(1000);
  },2000)

  }
  b_bigbox.onmouseover=function(){
    clearInterval(timer)
  }
});
$(function(){
      // tab栏切换
    var $lis = $('.theme-tab li');
    // console.log($lis);
     $('.theme-tab li').click(function(){
      $(this).siblings().css('color', '#666');
      $(this).addClass('active2').siblings().removeClass('active2');
      //设置点击时a的字体颜色
      // $(this).children().eq(0).css('color', '#666');

      $(this).css('color', '#fedd17');
      
      //根据当前li的index 找到对应的 div,设置selected类名,其他div移除类名
      var index = $(this).index();
      var $tabox = $('.tabox');
      $tabox.eq(index).addClass('selected2').siblings().removeClass('selected2');
    })
   // 切换结束
})

$(function(){
      // tab栏切换
    var $spans = $('.hd span');
    // console.log($lis);
     $('.hd span').click(function(){
      $(this).siblings().css('color', '#fff');
      $(this).addClass('active3').siblings().removeClass('active3');
      //设置点击时a的字体颜色
      // $(this).children().eq(0).css('color', '#666');

      // $(this).css('color', '#fedd17');
      
      //根据当前li的index 找到对应的 div,设置selected类名,其他div移除类名
      var index = $(this).index();
      var $map = $('.map');
      $map.eq(index).addClass('selected3').siblings().removeClass('selected3');
    })
   // 切换结束
})


























// }//is__入口函数结尾处
  

