$(document).ready(function() {
  $('.sidenav').sidenav()
  $('.dropdown-button').dropdown({
    inDuration: 300,
    outDuration: 225,
    hover: true,
    belowOrigin: true,
    alignment: 'right'
  })

  $('.dropdown-inner-button').dropdown({
    inDuration: 300,
    outDuration: 225,
    hover: true,
    belowOrigin: true,
    alignment: 'right'
  })
})
