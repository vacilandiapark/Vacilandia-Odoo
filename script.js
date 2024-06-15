document.addEventListener('DOMContentLoaded', function() {
  const swiperEl = document.getElementById('carrusel-banner');
  const swiperE2 = document.getElementById('carrusel-promotions');
  const swiperE3 = document.getElementById('carrusel-atractions');
  const swiperE4 = document.getElementById('carrusel-servicios');
  const swiperE5 = document.getElementById('carta-banner');

  const params = {
    injectStyles: [`
      .swiper {
        overflow: visible;
      }
      
      .swiper-button-next,
      .swiper-button-prev {
        background: #fff;
        padding: 2px 10px;
        border-radius: 50%;
        z-index: 2;
        box-shadow: 0 0.25rem 1.5rem rgba(0, 0, 0, 0.15);
        transition: all 0.3s;
        border: 1px solid #999;
      }

      .swiper-button-next:hover,
      .swiper-button-prev:hover {
        background: rgba(0, 0, 0, 1);
      }

      .swiper-button-next:hover svg,
      .swiper-button-prev:hover svg {
        color: white;
      }

      .swiper-button-next svg,
      .swiper-button-prev svg {
        color: black;
        width: 8px;
        text-align: center;
      }
    `]
  };

  if (swiperEl) Object.assign(swiperEl, params);
  if (swiperE2) Object.assign(swiperE2, params);
  if (swiperE3) Object.assign(swiperE3, params);
  if (swiperE4) Object.assign(swiperE4, params);
  if (swiperE5) Object.assign(swiperE5, params);

  if (swiperEl) swiperEl.initialize();
  if (swiperE2) swiperE2.initialize();
  if (swiperE3) swiperE3.initialize();
  if (swiperE4) swiperE4.initialize();
  if (swiperE5) swiperE5.initialize();
});
