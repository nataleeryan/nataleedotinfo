var app = document.getElementById('app');

var typewriter = new Typewriter(app, {
    loop: true
});

typewriter.typeString(' UX/UI designer.')
    .pauseFor(2200)
    .deleteAll()
    .typeString(' developer.')
    .pauseFor(2200)
    .deleteAll()
    .typeString('n advocate for inclusive design.')
    .pauseFor(2200)
    .deleteAll()
    .typeString('n illustrator.')
    .pauseFor(2200)
    .deleteAll()
    .typeString(' music enthusiast.')
    .deleteChars(11)
    .typeString('connoisseur.')
    .pauseFor(2200)
    .start();



    $(document).ready(function(){
        $('a[href^="#"]').on('click',function (e) {
            e.preventDefault();
            var target = this.hash;
            $target = $(target);
            $('html, body').stop().animate({
                'scrollTop':  $target.offset().top //no need of parseInt here
            }, 900, 'swing', function () {
                window.location.hash = target;
            });
        });
    });

  $(window).scroll(function(){
    $(".top").css("opacity", 1 - $(window).scrollTop() / 250);
  });


    // $(function(){
    //     $('a').each(function(){
    //         if ($(this).prop('href') == window.location.href) {
    //             $(this).addClass('active'); $(this).parents('li').addClass('active');
    //         }
    //     });
    // });
