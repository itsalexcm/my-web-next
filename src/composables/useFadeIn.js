export function runFadeIn() {
  const elements = document.querySelectorAll('.fade-in');

  document.body.classList.add('enable-transitions');

  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    elements.forEach(el => el.classList.add('visible'));
    return;
  }

  elements.forEach(el => el.classList.remove('visible'));

  setTimeout(() => {
    elements.forEach(el => el.classList.add('visible'));
  }, 100);
}
