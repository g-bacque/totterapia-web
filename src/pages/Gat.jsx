import '../styles/pages/gat.css';

function Gat() {
  return (
    <div className="gat-page">
      <section className="gat-hero">
        <div className="gat-hero-container">
          <p className="gat-hero-subtitle">GAT</p>
          <h1 className="gat-hero-title">
            Un enfoque estructurado, intensivo y funcional
          </h1>
          <p className="gat-hero-text">
            El programa GAT está diseñado para acompañar procesos de desarrollo
            mediante una intervención organizada, coordinada y adaptada a las
            necesidades de cada niño y su familia.
          </p>
        </div>
      </section>

      <section className="gat-section">
        <div className="gat-container">
          <div className="gat-section-header">
            <p className="section-label">Programa</p>
            <h2 className="section-title">¿Qué es GAT?</h2>
            <p className="section-text section-text-narrow">
              GAT es un programa de intervención que integra diferentes áreas
              terapéuticas dentro de una propuesta estructurada, funcional y
              orientada a objetivos concretos en el día a día.
            </p>
          </div>

          <div className="gat-intro-card">
            <p>
              Su finalidad es ofrecer un acompañamiento intensivo y coordinado,
              combinando observación clínica, planificación y trabajo terapéutico
              interdisciplinar para favorecer avances significativos en
              comunicación, regulación, autonomía, participación y aprendizaje.
            </p>
          </div>
        </div>
      </section>

      <section className="gat-section alt-bg">
        <div className="gat-container">
          <div className="gat-section-header">
            <p className="section-label">Metodología</p>
            <h2 className="section-title">Objetivos y metodología</h2>
            <p className="section-text section-text-narrow">
              El programa se organiza a partir de objetivos funcionales y una
              mirada global del desarrollo.
            </p>
          </div>

          <div className="gat-grid">
            <div className="gat-card">
              <h3>Objetivos funcionales</h3>
              <p>
                Definimos metas aplicables a la vida diaria, priorizando cambios
                que mejoren la participación y el bienestar.
              </p>
            </div>

            <div className="gat-card">
              <h3>Trabajo interdisciplinar</h3>
              <p>
                Diferentes profesionales colaboran de forma coordinada para dar
                coherencia al proceso terapéutico.
              </p>
            </div>

            <div className="gat-card">
              <h3>Intervención estructurada</h3>
              <p>
                Cada programa sigue una planificación clara, con seguimiento,
                observación y ajuste continuo.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="gat-section">
        <div className="gat-container">
          <div className="gat-section-header">
            <p className="section-label">Formatos</p>
            <h2 className="section-title">Modalidades</h2>
            <p className="section-text section-text-narrow">
              El programa puede adaptarse en intensidad y formato según las
              necesidades de cada caso.
            </p>
          </div>

          <div className="gat-grid">
            <div className="gat-card">
              <h3>Modalidad individual</h3>
              <p>
                Acompañamiento personalizado con objetivos específicos y un plan
                de intervención ajustado al perfil del niño.
              </p>
            </div>

            <div className="gat-card">
              <h3>Modalidad grupal</h3>
              <p>
                Espacios compartidos para trabajar habilidades sociales,
                regulación, comunicación y participación con otros niños.
              </p>
            </div>

            <div className="gat-card">
              <h3>Formato intensivo</h3>
              <p>
                Propuestas de mayor frecuencia o duración para momentos en los
                que se requiere un impulso terapéutico más concentrado.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Gat;