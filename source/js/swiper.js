function initSwiperMain() {
  const swiper = new Swiper('.swiper-main', {
    speed: 450,
    effect: 'coverflow',
    rewind: true,
    updateOnWindowResize: true,
    pagination: {
      el: '.main-pagination',
      clickable: "true"
    },
    breakpoints: {
      200: {
        slideToClickedSlide: true,
        coverflowEffect: {
          rotate: 60,
          stretch: 20,
          depth: 500,
          scale: 0.8,
          modifier: 1,
          slideShadows: false,
        },
        allowTouchMove: true,
      },
      768: {
        coverflowEffect: {
          rotate: 0,
          stretch: 0,
          depth: 0,
          modifier: 0,
          slideShadows: false,
        },
        allowTouchMove: false,
      },
    },
  })
}

function initSwiperFinances() {
  const swiper = new Swiper('.swiper-finances', {
    speed: 450,
    effect: 'coverflow',
    rewind: true,
    updateOnWindowResize: true,
    pagination: {
      el: '.finances-pagination',
      clickable: "true"
    },
    breakpoints: {
      200: {
        slideToClickedSlide: true,
        coverflowEffect: {
          rotate: 60,
          stretch: 14,
          depth: 500,
          scale: 0.7,
          modifier: 1,
          slideShadows: false,
        },
        allowTouchMove: true,
      },
      768: {
        coverflowEffect: {
          rotate: 0,
          stretch: 0,
          depth: 0,
          modifier: 0,
          slideShadows: false,
        },
        allowTouchMove: false,
      },
    },
  })
}

function initSwiperCauses() {
  const swiper = new Swiper('.swiper-causes', {
    speed: 450,
    effect: 'coverflow',
    rewind: true,
    updateOnWindowResize: true,
    pagination: {
      el: '.causes-pagination',
      type: 'progressbar',
    },
    breakpoints: {
      200: {
        slideToClickedSlide: true,
        coverflowEffect: {
          rotate: 60,
          stretch: 14,
          depth: 500,
          scale: 0.7,
          modifier: 1,
          slideShadows: false,
        },
        allowTouchMove: true,
      },
      768: {
        coverflowEffect: {
          rotate: 0,
          stretch: 0,
          depth: 0,
          modifier: 0,
          slideShadows: false,
        },
        allowTouchMove: false,
      },
    },
  })
}

function initSwiperStages() {
  const swiper = new Swiper('.swiper-stages', {
    speed: 450,
    effect: 'coverflow',
    rewind: true,
    updateOnWindowResize: true,
    pagination: {
      el: '.stages-pagination',
      clickable: "true"
    },
    breakpoints: {
      200: {
        slideToClickedSlide: true,
        coverflowEffect: {
          rotate: 60,
          stretch: 14,
          depth: 500,
          scale: 0.7,
          modifier: 1,
          slideShadows: false,
        },
        allowTouchMove: true,
      },
      768: {
        coverflowEffect: {
          rotate: 0,
          stretch: 0,
          depth: 0,
          modifier: 0,
          slideShadows: false,
        },
        allowTouchMove: false,
      },
    },
  })
}

$(document).ready(function () {
  initSwiperMain()
  initSwiperFinances()
  initSwiperCauses()
  initSwiperStages()
})
