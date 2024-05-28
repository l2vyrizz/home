const githubButton = document.getElementById('github-button');
const youtubeButton = document.getElementById('youtube-button');
const tiktokButton = document.getElementById('tiktok-button');
const instagramButton = document.getElementById('instagram-button');

githubButton.addEventListener('click', () => {
  window.location.href = 'https://github.com/rizzcc';
  playAnimation();
});

youtubeButton.addEventListener('click', () => {
  window.location.href = 'https://www.77.com';
  playAnimation();
});

tiktokButton.addEventListener('click', () => {
  window.location.href = 'https://www.88.com';
  playAnimation();
});

instagramButton.addEventListener('click', () => {
  window.location.href = 'https://www.99.com';
  playAnimation();
});

function playAnimation() {
  const backgroundContainer = document.querySelector('.background-container');
  backgroundContainer.classList.add('animate');

  setTimeout(() => {
    backgroundContainer.classList.remove('animate');
  }, 1000);
}
