// Load case-study motion near the viewport, and play only while it is visible.
(() => {
  const videos = [...document.querySelectorAll('video[data-case-video]')];
  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
  const mobile = window.matchMedia('(max-width: 640px)');
  const connection = navigator.connection;
  const visible = new Set();
  const manualPlayback = () => reducedMotion.matches || connection?.saveData === true;

  function prepare(video) {
    const source = video.querySelector('source[data-src]');
    if (!source || source.hasAttribute('src')) return;
    source.src = mobile.matches ? source.dataset.mobileSrc : source.dataset.src;
    video.preload = manualPlayback() ? 'none' : 'auto';
    video.controls = manualPlayback();
    video.load();
  }

  function sync(video) {
    if (document.hidden || !visible.has(video) || manualPlayback()) {
      video.pause();
      if (manualPlayback()) video.controls = true;
      return;
    }
    prepare(video);
    video.play().catch(error => {
      // A poster and native play button remain usable in low-power mode.
      if (error.name !== 'AbortError') video.controls = true;
    });
  }

  videos.forEach(video => video.addEventListener('error', () => { video.controls = true; }));
  if (!('IntersectionObserver' in window)) {
    videos.forEach(video => { prepare(video); video.controls = true; });
    return;
  }
  const preloadObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      prepare(entry.target);
      preloadObserver.unobserve(entry.target);
    });
  }, { rootMargin: '600px 0px' });
  const playbackObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) visible.add(entry.target);
      else visible.delete(entry.target);
      sync(entry.target);
    });
  }, { threshold: 0.01 });
  videos.forEach(video => { preloadObserver.observe(video); playbackObserver.observe(video); });
  const syncAll = () => videos.forEach(sync);
  document.addEventListener('visibilitychange', syncAll);
  reducedMotion.addEventListener('change', syncAll);
  connection?.addEventListener('change', syncAll);
})();
