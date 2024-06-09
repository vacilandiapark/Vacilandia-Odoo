const swiperEl = document.getElementById('carrusel-banner')
const swiperE2 = document.getElementById('carrusel-promotions')
const swiperE3 = document.getElementById('carrusel-atractions')

const params = {
  injectStyles: [`

      .swiper{
      overflow: visible;
      }

      .swiper-button-next,
      .swiper-button-prev{
        background: rgba(0,0,0, 0.9);
        padding: 2px;
        z-index: 2;
        box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
      }

      .swiper-button-next:hover,
      .swiper-button-prev:hover{
        background: rgba(0,0,0,1);
      }

      .swiper-button-next svg,
      .swiper-button-prev svg{
        color: white;
        width: 8px;
        text-align: center;
      }
      `],

}

Object.assign(swiperEl, params)
Object.assign(swiperE2, params)
Object.assign(swiperE3, params)

swiperEl.initialize();
swiperE2.initialize();
swiperE3.initialize();