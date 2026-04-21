import '../styles/pages/formaciones.css';

function Formaciones() {
  return (
    <div className="formaciones-page">
      <section className="formaciones-hero">
        <div className="formaciones-hero-container">
          <p className="formaciones-hero-subtitle">Formaciones</p>
          <h1 className="formaciones-hero-title">
            Formación especializada para profesionales
          </h1>
          <p className="formaciones-hero-text">
            Compartimos nuestra metodología y experiencia clínica para formar
            a profesionales en intervención, neurodesarrollo y trabajo
            interdisciplinar.
          </p>
        </div>
      </section>

      <section className="formaciones-section">
        <div className="formaciones-container">
          <div className="formaciones-intro">
            <p className="section-label">Enfoque</p>
            <h2 className="section-title">Nuestro enfoque formativo</h2>
            <p className="section-text section-text-narrow">
              Las formaciones de Tot Teràpia están diseñadas para trasladar la
              práctica clínica real al aprendizaje, combinando teoría, casos
              prácticos y herramientas aplicables desde el primer día.
            </p>
          </div>
        </div>
      </section>

      <section className="formaciones-section alt-bg">
        <div className="formaciones-container">
          <div className="formaciones-grid">
            <div className="formacion-card">
              <h3>Curso de neurodesarrollo</h3>
              <p>
                Bases neuroanatómicas, desarrollo y comprensión de las
                dificultades del neurodesarrollo.
              </p>
              <span className="formacion-tag">8 módulos</span>
            </div>

            <div className="formacion-card">
              <h3>Intervención funcional</h3>
              <p>
                Diseño de programas terapéuticos basados en objetivos
                funcionales y aplicables.
              </p>
              <span className="formacion-tag">Práctico</span>
            </div>

            <div className="formacion-card">
              <h3>Lenguaje y comunicación</h3>
              <p>
                Estrategias de intervención en comunicación, lenguaje y
                herramientas funcionales.
              </p>
              <span className="formacion-tag">Especialización</span>
            </div>

            <div className="formacion-card">
              <h3>Regulación y conducta</h3>
              <p>
                Comprensión de la conducta y estrategias para trabajar la
                regulación emocional.
              </p>
              <span className="formacion-tag">Aplicado</span>
            </div>
          </div>
        </div>
      </section>

      <section className="formaciones-cta">
        <div className="formaciones-cta-container">
          <h2>¿Te interesa formarte con nosotros?</h2>
          <p>
            Ponte en contacto con nuestro equipo para conocer próximas ediciones
            y modalidades disponibles.
          </p>

          <a href="/contacto" className="formaciones-button">
            Solicitar información
          </a>
        </div>
      </section>
    </div>
  );
}

export default Formaciones;