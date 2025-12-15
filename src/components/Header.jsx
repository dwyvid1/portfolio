import "../styles/Header.css"

function Header() {
    return (
        <header>
            <nav>
                <h1>Deyvid Matheus</h1>
                <div className="links">
                    <a href="#">Home</a>
                    <a href="#" target="_blank">Sobre</a>
                </div>
            </nav>
        </header>
    )
}

export default Header