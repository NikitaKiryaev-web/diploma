import './Footer.scss';
import githubIcon from '../../images/github.svg';

function Footer(props) {
    return (
        <footer className="footer">
            <p className="footer__text">©Nikita Kiryaev</p>
            <ul className="footer__links">
                <li className="footer__links-item">
                    <a href="https://github.com/NikitaKiryaev-web" rel="noreferrer" target="_blank" className="footer__link">
                        <img src={githubIcon} alt="GitHub" className="footer__link-img" />
                    </a>
                </li>
                <li className="footer__links-item">
                    <a href="https://t.me/nickname712" target="_blank" rel="noreferrer" className="footer__link">
                        <img src="https://upload.wikimedia.org/wikipedia/commons/8/82/Telegram_logo.svg" alt="Telegram" className="footer__link-img" />
                    </a>
                    </li>
            </ul>
        </footer>
    )
}

export default Footer;