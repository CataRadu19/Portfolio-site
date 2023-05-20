import './Projects.css'
import Project from '../Project/Project'
import carRental from '../../Assets/Images/car-rental-whole-page.png'
import gamehound from '../../Assets/Images/gamehound-main-page.png'
import eCommerce from '../../Assets/Images/ecom.webp'
import gymSite from '../../Assets/Images/gymate.webp'
import coinDom from '../../Assets/Images/coindom.png'

export default function Projects() {


    return (
        <div className="projects" id='projects'>
            <div className='container-width'>
                <div className='projects-title'>
                    <p>PORTFOLIO</p>
                    <h4>Each project is a unique piece of development 🧩</h4>
                </div>
                <Project
                    title="CAR RENTAL"
                    description="A car rental website is an online platform that allows users to rent cars for personal or business use. The website provides an interface for searching, comparing, and reserving cars."
                    img={carRental}
                    techno1="React"
                    techno2="SCSS"
                    code="https://github.com/CataRadu19/Car-Rental-App"
                    demo="https://car-rental-radu-catalin.netlify.app/"
                    scrollY="-83%"
                    cName=""
                    icon="🚗"
                />

                <Project
                    title="GAMEHOUND"
                    description="GameHound is your go-to platform for game scores, reviews, and insights. Make informed decisions and find the perfect game for your preferences."
                    img={gamehound}
                    techno1="React"
                    techno2="Styled C."
                    code="#"
                    demo="https://gamehound.netlify.app/"
                    scrollY="-45%"
                    cName="reverse"
                    icon="🎮"
                />

                <Project
                    title="COINDOM"
                    description="Coindom is a crypto app that allows users to search for information about various cryptocurrencies in real-time."
                    img={coinDom}
                    techno1="React"
                    techno2="SCSS"
                    code="https://github.com/CataRadu19/Crypto-site"
                    demo="https://crypto-site-radu-catalin.netlify.app/"
                    scrollY="-70%"
                    cName=""
                    icon="🪙"
                />

                <Project
                    title="GYMATE"
                    description="A gym website is a comprehensive resource for fitness information, class schedules, membership options, and tools to help users achieve their fitness goals."
                    img={gymSite}
                    techno1="React"
                    techno2="Tailwind CSS"
                    code="https://github.com/CataRadu19/Gym-site"
                    demo="https://gym-site-radu-catalin.netlify.app/"
                    scrollY="-85%"
                    cName="reverse"
                    icon="🏋️"
                />

                <Project
                    title="RAOUF ECOMMERCE"
                    description="With a focus on simplicity and clean design, this store prioritize user experience, making it easy for customers to find and purchase the products they need."
                    img={eCommerce}
                    techno1="React"
                    techno2="Vanila CSS"
                    code="https://github.com/CataRadu19/Shop-site"
                    demo="https://shop-site-radu-catalin.netlify.app/"
                    scrollY="-67%"
                    cName=""
                    icon="🛒"
                />
            </div>
        </div>
    );
}