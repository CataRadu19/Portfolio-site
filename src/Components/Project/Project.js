import { useState } from "react";
import './Project.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'

export default function Project({
    title,
    img,
    description,
    techno1,
    techno2,
    code,
    demo,
    scrollY,
    cName,
    icon,
}) {
    const [scroll, setScroll] = useState(false);
    return (
        <>
            <div className={`pro ${cName}`}>
                <div className="pro-img">
                    <a target="_blank" href={demo} rel="noreferrer">
                        <img
                            src={img}
                            alt="website"
                            style={{
                                transform: scroll ? `translateY(${scrollY})` : "translateY(0%)",
                                transition: "transform 10s ease-in-out",
                            }}
                            onMouseEnter={() => setScroll(true)}
                            onMouseLeave={() => setScroll(false)}
                        />
                    </a>
                </div>
                <div className="pro-text">
                    <h3>
                        {title} {icon}
                    </h3>
                    <p>{description}</p>
                    <div className="stack">
                        <p className="mulish">{techno1}</p>
                        <p className="mulish">{techno2}</p>
                    </div>
                    <div className="links">
                        <a target="_blank" href={code} rel="noreferrer">
                            Code <FontAwesomeIcon className='hero-icon' icon={faGithub} size="xl" />
                        </a>
                        <a target="_blank" href={demo} rel="noreferrer">
                            Live Demo
                            <FontAwesomeIcon className='hero-icon' icon={faArrowUpRightFromSquare} size="lg" />
                        </a>
                    </div>
                </div>
            </div>
        </>
    );
}
