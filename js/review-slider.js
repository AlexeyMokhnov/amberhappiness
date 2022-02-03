var mySwiper = new Swiper('.swiper-container-review', {
    // Optional parameters
    direction: 'horizontal',
    spaceBetween: 30,
    loop: true,
  
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