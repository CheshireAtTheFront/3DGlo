const menu = () => {
  const menu = document.querySelector("menu");
  const body = document.querySelector("body");

  body.addEventListener("click", (e) => {
    let itemMenu = e.target;
    if (itemMenu.closest(".menu") || itemMenu.classList.contains("close-btn")) {
      menu.classList.toggle("active-menu");
    } else if (!itemMenu.matches("menu") && !itemMenu.matches("menu li")) {
      menu.classList.remove("active-menu");
    } else {
      menu.classList.add("active-menu");
    }
  });
};

export default menu;
