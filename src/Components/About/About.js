import './About.css'
import rotatingText from '../../Assets/Images/text2.svg'
import aboutImg from '../../Assets/Images/doges.jpeg'
import humanEmoji from '../../Assets/Images/working.png'


export default function About() {
    return (
        <div className="about">
            <div className='container-width'>
                <div className='about-container'>

                    <div className='image-side'>
                        <img src={humanEmoji} className='human-emoji' alt='human-emoji' />
                        <img src={aboutImg} className='about-img' alt='work-station' />
                        <span>
                            <img src={rotatingText} className='rotating-text' alt='web-developer' />
                        </span>
                    </div>

                    <div className='text-side'>
                        <h4>
                            ABOUT ME
                        </h4>
                        <h3>
                            A dedicated Front-end Developer
                            based in Tg. Mures, Romania 📍
                        </h3>
                        <p className='mulish'>
                            As a Junior Front-End Developer, I possess an impressive arsenal of skills in HTML, CSS, JavaScript, React, Bootstrap, and SCSS. I excel in designing and maintaining responsive websites that offer a smooth user experience. My expertise lies in crafting dynamic, engaging interfaces through writing clean and optimized code and utilizing cutting-edge development tools and techniques. I am also a team player who thrives in collaborating with cross-functional teams to produce outstanding web applications.
                        </p>
                    </div>

                </div>
            </div>
        </div>
    );
}