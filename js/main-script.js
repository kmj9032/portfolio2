// 메뉴
$("#h_icon:nth-child(3)").click(function(){
    $("#s_menu").stop(true).animate({right:'0'},800);
});
$("#s_menu .close").click(function(){
    $("#s_menu").stop(true).animate({right:'-450px'},800);
});

// 스크롤시 메뉴 색 변경
$(window).scroll(function(){
    if($(this).scrollTop() >= $(window).height()){
        $("header").css({backgroundColor:'#fff'});
    }
    if($(this).scrollTop() < $(window).height()){
        $("header").css({backgroundColor:'#ffffff00'});
    }
});

// 배너
const outer = document.querySelector('.banner_outer');
const innerList = document.querySelector('.banner_list');
const inners = document.querySelectorAll('.banner');
let currentIndex = 0; // 현재 슬라이드 화면 인덱스

inners.forEach((inner) => {
  inner.style.width = `${outer.clientWidth}px`; // inner의 width를 모두 outer의 width로 만들기
})

innerList.style.width = `${outer.clientWidth * inners.length}px`; // innerList의 width를 inner의 width * inner의 개수로 만들기

//버튼에 등록
const buttonLeft = document.querySelector('.left');
const buttonRight = document.querySelector('.right');

buttonLeft.addEventListener('click', () => {
  currentIndex--;
  currentIndex = currentIndex < 0 ? 0 : currentIndex; // index값이 0보다 작아질 경우 0으로 변경
  innerList.style.marginLeft = `-${outer.clientWidth * currentIndex}px`; // index만큼 margin을 주어 옆으로 밀기
  clearInterval(interval); // 기존 동작되던 interval 제거
  interval = getInterval(); // 새로운 interval 등록
});

buttonRight.addEventListener('click', () => {
  currentIndex++;
  currentIndex = currentIndex >= inners.length ? inners.length - 1 : currentIndex; // index값이 inner의 총 개수보다 많아질 경우 마지막 인덱스값으로 변경
  innerList.style.marginLeft = `-${outer.clientWidth * currentIndex}px`; // index만큼 margin을 주어 옆으로 밀기
  clearInterval(interval); // 기존 동작되던 interval 제거
  interval = getInterval(); // 새로운 interval 등록
});

//주기적 반복
const getInterval = () => {
  return setInterval(() => {
    currentIndex++;
    currentIndex = currentIndex >= inners.length ? 0 : currentIndex;
    innerList.style.marginLeft = `-${outer.clientWidth * currentIndex}px`;
  }, 5000);
}

let interval = getInterval(); // interval 등록

//md 이미지 확대축소
$('.md img:nth-child(1)').mouseover(function(){
  $(this).css({transform:'scale(1.1)',transitionDuration:'1s'});
})
.mouseout(function(){
  $(this).css({transform:'scale(1)'});
});

//md 찜
$(".md .heart").click(function(){
  $(this).css({display:'none'});
  $(".md .redheart").css({opacity:'1'});
});
$(".md .redheart").click(function(){
  $(this).css({opacity:'0'});
  $(".md .heart").css({display:'block'});
});


// 가이드북
$('.gd_list').slick({
    infinite: false,
    slidesToShow: 3,
    slidesToScroll: 1,
    draggable : false,
    arrows : true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          draggable : false,
          arrows : true,
          infinite: false,
        }
      },
      {
        breakpoint: 849,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
    
});

//스토리
$('.story_list a>img:nth-child(1)').mouseover(function(){
  $(this).css({transform:'scale(1.1)',transitionDuration:'1s'});
})
.mouseout(function(){
  $(this).css({transform:'scale(1)'});
});

//1
$(".storymenu_list>li:nth-child(1)").click(function(){
  $(this).css({color:'#2B4016',border:'4px solid #2B4016',borderRadius:'10px',fontWeight:'600'});
  $(".storymenu_list>li").filter(':nth-child(2),:nth-child(3),:nth-child(4),:nth-child(5),:nth-child(6),:nth-child(7),:nth-child(8)').css({
    color:'#9A9A9A',border:'none',borderRadius:'0px',fontWeight:'500'
  });

  $(".list1").css({display:'flex'});
  $(".list2,.list3,.list4,.list5,.list6,.list7,.list8").css({display:'none'});
});

//2
$(".storymenu_list>li:nth-child(2)").click(function(){
  $(this).css({color:'#2B4016',border:'4px solid #2B4016',borderRadius:'10px',fontWeight:'600'});
  $(".storymenu_list>li").filter(':nth-child(1),:nth-child(3),:nth-child(4),:nth-child(5),:nth-child(6),:nth-child(7),:nth-child(8)').css({
    color:'#9A9A9A',border:'none',borderRadius:'0px',fontWeight:'500'
  });

  $(".list2").css({display:'flex'});
  $(".list1,.list3,.list4,.list5,.list6,.list7,.list8").css({display:'none'});
});

//3
$(".storymenu_list>li:nth-child(3)").click(function(){
  $(this).css({color:'#2B4016',border:'4px solid #2B4016',borderRadius:'10px',fontWeight:'600'});
  $(".storymenu_list>li").filter(':nth-child(1),:nth-child(2),:nth-child(4),:nth-child(5),:nth-child(6),:nth-child(7),:nth-child(8)').css({
    color:'#9A9A9A',border:'none',borderRadius:'0px',fontWeight:'500'
  });

  $(".list3").css({display:'flex'});
  $(".list1,.list2,.list4,.list5,.list6,.list7,.list8").css({display:'none'});
});

//4
$(".storymenu_list>li:nth-child(4)").click(function(){
  $(this).css({color:'#2B4016',border:'4px solid #2B4016',borderRadius:'10px',fontWeight:'600'});
  $(".storymenu_list>li").filter(':nth-child(1),:nth-child(2),:nth-child(3),:nth-child(5),:nth-child(6),:nth-child(7),:nth-child(8)').css({
    color:'#9A9A9A',border:'none',borderRadius:'0px',fontWeight:'500'
  });

  $(".list4").css({display:'flex'});
  $(".list1,.list2,.list3,.list5,.list6,.list7,.list8").css({display:'none'});
});

//5
$(".storymenu_list>li:nth-child(5)").click(function(){
  $(this).css({color:'#2B4016',border:'4px solid #2B4016',borderRadius:'10px',fontWeight:'600'});
  $(".storymenu_list>li").filter(':nth-child(1),:nth-child(2),:nth-child(3),:nth-child(4),:nth-child(6),:nth-child(7),:nth-child(8)').css({
    color:'#9A9A9A',border:'none',borderRadius:'0px',fontWeight:'500'
  });

  $(".list5").css({display:'flex'});
  $(".list1,.list2,.list3,.list4,.list6,.list7,.list8").css({display:'none'});
});

//6
$(".storymenu_list>li:nth-child(6)").click(function(){
  $(this).css({color:'#2B4016',border:'4px solid #2B4016',borderRadius:'10px',fontWeight:'600'});
  $(".storymenu_list>li").filter(':nth-child(1),:nth-child(2),:nth-child(3),:nth-child(4),:nth-child(5),:nth-child(7),:nth-child(8)').css({
    color:'#9A9A9A',border:'none',borderRadius:'0px',fontWeight:'500'
  });

  $(".list6").css({display:'flex'});
  $(".list1,.list2,.list3,.list4,.list5,.list7,.list8").css({display:'none'});
});

//7
$(".storymenu_list>li:nth-child(7)").click(function(){
  $(this).css({color:'#2B4016',border:'4px solid #2B4016',borderRadius:'10px',fontWeight:'600'});
  $(".storymenu_list>li").filter(':nth-child(1),:nth-child(2),:nth-child(3),:nth-child(4),:nth-child(5),:nth-child(6),:nth-child(8)').css({
    color:'#9A9A9A',border:'none',borderRadius:'0px',fontWeight:'500'
  });

  $(".list7").css({display:'flex'});
  $(".list1,.list2,.list3,.list4,.list5,.list6,.list8").css({display:'none'});
});

//8
$(".storymenu_list>li:nth-child(8)").click(function(){
  $(this).css({color:'#2B4016',border:'4px solid #2B4016',borderRadius:'10px',fontWeight:'600'});
  $(".storymenu_list>li").filter(':nth-child(1),:nth-child(2),:nth-child(3),:nth-child(4),:nth-child(5),:nth-child(6),:nth-child(7)').css({
    color:'#9A9A9A',border:'none',borderRadius:'0px',fontWeight:'500'
  });

  $(".list8").css({display:'flex'});
  $(".list1,.list2,.list3,.list4,.list5,.list6,.list7").css({display:'none'});
});

//story 찜
$(".story_list a .heart").click(function(){
  $(this).css({display:'none'});
  $(".story_list a .redheart").css({opacity:'1'})
});
$(".story_list a .redheart").click(function(){
  $(this).css({opacity:'0'});
  $(".story_list a .heart").css({display:'block'})
});

//랭킹
//1
$(".rankmenu_list>li:nth-child(1)").click(function(){
  $(this).css({color:'#2B4016',border:'4px solid #2B4016',borderRadius:'10px',fontWeight:'600'});
  $(".rankmenu_list>li:nth-child(2)").css({color:'#9A9A9A',border:'none',borderRadius:'0px',fontWeight:'500'});

  $(".bx-wrapper:nth-child(1),.bx-wrapper:nth-child(1) .bx-controls-direction").css({display:'block'});
  $(".bx-wrapper:nth-child(2),.bx-wrapper:nth-child(2) .bx-controls-direction").css({display:'none'});
});
//2
$(".rankmenu_list>li:nth-child(2)").click(function(){
  $(this).css({color:'#2B4016',border:'4px solid #2B4016',borderRadius:'10px',fontWeight:'600'});
  $(".rankmenu_list>li:nth-child(1)").css({color:'#9A9A9A',border:'none',borderRadius:'0px',fontWeight:'500'});

  $("#slider2,.bx-wrapper:nth-child(2),.bx-wrapper:nth-child(2) .bx-controls-direction").css({display:'block'});
  $(".bx-wrapper:nth-child(1),.bx-wrapper:nth-child(1) .bx-controls-direction").css({display:'none'});
});

$('#slider1').bxSlider({
  mode: 'vertical',
  minSlides: 4,
  moveSlides: 1,
  infiniteLoop: false,
  pager: false,
  touchEnabled:false,
  controls: true
});
$('#slider2').bxSlider({
  mode: 'vertical',
  minSlides: 4,
  moveSlides: 1,
  infiniteLoop: false,
  pager: false,
  touchEnabled:false,
  controls: true
});

//싱싱튜브
$('.ycont .media').mouseover(function(){
  $(this).css({transform:'scale(1.1)',transitionDuration:'1s'});
})
.mouseout(function(){
  $(this).css({transform:'scale(1)'});
});

//top버튼
$(".top").hide();
$(window).scroll(function(){
  if($(this).scrollTop() !=0){
    $(".top").fadeIn();
  }else{
    $(".top").fadeOut();
  }
});
$(".top").on('click', function() {
  $("html, body").animate({ scrollTop: 0 })
})

//움직이지 않게
$(".noMove").on('click',function(e){
  e.preventDefault();
});


