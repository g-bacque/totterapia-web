import Hero from '../components/home/Hero';
import HomeIntro from '../components/home/HomeIntro';
import HomeSection from '../components/home/HomeSection';
import '../styles/pages/home.css';

function Home() {
  return (
    <div className="home">
      <Hero />
      <HomeIntro />

      <main className="home-main">
        <div className="home-main-container">
          <HomeSection
            title="Quiénes somos"
            text="Conoce la visión, los objetivos y la metodología de Tot Teràpia, un espacio terapéutico multidisciplinar centrado en el acompañamiento integral de niños, adolescentes y familias."
            image="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1200&q=80"
            link="/nosotros"
            altBackground
          />

          <HomeSection
            title="Terapias"
            text="Descubre nuestros servicios de evaluación, diagnóstico e intervención, diseñados para responder a las necesidades específicas de cada persona desde una mirada individualizada."
            image="https://images.unsplash.com/photo-1573497620053-ea5300f94f21?auto=format&fit=crop&w=1200&q=80"
            link="/atencion"
            reverse
          />

          <HomeSection
            title="GAT"
            text="Explora el enfoque, los objetivos y las modalidades del programa GAT, pensado para ofrecer una intervención estructurada, intensiva y funcional."
            image="https://images.unsplash.com/photo-1513258496099-48168024aec0?auto=format&fit=crop&w=1200&q=80"
            link="/gat"
            altBackground
          />

          <HomeSection
            title="Formaciones"
            text="Accede a nuestras formaciones dirigidas tanto a familias como a profesionales, con propuestas orientadas a la práctica clínica y al acompañamiento cotidiano."
            image="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1200&q=80"
            link="/formaciones"
            reverse
          />
        </div>
      </main>
    </div>
  );
}

export default Home;