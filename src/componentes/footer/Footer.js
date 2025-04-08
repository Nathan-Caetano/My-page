import '../../App.css'
import './style.css'

const Footer = () => {

    return (
        <footer>
            <div id="footer-container">
                <div class="footer-section">
                    <h3>Contato</h3>
                    <ul>
                        <li><strong>Endereço:</strong> Rua Angêlo favaretto, 156 A, JD Paris I</li>
                        <li><strong>Telefone:</strong> (44) 98839-3774</li>
                        <li><strong>Email:</strong> nathancaetano71@gmail.com</li>
                    </ul>
                </div>
                <div class="footer-section">
                    <h3>Redes Sociais</h3>
                    <div class="social">
                        <a href="https://www.instagram.com/ocaetan0/" target='blank_' rel='noopener noreferrer'>Instagram</a>
                        <a href="https://github.com/Nathan-Caetano" target='blank_' rel='noopener noreferrer'>GitHub</a>
                        <a href="https://www.linkedin.com/in/than-caetano/" target='blank_' rel='noopener noreferrer'>Linkedin</a>
                    </div>
                </div>
            </div>
            <div class="footer-bottom">
                <p>&copy; 2025 desenvolvido por Nathan Caetano</p>
            </div>
    </footer>
    );
};

export default Footer;