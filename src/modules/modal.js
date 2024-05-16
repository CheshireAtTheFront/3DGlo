const modal = () => {
  const modal = document.querySelector(".popup");
  const buttons = document.querySelectorAll(".popup-btn");
  const closeBtn = modal.querySelector(".popup-close");
  const modalContent = modal.querySelector(".popup-content");

  buttons.forEach((btn) => {
    btn.addEventListener("click", () => {
      if (window.innerWidth > 768) {
        modal.style.display = "block";
        modalContent.style.opacity = 0;
        const interval = setInterval(() => {
          modalContent.style.opacity =
            parseFloat(modalContent.style.opacity) + 0.1;

          if (modalContent.style.opacity >= 1) {
            clearInterval(interval);
          }
        }, 30);
      } else {
        modal.style.display = "block";
      }
    });
  });

  closeBtn.addEventListener("click", () => {
    if (window.innerWidth > 768) {
      modalContent.style.opacity = 1;
      const interval = setInterval(() => {
        modalContent.style.opacity =
          parseFloat(modalContent.style.opacity) - 0.1;

        if (modalContent.style.opacity <= 0) {
          clearInterval(interval);
          modal.style.display = "none";
        }
      }, 30);
    } else {
      modal.style.display = "none";
    }
  });
};

export default modal;

// modalContent.style.opacity = ".5";
// setTimeout(() => {
//   modalContent.style.opacity = "1";
// }, 127);
