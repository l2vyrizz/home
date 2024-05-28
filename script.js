const githubButton = document.getElementById('github-button');
const scriptsButton = document.getElementById('scripts-button');
const menuButton = document.querySelector('.menu-button');
const menuOverlay = document.querySelector('.menu-overlay');
const menuItems = document.querySelectorAll('.menu-item');

githubButton.addEventListener('click', () => {
  window.location.href = 'https://github.com/rizzcc';
  playAnimation();
});

scriptsButton.addEventListener('click', () => {
  window.location.href = 'https://l2vyrizz.github.io/scripts/';
  playAnimation();
});

menuButton.addEventListener('click', () => {
  menuOverlay.style.display = 'flex';
});

menuOverlay.addEventListener('click', (event) => {
  if (event.target === menuOverlay) {
    menuOverlay.style.display = 'none';
  }
});

menuItems.forEach((item) => {
  item.addEventListener('click', () => {
    menuOverlay.style.display = 'none';
  });
});

function playAnimation() {
  const backgroundContainer = document.querySelector('.background-container');
  backgroundContainer.classList.add('animate');

  setTimeout(() => {
    backgroundContainer.classList.remove('animate');
  }, 1000);
}
