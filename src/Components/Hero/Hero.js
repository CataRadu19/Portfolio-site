import './Hero.css'
import { useState, useEffect } from 'react';
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
import glasses from '../../Assets/Images/glasses.png'
import Typewriter from 'typewriter-effect';

export default function Hero() {

    const [smart, setSmart] = useState(false);

    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 1000);
        };

        // Initial check
        handleResize();

        // Event listener for window resize
        window.addEventListener('resize', handleResize);

        // Clean up the event listener
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    const handleSmart = () => {
        setSmart(!smart);
    }


    return (
        <div className="hero" id='home'>
            <div className='container-width'>

                <div className='hero-main-container'>
                    <div className='hero-text-container'>
                        <div className='hero-title-text'>
                            {isMobile ? <h1>Front-End React Developer</h1> : <h1><Typewriter options={{
                                autoStart: true,
                                loop: true,
                                delay: 50,
                                deleteSpeed: 30,
                                pauseFor: 1500,
                                strings: ['Front-End Developer', 'React Sorcerer', 'Team Player',]
                            }} /> <img src={wave} alt='Catalin.dev' /></h1>}
                        </div>

                        {smart ? <p className='mulish'>I am a solution-oriented Front-End Developer, lifelong learner, and adventurer. I enjoy development because of the satisfaction I get by overcoming challenges. I am motivated by the opportunity that software provides to positively impact the life of an individual, and the world as a whole.
                            <br></br>
                            When I'm not coding, you can find me battling mythical monsters in God of War.</p> : <p className='mulish'>I'm a passionate Front-end React Developer based in Targu Mures, Romania. 📍 </p>}
                        <div className='hero-socials'>
                            <a href='https://www.linkedin.com/in/radu-catalin-andrei/'><FontAwesomeIcon className='hero-icon' icon={faLinkedin} /></a>
                            <a href='https://github.com/CataRadu19'><FontAwesomeIcon className='hero-icon' icon={faGithub} /></a>
                        </div>
                        <button className="smartify" onClick={handleSmart}>Smartify</button>
                    </div>

                    <div className='hero-image-container'>
                        <img src={glasses} className={`content ${smart ? '' : 'off'}`} alt="glasses" />
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