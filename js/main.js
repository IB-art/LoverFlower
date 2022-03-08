$(function(){

  $('.header__burger-btn').on('click', function(){
    $('.header__menu-box').toggleClass('header__menu-box--active');
  });

  $('.rightside-menu__close').on('click', function(){
    $('.header__menu-box').toggleClass('header__menu-box--close');
  });
 
  $('.rightside-menu__close').on('click', function() {
    $('.header__menu-box').removeClass('header__menu-box--active');
  });
  



  $('.header-input').on('click', function(){
    $('.header-input').toggleClass('header-input--active');
  });

  $('.header-input').on('click', function(){
    $('.header-form').toggleClass('header-form--active');
  });

  $('.drop-down__item').on('click', function(){
    $('.drop-down__list').slideToggle();
  });

  $('.popular-slider').slick({
    prevArrow: '<button type="button" class="slick-prev"><img src="images/left.png" alt="img flor"></button>',
    nextArrow: '<button type="button" class="slick-next"><img src="images/right.png" alt="img flor"></button>',
    slidesToShow: 3,
    slidesToScroll: 3,
    responsive: [
      {
        breakpoint: 841,
        settings: {
          vertical: true,
          verticalSwiping: true,
          slidesToShow: 3,
         
        }
      },
    ]
  });
  

});