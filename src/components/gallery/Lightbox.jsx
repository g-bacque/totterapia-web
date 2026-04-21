import { useEffect } from 'react';
import '../../styles/gallery/lightbox.css';

function Lightbox({ images, currentIndex, onClose, onPrev, onNext }) {
  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === 'Escape') onClose();
      if (event.key === 'ArrowLeft') onPrev();
      if (event.key === 'ArrowRight') onNext();
    };

    document.addEventListener('keydown', handleKeyDown);
    document.body.classList.add('lightbox-open');

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.classList.remove('lightbox-open');
    };
  }, [onClose, onPrev, onNext]);

  const activeImage = images[currentIndex];

  const handleOverlayClick = (event) => {
    if (event.target.classList.contains('lightbox-overlay')) {
      onClose();
    }
  };

  return (
    <div className="lightbox-overlay" onClick={handleOverlayClick}>
      <button
        className="lightbox-close"
        onClick={onClose}
        aria-label="Cerrar galería"
      >
        ×
      </button>

      <button
        className="lightbox-arrow lightbox-arrow-left"
        onClick={onPrev}
        aria-label="Imagen anterior"
      >
        ‹
      </button>

      <div className="lightbox-content">
        <img
          src={activeImage.src}
          alt={activeImage.alt}
          className="lightbox-image"
        />

        <p className="lightbox-counter">
          {currentIndex + 1} / {images.length}
        </p>
      </div>

      <button
        className="lightbox-arrow lightbox-arrow-right"
        onClick={onNext}
        aria-label="Imagen siguiente"
      >
        ›
      </button>
    </div>
  );
}

export default Lightbox;