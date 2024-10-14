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

// function initSwiperFormat() {
//   const swiper = new Swiper('.swiper-format', {
//     speed: 450,
//     effect: 'coverflow',
//     rewind: true,
//     updateOnWindowResize: true,
//     pagination: {
//       el: '.format-pagination',
//       type: 'progressbar',
//     },
//     breakpoints: {
//       200: {
//         slideToClickedSlide: true,
//         coverflowEffect: {
//           rotate: 60,
//           stretch: 14,
//           depth: 500,
//           scale: 0.7,
//           modifier: 1,
//           slideShadows: false,
//         },
//         allowTouchMove: true,
//       },
//       768: {
//         coverflowEffect: {
//           rotate: 0,
//           stretch: 0,
//           depth: 0,
//           modifier: 0,
//           slideShadows: false,
//         },
//         allowTouchMove: false,
//       },
//     },
//   })
// }

// function initSwiperGallery() {
//   const swiper = new Swiper('.swiper-gallery', {
//     speed: 550,
//     rewind: true,
//     slidesPerView: 3,
//     updateOnWindowResize: true,
//     centeredSlides: true,
//     initialSlide: 1,
//     effect: 'coverflow',
//     coverflowEffect: {
//       rotate: 0,
//       stretch: -10,
//       depth: -10,
//       scale: 0.84,
//       modifier: 0.7,
//       slideShadows: false,
//     },
//     pagination: {
//       el: '.gallery-pagination',
//       clickable: true,
//     },
//     navigation: {
//       prevEl: '.gallery-prev',
//       nextEl: '.gallery-next',
//     },
//     breakpoints: {
//       200: {
//         slidesPerView: 1,
//       },
//       768: {
//         slidesPerView: 3,
//       },
//       1024: {
//         slidesPerView: 3,
//       },
//       1400: {
//         slidesPerView: 3,
//       },
//     },
//   });
// }

// function initSwiperSupport() {
//   const swiper = new Swiper('.swiper-support', {
//     speed: 450,
//     effect: 'coverflow',
//     rewind: true,
//     updateOnWindowResize: true,
//     pagination: {
//       el: '.support-pagination',
//       type: 'progressbar'
//     },
//     breakpoints: {
//       200: {
//         slideToClickedSlide: true,
//         coverflowEffect: {
//           rotate: 70,
//           stretch: 20,
//           depth: 500,
//           scale: 0.9,
//           modifier: 1,
//           slideShadows: false,
//         },
//         allowTouchMove: true,
//       },
//       768: {
//         coverflowEffect: {
//           rotate: 0,
//           stretch: 0,
//           depth: 0,
//           modifier: 0,
//           slideShadows: false,
//         },
//         allowTouchMove: false,
//       },
//     },
//   })
// }

$(document).ready(function () {
  initSwiperMain()
  initSwiperFinances()
  // initSwiperFormat()
  // initSwiperGallery()
  // initSwiperSupport()
})
