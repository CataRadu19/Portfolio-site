import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Components/Header/Header';
import Hero from './Components/Hero/Hero';
import About from './Components/About/About';
import Projects from './Components/Projects/Projects';
import Contact from './Components/Contact/Contact';
import Footer from './Components/Footer/Footer';
import { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';

export default function App() {

  const [isLoading, setIsLoading] = useState(true);

  // 1 sec loader
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {isLoading ? <FontAwesomeIcon icon={faSpinner} className='fa-spinner' spin style={{
        color: "#152239",
        position: "absolute",
        top: "40%",
        left: "46%",
        fontSize: "7rem",

      }} /> :
        <div className="App">
          <Header />
          <Hero />
          <About />
          <Projects />
          <Contact />
          <Footer />
        </div>
      }
    </>
  );
}

