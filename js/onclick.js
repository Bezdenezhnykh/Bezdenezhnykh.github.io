var accordion_elements = document.getElementsByClassName('accordion__block-header');
var accordion_active = null;
for (var i=0; i<accordion_elements.length; i++){
  var acc_elem=accordion_elements[i];
  acc_elem.addEventListener("click", function() {
    if($(this).parent().hasClass('accordion__block--active')) accordion_active = 1;
    $('.accordion__block').removeClass('accordion__block--active');
    $('.accordion__block-icon').text('+');
    if (!accordion_active){
      $(this).parent().addClass('accordion__block--active');
      $(this).find('.accordion__block-icon').text('-');
    }
    accordion_active = null;
  })
}

var search_active = document.getElementsByClassName('navigation__search-renamer');
search_active[0].addEventListener("click", function() {
  $('.navigation__search').toggleClass('navigation__search--hidden');
  $('.navigation__search').toggleClass('navigation__search--active');
})

var navigation_elements = document.getElementsByClassName('nav-item__link');
for (var i=0; i<navigation_elements.length; i++){
  var nav_elem=navigation_elements[i];
  nav_elem.addEventListener("click", function() {
    $('.nav-item__link').removeClass('nav-item__link--active');
    $(this).addClass('nav-item__link--active');
  })
}

var projects_like = document.getElementsByClassName('project__likes');
for (var i=0; i<projects_like.length; i++){
  var prj_like=projects_like[i];
  prj_like.addEventListener("click", function() {
    var likes_count = 12;
    $(this).toggleClass('project__likes--active');
    if($(this).hasClass('project__likes--active')) likes_count++;
    $(this).find('.project__like-count').text(likes_count);
  })
}

var projects__project = document.getElementsByClassName('projects__project');
var projects_active = null;
for (var i=0; i<projects__project.length; i++){
  var project=projects__project[i];
  project.addEventListener("click", function(e) {
    $('.projects__project').removeClass('projects__project--active');
      $(this).addClass('projects__project--active');
  })
}

$(document.body).on('click', function(e){
  if(!$(e.target).closest('.projects__project').length){
    $('.projects__project').removeClass('projects__project--active');
  }
})

var block_elements = document.getElementsByClassName('blog-body__link');
for (var i=0; i<block_elements.length; i++){
  var block_elem=block_elements[i];
  block_elem.addEventListener("click", function() {
    $('.blog-body__link').removeClass('blog-body__link--active');
    $(this).addClass('blog-body__link--active');
  })
}
