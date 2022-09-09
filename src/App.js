import './App.css';
import Profile from './Components/Home/Profile';
import About from './Components/AboutMe/About';
import Contact from './Components/Contact/Contact';
import Skills from './Components/Skills/Skills';
import Portfolio from './Components/Portfolio/Portfolio';
import Cursus from './Components/Cursus/Cursus';
import Footer from './Components/Footer/Footer';

function App() {
  return (
    <div className='app'>
      <Profile />
      <About />
      <Cursus />
      <Skills />
      <Portfolio />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
