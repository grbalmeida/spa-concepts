;(function () {
  'use strict'

  var $links = document.querySelectorAll('a')
  var $h1 = document.querySelector('h1')

  $links.forEach(function ($link) {
    $link.addEventListener('click', handleClick, false)
  })

  window.onpopstate = function (e) {
    navigation({ url: e.state.url })
  }

  function navigation (state) {
    var titles = {
      '/': 'Home',
      '/about': 'About'
    }
    $h1.textContent = titles[state.url]
  }

  function handleClick (e) {
    e.preventDefault()
    var state = {}
    var title = ''
    var url = e.target.getAttribute('href')
    var state = { url: url }
    history.pushState(state, title, url)
    navigation({ url: url })
  }
})()
