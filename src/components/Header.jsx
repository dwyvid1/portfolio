import "../styles/Header.css"

function Header() {
    return (
        <header>
            <nav>
                <h1>Deyvid Matheus</h1>
                <div className="links">
                    <a href="#home">Home</a>
                    <a href="#blog">Contato</a>
                    <a href="#cv">CV</a>
                </div>
            </nav>
        </header>
    )
}

export default Header