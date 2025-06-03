// Contact form alert
document.querySelector('form').addEventListener('submit', function (e) {
  e.preventDefault();
  alert('Thank you for contacting CodeTroon!');
});

// Hamburger menu toggle
document.getElementById('hamburger').addEventListener('click', function () {
  document.getElementById('nav-links').classList.toggle('active');
});
