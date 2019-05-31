$(document).ready(function() {
  $(window).scroll(function() {
    if ($(window).scrollTop() > 200) {
      $('nav li').addClass('grey lighten-5')
    } else {
      $('nav li').removeClass('grey lighten-5')
    }
  })
})
