import "../styles/Main.css";
import profilePhoto from "../img/deyvid.jpeg";

import devfinancesImg from "../img/projects/devfinances.png";
import roteiroImg from "../img/projects/controledeviagem.png";
import genfImg from "../img/projects/genf2.png";

import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiNodedotjs,
  SiReact,
} from "react-icons/si";

const projects = [
  {
    name: "Devfinances",
    github: "https://github.com/dwyvid1/Discover-Marathon",
    image: devfinancesImg,
  },
  {
    name: "Roteiro de Viagem",
    github: "https://github.com/dwyvid1/NLWJourney",
    image: roteiroImg,
  },
  {
    name: "Genf 2.0",
    github: "https://github.com/dwyvid1/genf2.0",
    image: genfImg,
  },
];

function Main() {
  return (
    <main className="main-section">
      <div className="profile-container">
        <img
          src={profilePhoto}
          alt="Foto de Perfil"
          className="profile-photo"
        />
        <h2 className="profile-name">Deyvid Matheus</h2>
        <p className="profile-description">
          Helpdesk • Web Development • Tech Enthusiast
        </p>

        <div className="social-links">
          <a href="https://github.com/dwyvid1" target="_blank" rel="noreferrer">Github</a>
          <a href="https://www.linkedin.com/in/deyvid-matheus-101a69197/" target="_blank" rel="noreferrer">Linkedin</a>
          <a href="#" target="_blank" rel="noreferrer">Discord</a>
        </div>
      </div>

      {/* SOBRE MIM */}
      <section className="about-section">
        <h2>Sobre mim</h2>
        <p>
            Olá! Me chamo Deyvid Matheus, sou estudante de Sistemas de Informação e apaixonado por tecnologia e inovação digital.
            No meu tempo livre, gosto de estudar Desenvolvimento Web, Programação e explorar novas ideias que conectem
            conhecimento e prática. Também sou fã de videogames, que me inspiram pela criatividade e desafio. Atualmente, 
            trabalho na rede Arco-Mix como Auxiliar de T.I, atuando no suporte ao usuário e garantindo a disponibilidade de sistemas, 
            equipamentos e infraestrutura tecnológica. Minha missão é resolver problemas de forma eficiente e contribuir 
            para que a tecnologia esteja sempre a serviço das pessoas.
        </p>
      </section>

      {/* TECNOLOGIAS */}
      <section className="tech-section">
        <h2>Tecnologias que domino</h2>

        <div className="tech-grid">
          <div className="tech-item">
            <SiHtml5 size={42} />
            <span>HTML</span>
          </div>

          <div className="tech-item">
            <SiCss3 size={42} />
            <span>CSS</span>
          </div>

          <div className="tech-item">
            <SiJavascript size={42} />
            <span>JavaScript</span>
          </div>

          <div className="tech-item">
            <SiNodedotjs size={42} />
            <span>NodeJS</span>
          </div>

          <div className="tech-item">
            <SiReact size={42} />
            <span>ReactJS</span>
          </div>
        </div>
      </section>

      {/* PROJETOS */}
      <section className="projects-section">
        <h2>Projetos</h2>

        <div className="projects-grid">
          {projects.map((project, index) => (
            <a
              key={index}
              href={project.github}
              target="_blank"
              rel="noreferrer"
              className="project-card"
            >
              <img src={project.image} alt={project.name} />

              <div className="project-overlay">
                <h3>{project.name}</h3>
              </div>
            </a>
          ))}
        </div>
      </section>

    </main>
  );
}

export default Main;