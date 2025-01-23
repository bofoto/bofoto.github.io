var eachCard = document.querySelectorAll('.card')
eachCard.forEach(function(card) {
  card.addEventListener('mousemove', function (e) {
    var x = e.offsetX
    var y = e.offsetY

    rotateY = -4 / 30 * x + 20
    rotateX = 4 / 30 * y - 20
    card.style = ` transform : perspective(900px) rotateY(${rotateY}deg) rotateX(${rotateX}deg)`

  });
  
  card.addEventListener('mouseleave', function () {
    card.style = ``
  });
  
});
//=================================================================
//모달 관련 스크립트
document.addEventListener("DOMContentLoaded", function(){
  //elements
  var modalBtn = document.getElementById("modalBtn");
  var modal = document.getElementById("myModal");
  var closeBtn = document.getElementById("closeBtn");
  var cards = document.querySelectorAll(".card");
  var modalContent = document.querySelector(".modal-content p");
  //functions
  function toggleModal(){
    modal.classList.toggle("show");
  }
  //events
  modalBtn.addEventListener("click", toggleModal);
  closeBtn.addEventListener("click",toggleModal);
  cards.forEach(function(card, index){
    card.addEventListener("click", function(){
      switch (index){
        case 0:
          modalContent.textContent = "Profill 카드에 들어갈 내용";
          break;
        case 1:
          modalContent.textContent = "FrontEnd 카드에 들어갈 내용";
          break;
        case 2:
          modalContent.textContent = "BackEnd 카드에 들어갈 내용";
          break;
        default:
          modalContent.textContent = "정해지지않은 카드입니다."
          break;
      }
      toggleModal();
    })
  })

  window,addEventListener("click", function (event){
    // 모달의 검은색 배경을 클릭해도 닫히도록 하는 코드
    if (event.target === modal){
      toggleModal();
    }
  })
})