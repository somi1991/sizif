$(function(){
  $("#slides").slidesjs({
    width: 960 ,
    height: 640 ,
    start: 1 ,
    navigation: false,
    pagination: false,
    effect: {
              fade: {
                speed: 400
              }
            },
    play: {
    active: false,
    auto: true,
    interval: 4000,
    pauseOnHover: true
        }

  });
});