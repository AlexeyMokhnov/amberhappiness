var openModalEntry = document.querySelectorAll(".open-modal");
var showModalEntry = document.querySelectorAll(".modal");
var closeModalEntry = document.querySelectorAll(".modal__close");

for(var i = 0; i < openModalEntry.length; i++){
  openModalEntry[i].addEventListener("click", function(event) {
    event.preventDefault();
    showModalEntry[0].classList.add("modal_active");
  });
};

for(var i = 0; i < closeModalEntry.length; i++){
  closeModalEntry[i].addEventListener("click", function(event) {
    event.preventDefault();
    showModalEntry[0].classList.remove("modal_active");
  });
};
