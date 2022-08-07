
import Navbar from './components/Sidebar/Navbar';
import Home from './components/Home/Home';
import About from './components/About/About';
import Skills from './components/Skills/Skills';
import Projects from './components/Projects/Projects';
import GlobalStyle from './styles';
import Contact from './components/Contact/Contact';
import Fade from 'react-reveal/Fade'

function App() {

  return (
    <>
    <GlobalStyle/>
      <Navbar/>
      <Fade>
        <section>       
          <Home/>
        </section>
      </Fade>
      <Fade>
        <section id='about_me'>
          <About/>
        </section>
      </Fade>
      <Fade left>
      <section id='skills'>
        <Skills/>
      </section>
      </Fade>
      <section id='projects' className='p-5'>
      <Projects/>
      </section>  
      <Fade left>
      <section id='contact'>
        <Contact/>
      </section>
      </Fade>
      </>
  );
}

export default App
