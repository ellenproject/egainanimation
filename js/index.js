$(document).ready(function () {
  // 兩扇門開啟
  $('.video .showblock').each(function(){
    $(this).click(function(){
      $(this).find('.showblock--bg').fadeIn()
    },function(){
      $(this).find('.showblock--bg').fadeOut()
    })
  });

  //影片轉換
  $(".nav__menu li").click(function (e) {
    const src = $(this).data('src');
    var video = document.getElementById(src);
    // e.preventDefault();
    let item = $(this).data("item");
    $(`.item--${item}`).addClass("item--active").siblings().removeClass("item--active");
    $(`.showblock--${item}`).addClass("showblock--active").siblings().removeClass("showblock--active");
    //如果影片不等於a1，a1暫停。意思是影片等於a2或a3時，a1暫停。
    if (src !== 'a1') {
      document.getElementById('a1').pause();
    }
    if (src !== 'a2') {
      document.getElementById('a2').pause();
    }
    if (src !== 'a3') {
      document.getElementById('a3').pause();
    }
    //影片在點擊音樂後，轉換場景時也會自動播放或暫停
    $('#' + src).addClass('display');
      $('#' + src).siblings().removeClass('show');
      $('.' + src).addClass('display');
      $('.' + src).siblings().removeClass('show');
      setTimeout(() => {
        video.play();
        $('#' + src).addClass('show');
        $('#' + src).siblings().removeClass('display');
        $('.' + src).addClass('show');
        $('.' + src).siblings().removeClass('display');
      }, 500);
  });

  $(".index-back").click(function (e) {
    location.href = './index.html';
  });


  //nav bar click 背景換色
  $(".top--2").click(function (e) {
    $('.top--2').addClass("top--2--active");
    $('.top--3').removeClass("top--3--active");
  });

  $(".top--3").click(function (e) {
    $('.top--3').addClass("top--3--active");
    $('.top--2').removeClass("top--2--active");
  });

  
  //手機版nav
  $(function(){
    $('.mobile-toggle, nav').click(function(){
      $('.mobile-toggle').toggleClass('mobile-on');
      $('nav').fadeToggle();
      $('nav').removeClass('mobile-hide');
      $(".mobile-nav-wrapper li").click(function (e) {
        // e.preventDefault();
        let item = $(this).data("item");
        $(`.item--${item}`).addClass("item--active").siblings().removeClass("item--active");
        $(`.showblock--${item}`).addClass("showblock--active").siblings().removeClass("showblock--active");
      });
    });
  });

  //mobile-contact-fb
  $('.mobile-contact--fb').click(function(){
    $('.mobile-contact--fb-box').toggleClass('fb-box-on');
    $('.mobile-contact--fb-box').click(function(){
      var mobileBG = document.querySelector('.mobile-nav display');
      mobileBG.style.display = "table";
      $('.mobile-toggle').addClass('mobile-on');
      $('.mobile-nav').removeClass('mobile-hide');
    });
  });

  //desktop-contact-fb
  $('.fb').click(function(){
    $('.fb-box').toggleClass('fb-box-on');
  });

  //彈跳視窗
  $(".video-tab-list li").click(function (e) {
    let item = $(this).data("item");
    $(`.click--${item}`).addClass("click--active").siblings().removeClass("click--active");
    $(`.popup--${item}`).addClass("is-visible").siblings().removeClass("is-visible");
    if($('.popup').hasClass('is-visible') ){
      let video = document.querySelector('.video-source');
      let tab = document.querySelector('.video-tab-list');
      let contact = document.querySelector('.video-contact-list');
      let nav = document.querySelector('.nav__menu');
      let video2 = document.querySelector('.showblock--2 .video-source');
      let tab2 = document.querySelector('.showblock--2 .video-tab-list')
      let contact2 = document.querySelector('.showblock--2 .video-contact-list');
      let video3 = document.querySelector('.showblock--3 .video-source');
      let tab3 = document.querySelector('.showblock--3 .video-tab-list')
      let contact3 = document.querySelector('.showblock--3 .video-contact-list');
      video.style = "-webkit-filter: blur(5px)";
      tab.style = "-webkit-filter: blur(5px)";
      contact.style = "-webkit-filter: blur(5px)";
      nav.style = "-webkit-filter: blur(5px)";
      video2.style = "-webkit-filter: blur(5px)";
      tab2.style = "-webkit-filter: blur(5px)";
      contact2.style = "-webkit-filter: blur(5px)";
      video3.style = "-webkit-filter: blur(5px)";
      tab3.style = "-webkit-filter: blur(5px)";
      contact3.style = "-webkit-filter: blur(5px)";
    };
    //點擊背景跟close都會關掉彈跳視窗
    $(`.popup--${item}`).on('click', function(event){
      if( $(event.target).is('.close') || $(event.target).is(`.popup--${item}`) ) {
        $(this).removeClass('is-visible');
        //關掉背景模糊
        let video = document.querySelector('.video-source');
        let tab = document.querySelector('.video-tab-list');
        let contact = document.querySelector('.video-contact-list');
        let nav = document.querySelector('.nav__menu');
        let video2 = document.querySelector('.showblock--2 .video-source');
        let tab2 = document.querySelector('.showblock--2 .video-tab-list')
        let contact2 = document.querySelector('.showblock--2 .video-contact-list');
        let video3 = document.querySelector('.showblock--3 .video-source');
        let tab3 = document.querySelector('.showblock--3 .video-tab-list')
        let contact3 = document.querySelector('.showblock--3 .video-contact-list');
        video.style = "-webkit-filter: blur(0px)";
        tab.style = "-webkit-filter: blur(0px)";
        contact.style = "-webkit-filter: blur(0px)";
        nav.style = "-webkit-filter: blur(0px)"
        video2.style = "-webkit-filter: blur(0px)";
        tab2.style = "-webkit-filter: blur(0px)";
        contact2.style = "-webkit-filter: blur(0px)";
        video3.style = "-webkit-filter: blur(0px)";
        tab3.style = "-webkit-filter: blur(0px)";
        contact3.style = "-webkit-filter: blur(0px)";
      }
    });
  });
  
  

  //影片靜音按鈕
  $(".video-mute").click(function () {
    //影片音樂
    if ($("video").prop("muted")) {
      $("video").prop("muted", false);
      $(".play").addClass("active");
      $(".pause").removeClass("active");
    } else {
      $("video").prop("muted", true);
      $(".pause").addClass("active");
      $(".play").removeClass("active");
    }
  });
});

//audio bgm
// window.onload = function(){
//     var audio = document.getElementById('music');
//     audio.pause(); //打開網頁時不播放音樂
// }

// function play(){
//     var audio = document.getElementById('music');
//     if(audio.paused){
//         audio.play();
//     }else{
//         audio.pause();
//         audio.currentTime = 0;  //音樂從頭播放
//     }
//     audio.volume = 0.1;  //音量調小
//     audio.loop = false;  //無限循環
// }


if (/Mobi|Android|iPhone/i.test(navigator.userAgent)) {
  $("video").attr("playsinline", "true");
  // $('video').removeAttr('autoplay');
  $(".text-box").css("z-index", 999);
  $(".text-box").css("transition", "none");
  // $('.text-box').addClass('show');
  alert("建議將手機螢幕轉為橫向以欣賞影片!");
} else {
  setTimeout(() => {
    $(".text-box").addClass("show");
  }, 16000);
}
