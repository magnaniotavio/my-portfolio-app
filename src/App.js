import './App.css';
import ProjectCard from './components/ProjectCard';
import { Project1, Project2, Project3, Project4 } from './components/MyProjects';
import { Container, Col, Navbar, Nav } from 'react-bootstrap';
import ToggleButton from './components/ToggleButton';

const App = () => {


  return (
    <div>
      <div class="links-container">
        <div class="links">
          <a href="https://github.com/magnaniotavio" target="_blank">GitHub</a>
          <a href="https://www.linkedin.com/in/otavio-magnani-59304227a/" target="_blank">LinkedIn</a>
        </div>
      </div>
      <div class="header">
        <Container>
          <h3>Octavio Magnani's Portfolio</h3>
          <p>Welcome to my portfolio website</p>
        </Container>
      </div>

      <div className="main-content-container">
        <ToggleButton name='About Me' content=
          {
            <Container>
              <div class="about-me">
                <p>
                  I'm a self-taught web developer from São Paulo-SP (Brazil) seeking job opportunities in the field.
                  Having completed my Law degree and worked briefly as a lawyer, I discovered my interest in programming and have been teaching myself to code since September 2022.
                  What attracts me to programming is, above all, the rigorous logic involved, and the opportunity to find and solve interesting problems.
                  As someone who enjoys reading philosophy, science, and learning foreign languages/grammar, I greatly appreciate the beauty of elegant logical structures.
                  Though my skills are mostly focused on JavaScript and frameworks like React and Angular, I am also confident in my ability to quickly learn new technologies and programming languages.
                </p>
              </div>
            </Container>
          }
        />
        <ToggleButton name='Resumé' content=
          {
            <div class="resume-link">
              <a href="https://drive.google.com/file/d/11a20ucWnIJ9QPE-bfxlMo_IyOU52usRv/view?usp=sharing">My Résume</a>
            </div>
          }
        />

        <ToggleButton name='My Personal Projects' content=
          {
            <Col>
              <ProjectCard name='Mock E-commerce Website' imageSequence={Project1} />
              <ProjectCard name='Dictionary API Search' imageSequence={Project2} />
              <ProjectCard name='Angular-based CRUD Blog' imageSequence={Project3} />
              <ProjectCard name='Wikipedia API Search' imageSequence={Project4} />
            </Col>
          }
        />
        <ToggleButton name='Contact Info' content=
          {
            <div class="contact-info">
              <p>Email: otavio.magnani@gmail.com</p>
              <p>WhatsApp: +55 11 91600 4393</p>
            </div>
          }
        />
      </div>
    </div >
  );
};

export default App;
