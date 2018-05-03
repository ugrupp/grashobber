// Reveal animations
// scrollreaveal should be a window variable, set in the <head> script

if (typeof window.sr !== 'undefined') {
  // Disable reveal on pageload
  // https://github.com/jlmakes/scrollreveal/issues/276

  window.sr.reveal('[data-reveal]', {
    duration: 750,
    distance: '3em',
    scale: 1,
    interval: 100,
    viewFactor: 0.1,
  });
}
