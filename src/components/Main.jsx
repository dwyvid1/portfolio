import "../styles/Main.css";
import profilePhoto from "../img/deyvid.jpeg"

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
                    Tecnologia • Espiritualidade • Games
                </p>
                <div className="social-links">
                    <a href="#">Github</a>
                    <a href="#">LinkedIn</a>
                    <a href="#">Instagram</a>
                    <a href="#">Discord</a>
                    <a href="#">Gmail</a>
                </div>
            </div>

            <section className="about-section">
                <h2>Sobre mim</h2>
                <p>
                    Olá! Me chamo Deyvid Matheus, sou estudante de Sistemas de Informação e apaixonado por
                    tecnologia e inovação digital. No meu tempo livre,
                    gosto de estudar Desenvolvimento Web, Programação e explorar novas ideias que conectem
                    conhecimento e prática. Também sou fã de videogames, que me inspiram
                    pela criatividade e desafio. Atualmente, trabalho na rede Arco-Mix como
                    Auxiliar de T.I, atuando no suporte ao usuário e garantindo a disponibilidade de sistemas, equipamentos e infraestrutura
                    tecnológica. Minha missão é resolver problemas de forma eficiente e contribuir para que a tecnologia esteja sempre a serviço
                    das pessoas.
                </p>
            </section>
        </main>
    );
}

export default Main;