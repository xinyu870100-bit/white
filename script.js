
(() => {
  const lightbox = document.getElementById('lightbox');
  if (!lightbox) return;
  const img = document.getElementById('lightbox-image');
  const title = document.getElementById('lightbox-title');
  const desc = document.getElementById('lightbox-desc');
  const openers = document.querySelectorAll('.modal-card');
  const closeButtons = lightbox.querySelectorAll('[data-close-lightbox]');

  function openModal(card) {
    img.src = card.dataset.modalImage || '';
    img.alt = card.dataset.modalTitle || '';
    title.textContent = card.dataset.modalTitle || '';
    desc.textContent = card.dataset.modalDesc || '';
    lightbox.hidden = false;
    document.body.style.overflow = 'hidden';
  }

  function closeModal() {
    lightbox.hidden = true;
    img.src = '';
    document.body.style.overflow = '';
  }

  openers.forEach(card => {
    card.addEventListener('click', () => openModal(card));
  });

  closeButtons.forEach(btn => btn.addEventListener('click', closeModal));
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && !lightbox.hidden) closeModal();
  });
})();
