var mySwiper = new Swiper('.swiper-container-puppies', {
    // Optional parameters
    direction: 'horizontal',
    slidesPerView: 4,
    spaceBetween: 30,
    loop: false,
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
  
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
    var mySwiper = new Swiper('.swiper-container-puppies', {
      // Optional parameters
      direction: 'horizontal',
      slidesPerView: 3,
      spaceBetween: 20,
      loop: false,
    
      // If we need pagination
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
    
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

  function getWindowWidth() {
    return window.innerWidth || document.body.clientWidth;
  }
  
  if (getWindowWidth() <= 767) {
    var mySwiper = new Swiper('.swiper-container-puppies', {
      // Optional parameters
      direction: 'horizontal',
      slidesPerView: 1,
      spaceBetween: 60,
      loop: false,
    
      // If we need pagination
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
    
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