// 滚动事件，发生滚动固定导航
$(window).scroll(function () {
  var scrollTop = $(this).scrollTop(); //滚轮距上距离
  if (scrollTop > 1) {
    $(".navbar").css({
      backgroundColor: '#fff',
    });
    $("#nav-col").children().find("a").css({color:"#777"});
  } else {
    $(".navbar").css({
      backgroundColor: 'rgba(0, 0, 0, 0.1)',

    });
    $("#nav-col").children().find("a").css({color:"#fff"});
  }
})

//显示按钮
$(document).ready(function(){
  $("#menu_publishers").mouseenter(function(){
    $("#menu_publishers>i").removeClass("glyphicon glyphicon-triangle-bottom").addClass('glyphicon glyphicon-triangle-top');
  });
  $("#menu_publishers").mouseleave(function(){
    $("#menu_publishers>i").removeClass("glyphicon glyphicon-triangle-top").addClass('glyphicon glyphicon-triangle-bottom');
  });
});
$(document).ready(function(){
  $(".menu_news").mouseenter(function(){
    $(".menu_news>i").removeClass("glyphicon glyphicon-triangle-bottom").addClass('glyphicon glyphicon-triangle-top');
  });
  $(".menu_news").mouseleave(function(){
    $(".menu_news>i").removeClass("glyphicon glyphicon-triangle-top").addClass('glyphicon glyphicon-triangle-bottom');
  });
});


//显示连接
$(".pop").mouseenter(function(){
  $(this).children(".pus-pop,.pus-pop-txt").show();
})
$(".pop").mouseleave(function(){
  $(this).children(".pus-pop,.pus-pop-txt").hide();
})

$(".menu_publishers").mouseenter(function(){
  $(this).children(".pus-wrap").show();
})
$(".menu_publishers").mouseleave(function(){
  $(this).children(".pus-wrap").hide();
})

$(".min-box").mouseenter(function(){
  $(this).children(".txt").animate({ top: "65%" }, 1000).show();
})
$(".min-box").mouseleave(function(){
  $(this).children(".txt").animate({ top: "100%" }, 2000);
})


var timer;  //手风琴 
$(".sub-content-main").on("mouseenter", function () {
  console.log('11111');
  var that = this;
  console.log(this);
  timer = setTimeout(function () {//定时器
    console.log('2222');
    console.log(that);
    $(that).children().removeClass("hover");
    $(that).css({ borderLeft: "2px solid red", borderRight: "2px solid red" });
    $(that).siblings('.sub-content-main').animate({ width: "198px" }, 500);
    $(that).animate({ width: "398px" }, 500).children().show();//parent()父元素.siblings()兄弟.children 子元素 animate 动作
    $(that).children().find('.img-left').css({ backgroundColor: "#c7000b" });
    $(that).children("h5").animate({ opacity: "1" });
    console.log($(that).parent())

    $(that).siblings().css({ borderLeft: "1px solid #f6f7f3f3", borderRight: "1px solid #f6f7f3f3" });
    $(that).siblings().find('.content-main-right').hide();
    $(that).siblings().find('.content-main-img').hide();
    $(that).siblings().find("h5").animate({ opacity: "0" });
    $(that).siblings().find('.img-left').css({ backgroundColor: "#aaa" });

  }, 500);
}).on("mouseleave", function () {
  clearTimeout(timer);
})

//轮播器  （小）
$(document).ready(function () {
  var swiper1 = new Swiper('#swiper1', {
    direction: 'horizontal',
    loop: true,
    // 如果需要前进后退按钮
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },

  });

  var swiper2 = new Swiper('#swiper2', {
    loop: true,
    slidesPerView: 4,
    spaceBetween: 30,
    autoplay: 5000,
    loopedSlides: 7,
    freeMode: false,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });
})