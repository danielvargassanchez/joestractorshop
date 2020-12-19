addEventListener("DOMContentLoaded", () => {
  const btnMenu = document.getElementById("btn-menu");
  const navbar = document.getElementById("navbar");
  if (btnMenu && navbar) {
    btnMenu.addEventListener("click", () => {
      console.log("evento");
      navbar.classList.toggle("show");
    });
  }
});
