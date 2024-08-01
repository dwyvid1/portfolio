import Header from "./components/Header/Header"
import './styles/home.scss'

function App() {
  return (
    <main className="container">
      <Header />

      <div className="experience">
        <h3>Experiência</h3>
        <p>Textooooooooooooooooooooooooooooooooo</p>
        <div className="experience-time">

        </div>

        <div className="infos">
          <h3>Idiomas</h3>
          <div className="languages-info">
            <span> 🇺🇸 EN</span>
            <span> 🇧🇷 PT-BR</span>
          </div>
          <h3>Educação</h3>
            <div className="educational-info">
            <span>🎓</span>
            <span>Sistemas de Informação - Estácio, Redes de Computadores - Epitácio Pesoa</span>
          </div>
        </div>

         <div className="buttons">
            <div className="social">

            </div>
            <button>Contato</button>
         </div>

      </div>

    </main>
  )
}

export default App