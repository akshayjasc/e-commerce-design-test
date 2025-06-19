document.addEventListener('DOMContentLoaded', function() {
  var header = document.querySelector('.site-header');
  var lastScroll = 0;
  window.addEventListener('scroll', function() {
    if (window.scrollY > 1000) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  });

  // Search popup logic for desktop
  var searchIcon = document.querySelector('.navbar .nav-link[aria-label="Search"]');
  var searchPopup = document.getElementById('searchPopup');
  if (searchIcon && searchPopup) {
    searchIcon.addEventListener('click', function(e) {
      e.preventDefault();
      searchPopup.classList.add('active');
      // Optionally focus the input
      var input = searchPopup.querySelector('input[type="search"]');
      if (input) input.focus();
    });
  }
});
