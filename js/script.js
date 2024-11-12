const swiper = new Swiper('.swiper', {
    speed: 500,
    spaceBetween: 100,
    loop: true,
    autoplay: {
        delay: 3000,
        disableOnInteraction: false,
      },
    // pagination: {
    //     el: '.swiper-pagination',
    //   },
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

 function menutoggle(){
  const hamburgerIcon = document.getElementById("hamburgerIcon");
  menu = document.querySelector(".menu-content");
  menu.classList.toggle("hidden");
  if (menu.classList.contains("hidden")){
    hamburgerIcon.classList.remove("fa-times");
    hamburgerIcon.classList.add("fa-bars");

  } else{
    hamburgerIcon.classList.remove("fa-bars");
    hamburgerIcon.classList.add("fa-times");
  }
 }