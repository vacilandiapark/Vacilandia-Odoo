const swiperEl = document.getElementById('carrusel-banner')
const swiperE2 = document.getElementById('carrusel-promotions')
const swiperE3 = document.getElementById('carrusel-atractions')
const swiperE4 = document.getElementById('carrusel-servicios')

const params = {
  injectStyles: [`

      .swiper{
        overflow: visible;
      }
      
      .swiper-button-next,
      .swiper-button-prev{
        background: #fff;
        padding: 2px 10px;
        border-radius: 50%;
        z-index: 2;
        box-shadow: 0 0.25rem 1.5rem rgba(0, 0, 0, 0.15);
        transition: all 0.3s;
        border: 1px solid #999;
      }

      .swiper-button-next:hover,
      .swiper-button-prev:hover{
        background: rgba(0,0,0,1);
      }

      .swiper-button-next:hover svg,
      .swiper-button-prev:hover svg{
        color: white;
      }

      .swiper-button-next svg,
      .swiper-button-prev svg{
        color: black;
        width: 8px;
        text-align: center;
      }
      `],

}

Object.assign(swiperEl, params)
Object.assign(swiperE2, params)
Object.assign(swiperE3, params)
Object.assign(swiperE4, params)

swiperEl.initialize();
swiperE2.initialize();
swiperE3.initialize();
swiperE4.initialize();