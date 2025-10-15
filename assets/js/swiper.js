


const swiper = new Swiper('.possibilities-swiper', {
    spaceBetween: 20,

  slidesPerView: 1,
  loop: true,
loopedSlides: 5,
loopAdditionalSlides: 3,
observer: true,
observeParents: true,

    pagination: {
        el: '.possibilities-swiper-pagination',
        clickable: true,
    },

   navigation: {
  nextEl: '.possibilities-arrows .swiper-button-next',
  prevEl: '.possibilities-arrows .swiper-button-prev',
},
    breakpoints: {
        320: { slidesPerView: 1 },
        490: { slidesPerView: 1.2 },
        620: { slidesPerView: 1.5 },
        810: { slidesPerView: 2 },
        992: { slidesPerView: 1 },
        1263: { slidesPerView: 1 },
        1300: { slidesPerView: 1 },
    },


});

const workSwiper = new Swiper('.work-process-swiper', {
    spaceBetween: 20,
    loop:true,
    slidesPerView:1,

    pagination: {
        el: '.work-swiper-pagination',
        clickable: true,
    },


});


