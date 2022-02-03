var mySwiper = new Swiper('.swiper-container-dogs', {
    // Optional parameters
    direction: 'vertical',
    slidesPerView: 2.8378,
      spaceBetween: 25,
    // loop: true,
  
    // If we need pagination
    // pagination: {
    //   el: '.swiper-pagination',
    //   clickable: true,
    // },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },

    // autoplay: {
    //     delay: 5000,
    //   },
    
  })

  function getWindowWidth() {
    return window.innerWidth || document.body.clientWidth;
  }
  
  if (getWindowWidth() <= 1450) {
    var mySwiper = new Swiper('.swiper-container-dogs', {
      // Optional parameters
      direction: 'vertical',
      slidesPerView: 2.39,
        spaceBetween: 20,
      // loop: true,
    
      // If we need pagination
      // pagination: {
      //   el: '.swiper-pagination',
      //   clickable: true,
      // },
    
      // Navigation arrows
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
  
      // autoplay: {
      //     delay: 5000,
      //   },
      
    })
  }