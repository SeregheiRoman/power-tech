const sliderSettings = {
  autoplay: true,
  autoplaySpeed: 4000,
  speed: 500,
  arrows: false,
  infinite: true,
  centerMode: true,
  variableWidth: true,
  initialSlide: 1,
  dots: true,
  // appendDots: "",
  mobileFirst: true,
  responsive: [
    {
      breakpoint: 768,
      settings: 'unslick',
      // settings: 'getSlick',
    },
  ],
};

const sl = $('#block-four').slick(sliderSettings);

$(window).on('resize', function () {
  if ($(window).width() < 768 && !sl.hasClass('slick-initialized')) {
    $('#block-four').slick(sliderSettings);
  }
});
