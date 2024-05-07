const swiperEl = document.getElementById('carousel_promotions')
const swiperE2 = document.getElementById('carousel_announcements')
const swiperE3 = document.getElementById('carousel_atractions')

const params = {
    injectStyles: [`
      .swiper-button-next,
      .swiper-button-prev{
        background: rgba(255,255,255);
        padding: 2px 10px;
        border-radius: 50%;
        z-index: 2;
        box-shadow: 0 0 25px 3px rgba(0, 0, 0, .166);
      }

      
      .swiper-button-next svg,
      .swiper-button-prev svg{
        color: black;
        width: 7px;
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