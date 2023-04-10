import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Components/Header/Header';
import Hero from './Components/Hero/Hero';
import About from './Components/About/About';
import Projects from './Components/Projects/Projects';

export default function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <About />
      <Projects />
    </div>
  );
}

