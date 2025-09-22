// simple loader -> show login after load (or remove loader once content ready)
window.addEventListener('load', () => {
  const loader = document.getElementById('loader');
  const box = document.querySelector('.login-box');

  // hide loader and show box
  if (loader) loader.style.display = 'none';
  if (box) box.style.display = 'block';
});
