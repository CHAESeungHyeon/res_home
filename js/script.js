//toggle버튼과 .gnb요소를 선택
const toggle = document.querySelector(".toggle");
const gnb = document.querySelector(".gnb");

toggle.addEventListener("click", (e) => {
  e.preventDefault();//기본 링크기능을 제거
  console.log(getComputedStyle(gnb).maxHeight)
  // gnb의 css속성인 maxHeight값을 읽어옴
  const gnbMH = getComputedStyle(gnb).maxHeight;
  if(gnbMH === "0px"){//gnb의 maxHeight값이 "0px"이면
    gnb.classList.add("active");//active클래스를 추가하여 gnb를 펼쳐줍니다
  }else{//gnb의 maxHeight값이 "0px"이 아니면
    gnb.classList.remove("active");//active클래스를 제거하여 gnb를 접어줍니다 
  }
})
//브라우저의 넓이가 768px 이상일때 gnb의 active클래스를 제거
addEventListener("resize", () => {
  const wd = window.innerWidth;
  if(wd >= 768){
    gnb.classList.remove("active");
  }
})