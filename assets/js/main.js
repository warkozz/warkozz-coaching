document.addEventListener('DOMContentLoaded', function () {
  var toggle = document.getElementById('navToggle');
  if (!toggle) return;

  toggle.addEventListener('click', function () {
    document.body.classList.toggle('nav-open');
    var icon = toggle.querySelector('i');
    var isOpen = document.body.classList.contains('nav-open');
    icon.className = isOpen ? 'fa-solid fa-xmark' : 'fa-solid fa-bars';
    toggle.setAttribute('aria-label', isOpen ? 'Fermer le menu' : 'Ouvrir le menu');
  });

  var links = document.querySelectorAll('.nav-links a');
  links.forEach(function (link) {
    link.addEventListener('click', function () {
      document.body.classList.remove('nav-open');
      var icon = toggle.querySelector('i');
      icon.className = 'fa-solid fa-bars';
    });
  });
});
