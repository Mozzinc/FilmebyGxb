function scrollToNext() {
    window.scrollBy({
      top: window.innerHeight,
      behavior: "smooth"
    });
  }
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function(e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute("href"));
      if (target) {
        target.scrollIntoView({ behavior: "smooth" });
      }
    });
  });
  const menuToggle = document.querySelector('.header-toggle');
const navMenu = document.querySelector('.nav-menu');

menuToggle.addEventListener('click', () => {
  navMenu.classList.toggle('show');
  menuToggle.classList.toggle('bi-list');
  menuToggle.classList.toggle('bi-x');
});