import SmoothScroll from 'smooth-scroll';

document.addEventListener('DOMContentLoaded', () => {
  new SmoothScroll('[data-scroll-top]', {
    speed: 750,
    easing: 'easeOutQuad',
  });
});

document.addEventListener('DOMContentLoaded', () => {
  new SmoothScroll('[data-scroll-content]', {
    speed: 750,
    easing: 'easeOutQuad',
    offset: 40, // = page padding on xl
  });
});
