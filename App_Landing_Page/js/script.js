// ---------------Pop_Up----------------------------------------
const popupOverlay = document.querySelector(".popup-overlay");
const popupContainer = document.querySelector(".popup-container");
const closePopupButton = document.getElementById("close-popup");
const button = document.querySelector(".btn");

function openPopup() {
  popupOverlay.style.display = "flex";
  setTimeout(() => {
    popupContainer.style.opacity = "1";
    popupContainer.style.transform = "scale(1)";
  }, 100);
}

function closePopup() {
  popupContainer.style.opacity = "0";
  popupContainer.style.transform = "scale(0.8)";
  setTimeout(() => {
    popupOverlay.style.display = "none";
  }, 300);
}

// Automatically open the popup when the page loads
window.addEventListener("load", openPopup);

closePopupButton.addEventListener("click", closePopup);

button.addEventListener("click" , openPopup);
// ---------------Pop_Up----------------------------------------



//------------------------UI_Part------------------------------
var TrandingSlider = new Swiper('.tranding-slider', {
    effect: 'coverflow',
    grabCursor: true,
    centeredSlides: true,
    loop: true,
    slidesPerView: 'auto',
    coverflowEffect: {
      rotate: 0,
      stretch: 0,
      depth: 100,
      modifier: 2.5,
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    }
  });
//---------------------------UI_Part--------------------------

  

// --------------------About_us_slider-----------------
$('.about_slider').slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 3,
    arrows: true,
    prevArrow:'<i class="fa-solid fa-arrow-left-long left"></i>',
    nextArrow:'<i class="fa-solid fa-arrow-right-long right"></i>',
  
  });
// -----------------About_Us_Slider---------------------

