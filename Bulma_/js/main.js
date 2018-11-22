// Need: animate.css, headroom.js, and bulma

var burger = document.querySelector('.burger');
var nav = document.querySelector('#' + burger.dataset.target);
var header = document.querySelector('.headroom');

// Bulma responsive nav
burger.addEventListener('click', function(){
  burger.classList.toggle('is-active');
  nav.classList.toggle('is-active');
});

//Headroom (can link animate.css and use existing styles, e.g., slideInDown)
var headroom = new Headroom(header, {
 offset: 105,
 tolerance: 5,
 classes: {
   initial: "animated",
   pinned: "slideDown", // These are custom classes: see css!
   unpinned: "slideUp"
 }
});
headroom.init();