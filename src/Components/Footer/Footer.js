import './Footer.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'


export default function Footer() {
    return (
        <div className="footer">
            <div className='container-width'>
                <p>Copyright © {new Date().getFullYear()}. All rights are reserved</p>
                <div className='footer-socials'>
                    <a href='https://www.linkedin.com/in/radu-catalin-andrei/'><FontAwesomeIcon className='footer-icon' icon={faLinkedin} /></a>
                    <a href='https://github.com/CataRadu19'><FontAwesomeIcon className='footer-icon' icon={faGithub} /></a>
                </div>
            </div>
        </div>
    );
}