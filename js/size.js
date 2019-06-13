var globalResizeTimerone = null;
$(document).ready(function(){
  $('.project__about').height($('.project__about').width()*95/388);
  $(window).resize(function(){
    if(globalResizeTimerone != null) window.clearTimeout(globalResizeTimerone);
      globalResizeTimerone = window.setTimeout(function() {
        $('.project__about').height($('.project__about').width()*95/388);
      }, 300);
  });
});

$(document).ready(function(){
  $('.blogs__blog-img').height($('.blogs__blog-img').width());
  $(window).resize(function(){
    $('.blogs__blog-img').height($('.blogs__blog-img').width());
  });
});

$(document).ready(function(){
  $('.accordion__block-icon').width($('.accordion__block-icon').height());
  $(window).resize(function(){
    $('.accordion__block-icon').width($('.accordion__block-icon').height());
  });
});

$(document).ready(function(){
  $('.blue-box__picture').height($('.blue-box__picture').width()*432/676);
  $(window).resize(function(){
    $('.blue-box__picture').height($('.blue-box__picture').width()*432/676);
  });
});

$(document).ready(function(){
  $('.footer__twits-icon').width($('.footer__twits-icon').height());
  $(window).resize(function(){
    $('.footer__twits-icon').width($('.footer__twits-icon').height());
  });
});

$(document).ready(function(){
  $('.footer__input-submit').width($('.footer__input-submit').height());
  $(window).resize(function(){
    $('.footer__input-submit').width($('.footer__input-submit').height());
  });
});
