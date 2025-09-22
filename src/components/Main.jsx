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
                    Estudante • Desenvolvedor • Sonhador
                </p>
                <div className="social-links">
                    <a href="#">LinkedIn</a>
                    <a href="#">Instagram</a>
                    <a href="#">Steam</a>
                    <a href="#">Discord</a>
                    <a href="#">Gmail</a>
                </div>
            </div>
        </main>
    );
}

export default Main;