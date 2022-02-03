$(window).on('load', function () {
        var $preloader = document.getElementById('#p_prldr')
        // var $svg_anm = document.getElementsByClassName('.svg_anm')
      var $preloader = $('#p_prldr'),
          $svg_anm   = $preloader.find('.svg_anm');
      $svg_anm.delay(100).fadeOut('slow');
      $preloader.delay(100).fadeOut('slow');
  });

  