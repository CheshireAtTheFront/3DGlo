const menu = () => {
  const menu = document.querySelector("menu");
  const body = document.querySelector("body");

  body.addEventListener("click", (e) => {
    let listMenu = e.target;
    if (listMenu.closest(".menu") || listMenu.classList.contains("close-btn")) {
      menu.classList.toggle("active-menu");
    } else if (!listMenu.matches("menu") && listMenu.tagName != "LI") {
      menu.classList.remove("active-menu");
    } else {
      menu.classList.add("active-menu");
    }
  });
};

export default menu;
