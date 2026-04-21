import { Link } from 'react-router-dom';
import '../../styles/home/homeSection.css';

function HomeSection({
  title,
  text,
  image,
  link,
  reverse = false,
  altBackground = false,
}) {
  return (
<section className={`home-section ${altBackground ? 'alt-bg' : ''}`}>
  <div className={`home-section-container ${reverse ? 'reverse' : ''}`}>

    <div className={`home-section-content-wrapper ${reverse ? 'reverse' : ''}`}>
      <div className="home-section-content">
        <h2 className="home-section-title">{title}</h2>
        <p className="home-section-text">{text}</p>
        <Link to={link} className="home-section-button">
          Ver más
        </Link>
      </div>
    </div>

    <div className={`home-section-image-wrapper ${reverse ? 'reverse' : ''}`}>
      <img src={image} alt={title} className="home-section-image" />
      <div className="home-section-image-fade" />
    </div>

  </div>
</section>
  );
}

export default HomeSection;