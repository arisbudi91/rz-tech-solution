$(window).on("load", function () {
  $(".aKiri").addClass("aMuncul");
  $(".aKanan").addClass("aMuncul");
  $(".aButton").addClass("aMuncul");
});

$(window).scroll(function () {
  var wScroll = $(this).scrollTop();

  //   jumbotron

  $(".jumbotron h1").css({
    transform: "translate(0px, " + wScroll / 4 + "%)",
  });

  $(".jumbotron h2").css({
    transform: "translate(0px, " + wScroll / 2 + "%)",
  });

  $(".jumbotron p").css({
    transform: "translate(0px, " + wScroll / 2 + "%)",
  });

  //   Tentang
  if (wScroll > $(".about").offset().top - 200) {
    $(".about").each(function (i) {
      setTimeout(function () {
        $(".about ").eq(i).addClass("aMuncul");
      }, 300 * (i + 1));
    });
  }

  //   Projects
  if (wScroll > $(".card").offset().top - 300) {
    $(".card").each(function (i) {
      setTimeout(function () {
        $(".card ").eq(i).addClass("muncul");
      }, 300 * (i + 1));
    });
  }
});
