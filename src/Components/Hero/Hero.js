import './Hero.css'
import wave from '../../Assets/Images/wave.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { html } from '../../Assets/Images/html.svg'


export default function Hero() {
    return (
        <div className="hero">
            <div className='hero-main-container'>
                <div className='hero-text-container'>
                    <div className='hero-title-text'>
                        <h1>Front-End React Developer</h1>
                        <img src={wave} alt='Catalin.dev' />
                    </div>
                    <p>Hi, I'm Radu Catalin. A passionate Front-end React Developer based in Targu Mures, Romania. 📍</p>
                    <div className='hero-socials'>
                        <FontAwesomeIcon icon={faLinkedin} />
                        <FontAwesomeIcon icon={faGithub} />
                    </div>
                </div>

                <div className='hero-image-container'>

                </div>
            </div>
            <div className='tech-stack-container'>
                <p>Tech Stack | </p>
                <div className='stack-images'>
                    <img src={html} alt='HTML' title='HTML5' />
                </div>
            </div>
        </div>
    );
}