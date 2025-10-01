function getCurrentYear() {
  return new Date().getFullYear();
}

window.addEventListener('DOMContentLoaded', function() {
  var copyright = document.querySelector('.copyright');
  if (copyright) {
    copyright.innerHTML = `&copy; KillroyDev, ${getCurrentYear()}`;
  }
});
