import Ainhoa from '../assets/team/Ainhoa Corbera.jpg'
import Corien from '../assets/team/Corien Dorotea.jpg'
import Belen from '../assets/team/Belen Amura.png'
import Camila from '../assets/team/Camila Cardenas.jpeg'
import Carol from '../assets/team/Carol Quiñones.jpeg'
import Elena from '../assets/team/Elena Herrero.jpg'
import Gaspar from '../assets/team/Gaspar Bacque.jpg'
import Juana from '../assets/team/Juana Horton.jpg'
import Nina from '../assets/team/Katharina Kopensteiner.png'
import Maggie from '../assets/team/Margarita Grehan.png'
import MariaM from '../assets/team/Maria Menende.png'
import Paula from '../assets/team/Paula PRida.png'
import Richard from '../assets/team/Richard Gonzalez.jpg'
import Veronica from '../assets/team/Veronica Llorens.jpg'

const teamData = [
  {
    area: 'Dirección',
    altBackground: false,
    members: [
      {
        name: 'Nombre Apellido',
        role: 'Dirección clínica',
        description:
          'Coordinación del centro, supervisión terapéutica y acompañamiento global de los procesos de intervención.',
        image: Corien,
      },
    ],
  },
  {
    area: 'Terapia Ocupacional',
    altBackground: true,
    members: [
      {
        name: 'Nombre Apellido',
        role: 'Terapeuta ocupacional',
        description:
          'Intervención en autonomía, regulación, integración funcional y participación en el día a día.',
        image: Richard,
      },
      {
        name: 'Nombre Apellido',
        role: 'Terapeuta ocupacional',
        description:
          'Acompañamiento individualizado centrado en el desarrollo funcional y la adaptación al entorno.',
        image: Nina,
      },
      {
        name: 'Nombre Apellido',
        role: 'Terapeuta ocupacional',
        description:
          'Intervención en autonomía, regulación, integración funcional y participación en el día a día.',
        image: Maggie,
      },
    ],
  },
  {
    area: 'Logopedia',
    altBackground: false,
    members: [
      {
        name: 'Nombre Apellido',
        role: 'Logopeda',
        description:
          'Trabajo en lenguaje, comunicación, habla, comprensión y herramientas de interacción funcional.',
        image: Belen,
      },
      {
        name: 'Nombre Apellido',
        role: 'Logopeda',
        description:
          'Trabajo en lenguaje, comunicación, habla, comprensión y herramientas de interacción funcional.',
        image: Elena,
      },
    ],
  },
  {
    area: 'Psicología',
    altBackground: true,
    members: [
      {
        name: 'Nombre Apellido',
        role: 'Psicóloga',
        description:
          'Acompañamiento emocional, conductual y relacional, tanto con niños como con adolescentes y familias.',
        image: Ainhoa,
      },
    ],
  },
  {
    area: 'Psicopedagogía',
    altBackground: false,
    members: [
      {
        name: 'Nombre Apellido',
        role: 'Psicopedagoga',
        description:
          'Apoyo en procesos de aprendizaje, atención, organización y acompañamiento en el ámbito escolar.',
        image: Juana,
      },
      {
        name: 'Nombre Apellido',
        role: 'Psicopedagoga',
        description:
          'Apoyo en procesos de aprendizaje, atención, organización y acompañamiento en el ámbito escolar.',
        image: Paula,
      },
    ],
  },
  {
    area: 'Arte terapia y musicoterapia',
    altBackground: true,
    members: [
      {
        name: 'Nombre Apellido',
        role: 'Arte terapeuta / Musicoterapeuta',
        description:
          'Intervención terapéutica a través de recursos expresivos, creativos y musicales.',
        image: MariaM,
      },
    ],
  },
  {
    area: 'Fisioterapia y kinesiología',
    altBackground: false,
    members: [
      {
        name: 'Nombre Apellido',
        role: 'Fisioterapeuta / Kinesióloga',
        description:
          'Trabajo corporal, funcional y de integración motora orientado al desarrollo y al bienestar físico.',
        image: Veronica,
      },
      {
        name: 'Nombre Apellido',
        role: 'Fisioterapeuta / Kinesióloga',
        description:
          'Trabajo corporal, funcional y de integración motora orientado al desarrollo y al bienestar físico.',
        image: Camila,
      },
    ],
  },
  {
    area: 'GAT',
    altBackground: true,
    members: [
      {
        name: 'Nombre Apellido',
        role: 'Terapeuta GAT',
        description:
          'Intervención dentro del programa GAT, acompañando objetivos funcionales de manera estructurada e intensiva.',
        image: Carol,
      },
    ],
  },
];

export default teamData;