import '../styles/pages/atencion.css';

function Atencion() {
  return (
    <div className="atencion-page">
      <section className="atencion-hero">
        <div className="atencion-hero-container">
          <p className="atencion-hero-subtitle">Atención</p>
          <h1 className="atencion-hero-title">
            Evaluación e intervención personalizada
          </h1>
          <p className="atencion-hero-text">
            Acompañamos a cada persona desde una mirada global, diseñando
            procesos de evaluación y programas de intervención adaptados a
            sus necesidades.
          </p>
        </div>
      </section>

      <section className="atencion-section">
        <div className="atencion-container">
          <div className="atencion-section-header">
            <p className="section-label">Evaluación</p>
            <h2 className="section-title">Evaluación y diagnóstico</h2>
            <p className="section-text section-text-narrow">
              Realizamos una valoración completa para comprender el perfil de
              cada niño, identificar necesidades y establecer objetivos de
              intervención claros y funcionales.
            </p>
          </div>

          <div className="atencion-grid">
            <div className="atencion-card">
              <h3>Evaluación del desarrollo</h3>
              <p>
                Valoración global del desarrollo motor, cognitivo, comunicativo
                y emocional.
              </p>
            </div>

            <div className="atencion-card">
              <h3>Lenguaje y comunicación</h3>
              <p>
                Evaluación del lenguaje expresivo, comprensivo y habilidades
                comunicativas.
              </p>
            </div>

            <div className="atencion-card">
              <h3>Perfil sensorial</h3>
              <p>
                Análisis del procesamiento sensorial y su impacto en el
                comportamiento y el aprendizaje.
              </p>
            </div>

            <div className="atencion-card">
              <h3>Área emocional y conductual</h3>
              <p>
                Evaluación del estado emocional, regulación y conducta en el
                día a día.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="atencion-section alt-bg">
        <div className="atencion-container">
          <div className="atencion-section-header">
            <p className="section-label">Intervención</p>
            <h2 className="section-title">Nuestros servicios</h2>
            <p className="section-text section-text-narrow">
              Diseñamos programas de intervención individualizados, combinando
              diferentes disciplinas para generar cambios reales en el día a día.
            </p>
          </div>

          <div className="atencion-grid">
            <div className="atencion-card">
              <h3>Terapia ocupacional</h3>
              <p>Trabajo en autonomía, regulación y desarrollo funcional.</p>
            </div>

            <div className="atencion-card">
              <h3>Logopedia</h3>
              <p>Lenguaje, comunicación y habla.</p>
            </div>

            <div className="atencion-card">
              <h3>Psicología</h3>
              <p>Regulación emocional, conducta y acompañamiento familiar.</p>
            </div>

            <div className="atencion-card">
              <h3>Psicopedagogía</h3>
              <p>Apoyo en aprendizaje, atención y entorno escolar.</p>
            </div>

            <div className="atencion-card">
              <h3>Fisioterapia y kinesiología</h3>
              <p>Trabajo corporal, funcional y motor.</p>
            </div>

            <div className="atencion-card">
              <h3>GAT</h3>
              <p>Intervención estructurada intensiva.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Atencion;