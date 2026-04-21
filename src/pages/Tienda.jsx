import '../styles/pages/tienda.css';

function Tienda() {
  return (
    <div className="tienda-page">
      <section className="tienda-hero">
        <div className="tienda-hero-container">
          <p className="tienda-hero-subtitle">Tienda</p>
          <h1 className="tienda-hero-title">
            Recursos, materiales y productos seleccionados
          </h1>
          <p className="tienda-hero-text">
            Muy pronto podrás acceder a una selección de materiales, recursos y
            productos alineados con nuestra manera de trabajar.
          </p>
        </div>
      </section>

      <section className="tienda-section">
        <div className="tienda-container">
          <div className="tienda-content">
            <p className="section-label">Próximamente</p>
            <h2 className="section-title">Estamos preparando nuestra tienda online</h2>
            <p className="section-text section-text-narrow">
              Este espacio reunirá materiales terapéuticos, recursos de apoyo y
              productos seleccionados para familias y profesionales.
            </p>

            <div className="tienda-placeholder-grid">
              <div className="tienda-placeholder-card">
                <div className="tienda-placeholder-image"></div>
                <h3>Material terapéutico</h3>
                <p>Herramientas y recursos de uso clínico y funcional.</p>
              </div>

              <div className="tienda-placeholder-card">
                <div className="tienda-placeholder-image"></div>
                <h3>Recursos para familias</h3>
                <p>Apoyos prácticos para acompañar el día a día en casa.</p>
              </div>

              <div className="tienda-placeholder-card">
                <div className="tienda-placeholder-image"></div>
                <h3>Productos seleccionados</h3>
                <p>Una selección alineada con nuestra metodología de trabajo.</p>
              </div>
            </div>

            <div className="tienda-coming-soon">
              <span className="tienda-status">Disponible próximamente</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Tienda;