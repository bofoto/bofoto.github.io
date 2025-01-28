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
  // var modalContent = document.querySelector(".modal-content p"); -모달 테스트용 삭제예정정
  var cardContentMapping = { 0: "Profill/Profill.html" };
  //functions
  function toggleModal() {
    modal.classList.toggle("show");
  }
  function loadIframe(cardIndex) {
    modalBody.innerHTML = ""; // 기존 모달 내용 초기와
    const iframe = document.createElement("iframe");
    iframe.src = cardContentMapping[cardIndex];
    iframe.width = "100%";
    iframe.style.border = "none";
    iframe.onload = function(){
      adjustModalSize(iframe); // iframe 로드 후 크기 조정
    };
    modalBody.appendChild(iframe); //모달 바디에 추가
  }
  function adjustModalSize(iframe) {
  // const iframeDocument = iframe.contentWindow.document;
  const iframeHeight = 500; //iframeDocument.body.scrollHeight; //iframe 콘텐츠 높이 계산
  iframe.style.height = iframeHeight+"px";    //iframe 높이 조정
  const modalContent = modal.querySelector(".modal-content");
  modalContent.style.height = iframeHeight+50+"px"; //모달 높이 조정 
  // modalContent.style.width = 300+"px";
  }
  //events
  //modalBtn.addEventListener("click", toggleModal);
  closeBtn.addEventListener("click", toggleModal);
  cards.forEach(function (card, index) {
    card.addEventListener("click", function () {
      // switch (index){
      //   case 0:
      //     modalContent.textContent = "Profill 카드에 들어갈 내용";
      //     break;
      //   case 1:
      //     modalContent.textContent = "FrontEnd 카드에 들어갈 내용";
      //     break;
      //   case 2:
      //     modalContent.textContent = "BackEnd 카드에 들어갈 내용";
      //     break;
      //   default:
      //     modalContent.textContent = "정해지지않은 카드입니다."
      //     break;
      // }
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