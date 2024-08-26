let modal;

document.addEventListener('DOMContentLoaded', function () {
  // Get the modal
  modal = document.getElementById("modal");
})

// When the user clicks the button, open the modal 
function openModal(id) {
  const iframeElement = document.querySelector("#bullpay_embed");
  iframeElement.src = `https://pay.bullverse.io/checkout/transaction/${id}`;

  modal.style.display = "block";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  const modelContent = document.querySelector(".modal-content");
  if (event.target == modal || event.target == modelContent) {
    modal.style.display = "none";
  }
}
