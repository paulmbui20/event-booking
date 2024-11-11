const swiper = new Swiper('.swiper', {
    speed: 400,
    spaceBetween: 100,
    loop: true,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
      },
    pagination: {
        el: '.swiper-pagination',
      },
      grabCursor: true,
       // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  }

  });
swiper.slideNext()
//back to top button code
const mobileMenu = document.getElementById("mobile-menu");
const menuItems = document.getElementById("menu-items");

function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: "smooth", // Smooth scrolling effect
  });
}
//darkmode toggle
function darkmode() {
    document.body.classList.toggle("darkmode");
 }