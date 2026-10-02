// Progressive enhancement: navigation and optional image slots.
const menuButton = document.querySelector('.menu-toggle');
const navigation = document.querySelector('#navigation');
function closeMenu() {
  menuButton?.setAttribute('aria-expanded', 'false');
  navigation?.classList.remove('is-open');
}
menuButton?.addEventListener('click', () => {
  const open = menuButton.getAttribute('aria-expanded') !== 'true';
  menuButton.setAttribute('aria-expanded', String(open));
  navigation.classList.toggle('is-open', open);
});
navigation?.querySelectorAll('a').forEach(link => link.addEventListener('click', closeMenu));
document.addEventListener('keydown', event => {
  if (event.key === 'Escape') document.querySelectorAll('.cv-download[open]').forEach(menu => {
    menu.open = false;
    menu.querySelector('summary').focus();
  });
  if (event.key === 'Escape' && menuButton?.getAttribute('aria-expanded') === 'true') {
    closeMenu();
    menuButton.focus();
  }
});
window.matchMedia('(min-width: 761px)').addEventListener('change', closeMenu);

// Missing optional files never create broken-image icons. The HTML fallback stays visible.
document.querySelectorAll('[data-image]').forEach(slot => {
  const image = new Image();
  const englishAlt = slot.classList.contains('portrait-slot') ? 'Portrait of Jonas Johansson' : (slot.dataset.alt || '');
  const updateAlt = () => { image.alt = window.PortfolioI18n?.t(englishAlt) || englishAlt; };
  updateAlt();
  document.addEventListener('portfolio:languagechange', updateAlt);
  image.decoding = 'async';
  image.onload = () => {
    slot.append(image);
    slot.classList.add('has-image');
  };
  image.src = slot.dataset.image;
});

// Toolkit: selecting a stage reveals its role in the actual projects.

    (() => {
      const root = document.getElementById('tools');
      if (!root) return;
      const detail = root.querySelector('#toolkit-stage-detail');
      const buttons = root.querySelectorAll('[data-stage]');
      const descriptions = {
        prepare: 'Reusable feature engineering in Churn Predictor; synthetic transaction data and feature building in Fraud Detection.',
        train: 'Logistic Regression in Churn Predictor and Random Forest in Fraud Detection, with MLflow tracking in both projects.',
        serve: 'FastAPI inference in both projects; Docker packaging and GitHub Actions checks, with separate services in Fraud Detection.',
        monitor: 'Evidently drift reporting and a Streamlit dashboard in Fraud Detection; script-based drift checks in Churn Predictor.'
      };
      let selectedStage = 'prepare';
      function renderDetail() {
        const text = descriptions[selectedStage];
        detail.textContent = window.PortfolioI18n?.t(text) || text;
      }
      document.addEventListener('portfolio:languagechange', renderDetail);
      renderDetail();
      buttons.forEach(button => {
        button.disabled = false;
        button.addEventListener('click', () => {
        buttons.forEach(item => item.setAttribute('aria-pressed', String(item === button)));
        selectedStage = button.dataset.stage;
        renderDetail();
        });
      });
    })();
  

// Native project scrolling: touch/trackpad/scrollbar work without JavaScript.
(() => {
  const track = document.getElementById('project-track');
  if (!track) return;
  const controls = document.querySelector('.project-scroll-controls');
  const previous = controls.querySelector('[data-project-direction="previous"]');
  const next = controls.querySelector('[data-project-direction="next"]');
  const cards = track.querySelectorAll('.project-card');
  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
  function update() {
    const end = Math.max(0, track.scrollWidth - track.clientWidth);
    previous.disabled = track.scrollLeft <= 2;
    next.disabled = track.scrollLeft >= end - 2;
  }
  function move(direction) {
    const gap = parseFloat(getComputedStyle(track).columnGap) || 0;
    const distance = cards[0].getBoundingClientRect().width + gap;
    track.scrollBy({ left: direction * distance, behavior: reducedMotion.matches ? 'instant' : 'smooth' });
  }
  previous.addEventListener('click', () => move(-1));
  next.addEventListener('click', () => move(1));
  track.addEventListener('scroll', update, { passive: true });
  track.addEventListener('keydown', event => {
    if (event.target !== track) return;
    if (event.key === 'ArrowLeft' || event.key === 'ArrowRight') {
      event.preventDefault();
      move(event.key === 'ArrowLeft' ? -1 : 1);
    }
    if (event.key === 'Home' || event.key === 'End') {
      event.preventDefault();
      track.scrollTo({ left: event.key === 'Home' ? 0 : track.scrollWidth, behavior: reducedMotion.matches ? 'instant' : 'smooth' });
    }
  });
  new ResizeObserver(update).observe(track);
  controls.hidden = false;
  update();
})();

// Close the CV chooser when a download is selected or focus moves outside.
document.querySelectorAll('.cv-download').forEach(menu => {
  menu.querySelectorAll('a').forEach(link => link.addEventListener('click', () => { menu.open = false; }));
  document.addEventListener('click', event => { if (!menu.contains(event.target)) menu.open = false; });
  menu.addEventListener('focusout', event => { if (!menu.contains(event.relatedTarget)) menu.open = false; });
});
