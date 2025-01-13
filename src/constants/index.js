import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  html,
  css,
  reactjs,
  tailwind,
  nodejs,
  mongodb,
  git,
  avodha,
  travel,
  hospital,
  react3fiber,
  aws,
  python,
  postgresql,
  django,
  bootstrap,
  portfolio,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Content Creator",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "Bootstrap",
    icon: bootstrap,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Three JS",
    icon: react3fiber,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  
  {
    name: "Python",
    icon: python,
  },
  {
    name: "Django",
    icon: django,
  },
  {
    name: "NodeJS",
    icon: nodejs,
  },
  {
    name: "PostgreSQL",
    icon: postgresql,
  },

  {
    name: "git",
    icon: git,
  },
  
  
];

const experiences = [
  {
    title: "Python Fullstack Developer",
    company_name: "Avodha Private Ltd.",
    icon: avodha,
    iconBg: "#383E56",
    date: "April 2024 – July 2024",
    points: [
      "Developed and maintained web applications using Python, Django, and related technologies.",
      "Collaborated with cross-functional teams to design, implement, and deploy scalable solutions.",
      "Built responsive, user-friendly interfaces and ensured cross-browser compatibility.",
      "Engaged in code reviews, optimizing performance and providing feedback to improve code quality.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
       "Despite being new to the industry, their passion for development and quick learning ability impressed us beyond expectations.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
    "Their dedication to understanding complex problems and delivering quality solutions made a noticeable impact during their internship.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
    "As a fresher, they demonstrated exceptional initiative and a strong desire to grow, quickly adapting to new technologies and workflows.",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Hospital Management ",
    description:
      "Developed a hospital management platform using Django to automate operations like patient-staff management, appointments, and doctor dashboards. The system streamlines scheduling, administration, and record-keeping for efficient hospital workflows.",
    tags: [
      {
        name: "Python",
        color: "blue-text-gradient",
      },
      {
        name: "PostgreSQL",
        color: "green-text-gradient",
      },
      {
        name: "Django",
        color: "pink-text-gradient",
      },
    ],
    image: hospital,
    source_code_link: "https://github.com/jithujp299/Django-Projects",
  },
  {
    name: "Travel & Tourism",
    description:
      "Created a travel and tourism website using Django, allowing users to search destinations, book trips, and manage travel packages. The platform includes user authentication, reviews, and a booking system for seamless trip planning..",
    tags: [
      {
        name: "Python",
        color: "blue-text-gradient",
      },
      {
        name: "django",
        color: "green-text-gradient",
      },
      {
        name: "PostgreSQL",
        color: "pink-text-gradient",
      },
    ],
    image: travel,
    source_code_link: "https://github.com/jithujp299/Django-Projects",
  },
  {
    name: "3D Developer Portfolio",
    description:
      "An interactive and visually immersive developer portfolio showcasing projects and skills using 3D web technologies. Features dynamic 3D models, animations, and responsive design to create an engaging user experience while highlighting technical expertise in modern web development.",
    tags: [
      {
        name: "ReactJS",
        color: "blue-text-gradient",
      },
      {
        name: "3JS",
        color: "green-text-gradient",
      },
      {
        name: "Tailwindcss",
        color: "pink-text-gradient",
      },
    ],
    image: portfolio,
    source_code_link: "https://github.com/jithujp299/Django-Projects",
  },
];

export { services, technologies, experiences, testimonials, projects };
