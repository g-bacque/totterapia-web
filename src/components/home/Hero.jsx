import { useEffect, useState } from 'react';
import heroSlides from '../../data/heroSlides';
import '../../styles/home/hero.css';

function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [textVisible, setTextVisible] = useState(true);

  const changeSlide = (newIndex) => {
    if (newIndex === currentSlide) return;

    setTextVisible(false);

    setTimeout(() => {
      setCurrentSlide(newIndex);
    }, 50);

    setTimeout(() => {
      setTextVisible(true);
    }, 950);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      const nextSlide =
        currentSlide === heroSlides.length - 1 ? 0 : currentSlide + 1;
      changeSlide(nextSlide);
    }, 5000);

    return () => clearInterval(interval);
  }, [currentSlide]);

  return (
    <section className="hero">
      <div
        className="hero-track"
        style={{ transform: `translateX(-${currentSlide * 100}%)` }}
      >
        {heroSlides.map((slide, index) => (
          <div className="hero-slide" key={slide.id}>
            <img
              src={slide.image}
              alt={slide.title}
              className="hero-background-image"
            />

            <div className="hero-overlay">
              <div
                className={`hero-content ${
                  index === currentSlide && textVisible ? 'hero-content-active' : ''
                }`}
              >
                <p className="hero-subtitle">{slide.subtitle}</p>
                <h1 className="hero-title">{slide.title}</h1>
                <p className="hero-text">{slide.text}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="hero-dots">
        {heroSlides.map((slide, index) => (
          <button
            key={slide.id}
            className={`hero-dot ${index === currentSlide ? 'active' : ''}`}
            onClick={() => changeSlide(index)}
            aria-label={`Ir al slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
}

export default Hero;