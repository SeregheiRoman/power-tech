$("#block-four").slick({
  mobileFirst: true,
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
  responsive: [
    {
      breakpoint: 768,
      settings: "unslick",
    },
  ],
});
