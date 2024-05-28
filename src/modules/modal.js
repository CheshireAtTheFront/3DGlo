import { animate } from "./helpers";

const modal = () => {
  const modal = document.querySelector(".popup");
  const buttons = document.querySelectorAll(".popup-btn");
  const modalContent = modal.querySelector(".popup-content");

  buttons.forEach((btn) => {
    btn.addEventListener("click", () => {
      if (window.innerWidth > 768) {
        modal.style.display = "block";
        animate({
          duration: 400,
          timing(timeFraction) {
            return timeFraction;
          },
          // возвращает определенный отрезок от 0 до 1
          draw(progress) {
            modalContent.style.opacity = progress;
          },
        });
      } else {
        modal.style.display = "block";
      }
    });
  });

  modal.addEventListener("click", (e) => {
    if (
      !e.target.closest(".popup-content") ||
      e.target.classList.contains("popup-close")
    ) {
      if (window.innerWidth > 768) {
        animate({
          duration: 400,
          timing(timeFraction) {
            return timeFraction;
          },
          // возвращает определенный отрезок от 1 до 0
          draw(progress) {
            modalContent.style.opacity = 1 - progress;
            if (modalContent.style.opacity <= 0) {
              modal.style.display = "none";
            }
          },
        });
      } else {
        modal.style.display = "none";
      }
    }
  });
};

export default modal;
