import './Contact.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMapLocationDot } from '@fortawesome/free-solid-svg-icons'
import { faEnvelopeOpenText } from '@fortawesome/free-solid-svg-icons'


export default function Contact() {
    return (
        <div className="contact" id='contact'>
            <div className='container-width'>
                <div className='contact-container'>
                    <div className='contact-title'>
                        <p>
                            CONTACT
                        </p>
                        <h4>
                            Hit me up! 👇
                        </h4>
                    </div>
                    <div className='contact-icons'>

                        <div className='icon-container'>
                            <FontAwesomeIcon className='contact-icon' icon={faMapLocationDot} />
                            <div className='icon-text'>
                                <p>Location</p>
                                <a href='/'><p>Tg. Mures, Romania</p></a>
                            </div>
                        </div>

                        <div className='icon-container'>
                            <FontAwesomeIcon className='contact-icon' icon={faEnvelopeOpenText} size="lg" />
                            <div className='icon-text'>
                                <p>Mail</p>
                                <a href="mailto:raducatalinwebdev@gmail.com"><p>raducatalinwebdev@gmail.com</p></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}