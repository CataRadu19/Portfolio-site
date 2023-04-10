import './Hero.css'
import wave from '../../Assets/Images/wave.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import html from '../../Assets/Images/html.svg'
import css from '../../Assets/Images/css.svg'
import javascript from '../../Assets/Images/javascript.svg'
import react from '../../Assets/Images/react.svg'
import bootstrap from '../../Assets/Images/bootstrap.svg'
import scss from '../../Assets/Images/scss.svg'


export default function Hero() {
    return (
        <div className="hero" id='home'>
            <div className='container-width'>
                <div className='hero-main-container'>
                    <div className='hero-text-container'>
                        <div className='hero-title-text'>
                            <h1>Front-End React Developer <img src={wave} alt='Catalin.dev' /></h1>
                        </div>
                        <p className='mulish'>Hi, I'm Radu Catalin. A passionate Front-end React Developer based in Targu Mures, Romania. 📍</p>
                        <div className='hero-socials'>
                            <a href='https://www.linkedin.com/in/radu-catalin-andrei/'><FontAwesomeIcon className='hero-icon' icon={faLinkedin} /></a>
                            <a href='https://github.com/CataRadu19'><FontAwesomeIcon className='hero-icon' icon={faGithub} /></a>
                        </div>
                    </div>

                    <div className='hero-image-container'>

                    </div>
                </div>
                <div className='tech-stack-container' id='about'>
                    <p className='mulish'>Tech Stack</p>
                    <div className='stack-images'>
                        <img src={html} alt='HTML' title='HTML5' />
                        <img src={css} alt='CSS' title='CSS3' />
                        <img src={javascript} alt='Javascript' title='Javascript' />
                        <img src={react} alt='React' title='React' />
                        <img src={bootstrap} alt='Bootstrap' title='Bootstrap' />
                        <img src={scss} alt='SCSS' title='SCSS' />
                    </div>
                </div>
            </div>
        </div>
    );
}