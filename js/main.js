// main.js
window.addEventListener('load', () => {


const gnbMenu = document.querySelectorAll(".gnb>ul>li"); //큰 li 클릭
const headerWrap =document.querySelector(".header_wrap"); //전체 header
const btnPlay = document.querySelector(".btn_play");

for(var i=0;i<gnbMenu.length;i++){
  gnbMenu[i].addEventListener("mouseover", e=>{
    e.currentTarget.classList.add("on");
    var ht = e.currentTarget.children[1].offsetHeight;
    headerWrap.style.height =`${70+ht}px`;
  })

  gnbMenu[i].addEventListener("mouseout", e=>{
    e.currentTarget.classList.remove("on");
    headerWrap.style.height = `70px`;
  })

  // 키보드 tab
  gnbMenu[i].children[0].addEventListener("focus",e =>{
    e.currentTarget.parentElement.classList.add("on");
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

// 오토배너

// next 버튼 클릭
//오토배너 5초마다
const btnNext = document.querySelector("a.btn_next");
const btnPrev =document.querySelector("a.btn_prev"); 
const slide =document.querySelectorAll("li.slide");
const slideRoll =document.querySelectorAll(".slide_roll li");

let bnnNum=0;
let lastNum = document.querySelectorAll(".slide_wrap >li").length -1;

function activation(index,list){
  for(let el of list){
    el.classList.remove("on","active");
  }
  list[index].classList.add("on","active");
}

btnNext.addEventListener("click", e=>{
  e.preventDefault();
  bnnNum++;
  if(bnnNum>lastNum) bnnNum=0;
  activation(bnnNum,slide);
  activation(bnnNum,slideRoll);
});

//prev버튼
btnPrev.addEventListener("click", e=>{
  bnnNum--;
  if(bnnNum<0) bnnNum=lastNum;
  activation(bnnNum,slide);
  activation(bnnNum,slideRoll);
});

//오토배너
function autoBanner(){
  //next버튼 눌렀을때
  bnnNum++;
  if(bnnNum>lastNum) bnnNum=0;
  activation(bnnNum,slide);
  activation(bnnNum,slideRoll);
  autoBnn = setTimeout(autoBanner,5000);
}
let autoBnn =setTimeout(autoBanner,5000);

// 배너 재생 멈춤 버튼
let flag = true;

btnPlay.addEventListener("click", e=>{
  e.preventDefault();
  if(flag){ //처음에는 멈춰라
  btnPlay.classList.add("on");
  clearTimeout(autoBnn);
  flag = false;
  
  }else{
  btnPlay.classList.remove("on");
  autoBnn.setTimeout(autoBanner,5000);
  flag = true;
  }
});

//롤링버튼
for(let i=0; i<slideRoll.length;i++){
  slideRoll[i].addEventListener("click",e=>{
    e.preventDefault();
    activation(i,slide);
    activation(i,slideRoll);
  })};

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
  //let scroll = window.pageYoffset;
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

const content1 = document.querySelector('.content1');
const content2 = document.querySelector('.content2');
const newsletter = document.querySelector('.newsletter');
const con3Block1 = document.querySelector('.con3_list_block1');
const con3Block2 = document.querySelector('.con3_list_block2');
const con3Block3 = document.querySelector('.con3_list_block3');

window.addEventListener("scroll", () =>{
  let scrollcon = document.querySelector("html").scrollTop;
  if(scrollcon >=3240){
    con3Block3.classList.add('on');
  }else if(scrollcon >=2920){
    con3Block2.classList.add('on');
  }else if(scrollcon >=2610){
    con3Block1.classList.add('on');
  }else if(scrollcon >=1500){
    newsletter.classList.add('on');
  }else if(scrollcon >=1200){
    content2.classList.add('on');
  }else if(scrollcon >=600){
    content1.classList.add('on');
  }
});


const con2Li = document.querySelectorAll('.content2>ul>li');

for(let i=0;i<con2Li.length;i++){
  con2Li[i].addEventListener('mouseover', e =>{
    con2Li[i].classList.add('on');
  })
  con2Li[i].addEventListener('mouseout', e =>{
    con2Li[i].classList.remove('on');
  })
};

const newsBtn = document.querySelectorAll('.newsletter>ul>li');
for(let i=0;i<newsBtn.length;i++){
  newsBtn[i].addEventListener('mouseover', e =>{
    newsBtn[i].classList.add('on');
  })
  newsBtn[i].addEventListener('mouseout', e=>{
    newsBtn[i].classList.remove('on');
  })
};

const con3List = document.querySelectorAll('.content3_list>div');
for(let i=0;i<con3List.length;i++){
  con3List[i].addEventListener("mouseover", e =>{
    con3List[i].classList.add('mo');
  })
  con3List[i].addEventListener("mouseout", e =>{
    con3List[i].classList.remove('mo');
  })
};
});















