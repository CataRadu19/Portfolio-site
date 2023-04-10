import './Projects.css'
import Project from '../Project/Project'
import carRental from '../../Assets/Images/car-rental-whole-page.png'

export default function Projects() {

    let descCarRental = "A car rental website is an online platform that allows users to rent cars for personal or business use. The website provides an interface for searching, comparing, and reserving cars.";

    return (
        <div className="projects">
            <div className='container-width'>
                <Project title="CAR RENTAL" description={descCarRental} img={carRental} techno1="React" techno2="SCSS" code="https://github.com/CataRadu19/Portfolio-page" demo="https://car-rental-radu-catalin.netlify.app/" scrollY="-83%" icon="🚗" />
            </div>
        </div>
    );
}