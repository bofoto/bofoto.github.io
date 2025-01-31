var eachCard = document.querySelectorAll('.card')
eachCard.forEach(function (card) {
  card.addEventListener('mousemove', function (e) {
    var x = e.offsetX
    var y = e.offsetY

    rotateY = -3 / 30 * x + 15
    rotateX = 3 / 30 * y - 15
    card.style = ` transform : perspective(900px) rotateY(${rotateY}deg) rotateX(${rotateX}deg)`

  });

  card.addEventListener('mouseleave', function () {
    card.style = ``
  });

});
//=================================================================
//모달 관련 스크립트
document.addEventListener("DOMContentLoaded", function () {
  //elements
  //var modalBtn = document.getElementById("modalBtn");-테스트용 
  var modal = document.getElementById("myModal");
  var modalBody = document.getElementById("modalBody");
  var closeBtn = document.getElementById("closeBtn");
  var cards = document.querySelectorAll(".card");
  var modalContent = document.querySelector(".modal-content h3"); //-모달 테스트용 삭제예정정
  const iframe = document.createElement("iframe");
  const {mWidth,mHeight}=0;
  var cardContentMapping = { 
    0: "Profill/Profill.html" ,
    1: "Front/Front.html",
    2: "Back/Back.html"
  };
  //functions
  function toggleModal() {
    modal.classList.toggle("show");
  }
  function loadIframe(cardIndex) {
    modalBody.innerHTML = ""; // 기존 모달 내용 초기와
    iframe.src = cardContentMapping[cardIndex];
    iframe.style.border = "none";
    iframe.style.width = mWidth+"px";
    iframe.style.height = mHeight+"px";
    modalBody.appendChild(iframe); //모달 바디에 추가
  }

  //events
  
  //하위 폴더 html에서 iframe 크기조정 메시지 수신
  window.addEventListener("message",(e)=>{
    if(!e.origin.includes(window.location.origin)) return;
    const { width, height}= e.data;
    console.log(width, height);

    if(width && height){
      const modalContent = modal.querySelector(".modal-content");
      modalContent.style.width = width+"px";
      modalContent.style.height = height+25+"px";
      mWidth= width;
      mHeight= height;
    }
  })

  //modalBtn.addEventListener("click", toggleModal);
  closeBtn.addEventListener("click", toggleModal);
  cards.forEach(function (card, index) {
    card.addEventListener("click", function () {
      switch (index){
        case 0:
          modalContent.textContent = "Profill";
          break;
        case 1:
          modalContent.textContent = "FrontEnd";
          break;
        case 2:
          modalContent.textContent = "BackEnd";
          break;
        default:
          modalContent.textContent = "정해지지않은 카드입니다."
          break;
      }
      loadIframe(index);
      toggleModal();
    })
  })

  window, addEventListener("click", function (event) {
    // 모달의 검은색 배경을 클릭해도 닫히도록 하는 코드
    if (event.target === modal) {
      toggleModal();
    }
  })
})