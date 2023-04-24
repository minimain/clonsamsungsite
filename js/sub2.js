window.addEventListener('load', () => {


// sub2
const gnbMenu = document.querySelectorAll(".gnb>ul>li"); //큰 li 클릭
const headerWrap =document.querySelector(".header_wrap"); //전체 header
// const subMenu = document.querySelectorAll(".gnb>ul>li>div");
const btnPlay = document.querySelector(".btn_play"); //

for(var i=0;i<gnbMenu.length;i++){
  gnbMenu[i].addEventListener("mouseover", e=>{
    e.currentTarget.classList.add("on") //e=li
    var ht = e.currentTarget.children[1].offsetHeight; //높이값
    headerWrap.style.height =`${70+ht}px`
  })

  gnbMenu[i].addEventListener("mouseout", e=>{
    e.currentTarget.classList.remove("on");
    headerWrap.style.height = `70px`;
  })

  // 키보드 tab
  gnbMenu[i].children[0].addEventListener("focus",e =>{
    e.currentTarget.parentElement.classList.add("on")
  var ht = currentTarget.nextElementSibling.offsetHeight;
  headerWrap.style.height = `${70+ht}px`;
  })

  gnbMenu[i].children[0].addEventListener("blur", e=>{
    e.currentTarget.parentElement.classList.remove("on");
    headerWrap.style.height =`70px`;
  })
}

// 검색박스
const btnSrch =document.querySelector(".btn_srch");
const srchWrap =document.querySelector(".srch_wrap");
const btnSrchClose =document.querySelector(".btn_srch_close");

btnSrch.addEventListener("click", e=>{
  e.preventDefault();
  srchWrap.classList.add("on");
});
btnSrchClose.addEventListener("click", e=>{
  e.preventDefault();
  srchWrap.classList.remove("on");
});

// 스크롤 top | top버튼
const btnTop = document.querySelector("a.btn_top");

// 클릭하면 스크롤이 맨위로 올라감
btnTop.addEventListener("click", e =>{
  e.preventDefault();
  window.scroll({
    top:0,
    left:0,
    behavior:"smooth"
  });
});

// 스크롤을 움직이면 스크롤 위치에 따라서 탑버튼이 바뀜
window.addEventListener("scroll", () =>{
  let scroll = document.querySelector("html").scrollTop;
  console.log(scroll);
  if(scroll <= 50){
    btnTop.classList.remove("on","ab");
  }else if(scroll >4697){
    btnTop.classList.add("ab");
    btnTop.classList.add("on");
  }else{
    btnTop.classList.remove("ab");
    btnTop.classList.add("on");
  }
});

});