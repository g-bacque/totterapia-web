import '../../styles/layout/footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-block">
          <h3 className="footer-title">Tot Teràpia</h3>
          <p className="footer-text">
            Centro terapéutico multidisciplinar enfocado en el desarrollo,
            la regulación y el acompañamiento de niños, adolescentes y familias.
          </p>
        </div>

        <div className="footer-block">
          <h4 className="footer-subtitle">Contacto</h4>
          <p className="footer-text">+34 000 000 000</p>
          <p className="footer-text">info@totterapia.com</p>
          <p className="footer-text">Barcelona</p>
        </div>

        <div className="footer-block footer-buttons">
          <a
            href="https://maps.google.com"
            target="_blank"
            rel="noopener noreferrer"
            className="footer-button footer-button-primary"
          >
            Dónde estamos
          </a>

          <a href="/contacto" className="footer-button footer-button-secondary">
            Formulario de contacto
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;