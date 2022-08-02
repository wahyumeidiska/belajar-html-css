$(window).scroll(function () {
  const wScroll = $(this).scrollTop();

  // console.log(wScroll);

  if (wScroll > 5) {
    $(".navigation-bar").addClass("muncul");
  } else if (wScroll < 5) {
    $(".navigation-bar").removeClass("muncul");
  }
});
