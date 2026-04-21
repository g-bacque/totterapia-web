import '../styles/pages/nosotros.css';
import TeamSection from '../components/team/TeamSection';
import teamData from '../data/teamData';
import { useState } from 'react';
import Lightbox from '../components/gallery/Lightbox';
import centerGalleryData from '../data/centerGalleryData';
import teamHero from '../assets/center/team-hero.jpg';

function Nosotros() {
    const [isLightboxOpen, setIsLightboxOpen] = useState(false);
const [currentImageIndex, setCurrentImageIndex] = useState(0);

const openLightbox = (index) => {
  setCurrentImageIndex(index);
  setIsLightboxOpen(true);
};

const closeLightbox = () => {
  setIsLightboxOpen(false);
};

const showPrevImage = () => {
  setCurrentImageIndex((prev) =>
    prev === 0 ? centerGalleryData.length - 1 : prev - 1
  );
};

const showNextImage = () => {
  setCurrentImageIndex((prev) =>
    prev === centerGalleryData.length - 1 ? 0 : prev + 1
  );
};
  return (
    <div className="nosotros-page">
        <section
        className="nosotros-hero nosotros-hero-image"
        style={{ backgroundImage: `url(${teamHero})` }}
        >
        <div className="nosotros-hero-overlay"></div>

        <div className="nosotros-hero-container">
            <p className="nosotros-hero-subtitle">Nosotros</p>
            <h1 className="nosotros-hero-title">Conoce Tot Teràpia</h1>
            <p className="nosotros-hero-text">
            Un centro terapéutico multidisciplinar orientado al acompañamiento integral
            de niños, adolescentes y familias.
            </p>
        </div>
        </section>

      <section className="nosotros-intro">
        <div className="nosotros-container">
          <div className="nosotros-intro-content">
            <p className="section-label">Quiénes somos</p>
            <h2 className="section-title">¿Qué es Tot Teràpia?</h2>
            <p className="section-text">
              Tot Teràpia es un espacio terapéutico que trabaja desde una mirada global
              y multidisciplinar para acompañar procesos de desarrollo, regulación,
              aprendizaje y bienestar. Nuestro objetivo es ofrecer una atención cercana,
              personalizada y coordinada, adaptada a las necesidades reales de cada niño,
              adolescente y familia.
            </p>
            <p className="section-text">
              La metodología del centro se basa en la observación clínica, el trabajo
              en equipo y el diseño de objetivos funcionales, con el fin de generar
              avances significativos y aplicables en el día a día.
            </p>
          </div>
        </div>
      </section>

        <section className="nosotros-team-intro">
        <div className="nosotros-container">
            <div className="nosotros-section-heading">
            <p className="section-label">Equipo</p>
            <h2 className="section-title">Nuestro equipo</h2>
            <p className="section-text section-text-narrow">
                Un equipo multidisciplinar organizado por áreas para ofrecer una atención
                coordinada, especializada y personalizada.
            </p>
            </div>
        </div>
        </section>

        {teamData.map((section, index) => (
        <TeamSection
            key={index}
            area={section.area}
            members={section.members}
            altBackground={section.altBackground}
        />
        ))}

<section className="nosotros-center">
  <div className="nosotros-container">
    <div className="nosotros-section-heading">
      <p className="section-label">Centro</p>
      <h2 className="section-title">Conoce Tot Teràpia</h2>
      <p className="section-text section-text-narrow">
        Un espacio pensado para acompañar, observar, intervenir y crecer.
      </p>
    </div>

    <div className="center-gallery">
      <button
        className="center-gallery-main"
        onClick={() => openLightbox(0)}
        type="button"
      >
        <img
          src={centerGalleryData[0].src}
          alt={centerGalleryData[0].alt}
          className="center-gallery-image"
        />
      </button>

      <div className="center-gallery-side">
        <button
          className="center-gallery-item"
          onClick={() => openLightbox(1)}
          type="button"
        >
          <img
            src={centerGalleryData[1].src}
            alt={centerGalleryData[1].alt}
            className="center-gallery-image"
          />
        </button>

        <button
          className="center-gallery-item"
          onClick={() => openLightbox(2)}
          type="button"
        >
          <img
            src={centerGalleryData[2].src}
            alt={centerGalleryData[2].alt}
            className="center-gallery-image"
          />
        </button>
      </div>
    </div>
  </div>

  <div className="center-gallery-grid-wrapper">
    <div className="center-gallery-grid">
      {centerGalleryData.slice(3).map((image, index) => (
        <button
          key={image.id}
          className="center-gallery-grid-item"
          onClick={() => openLightbox(index + 3)}
          type="button"
        >
          <img
            src={image.src}
            alt={image.alt}
            className="center-gallery-image"
          />
        </button>
      ))}
    </div>
  </div>

  {isLightboxOpen && (
    <Lightbox
      images={centerGalleryData}
      currentIndex={currentImageIndex}
      onClose={closeLightbox}
      onPrev={showPrevImage}
      onNext={showNextImage}
    />
  )}
</section>
    </div>
  );
}

export default Nosotros;