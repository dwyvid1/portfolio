import "../styles/Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        
        <span className="footer-copy">
          © {new Date().getFullYear()} Deyvid Matheus. Todos os direitos reservados.
        </span>
      </div>
    </footer>
  );
}

export default Footer;
