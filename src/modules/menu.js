const menu = () => {
  const menu = document.querySelector("menu");
  const body = document.querySelector("body");

  const toggleMenu = () => {
    body.addEventListener("click", (e) => {
      let listMenu = e.target;
      if (
        listMenu.closest(".menu") ||
        listMenu.classList.contains("close-btn")
      ) {
        menu.classList.toggle("active-menu");
      } else if (!listMenu.matches("menu")) {
        menu.classList.remove("active-menu");
      } else {
        menu.classList.add("active-menu");
      }
    });
  };
  toggleMenu();
};

export default menu;
