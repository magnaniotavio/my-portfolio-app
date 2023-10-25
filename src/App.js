import './App.css';
import ProjectCard from './components/ProjectCard';
import { Project1, Project2, Project3, Project4 } from './components/MyProjects';
import { Container, Row, Col, Navbar, Nav } from 'react-bootstrap';
import ToggleButton from './components/ToggleButton';

const App = () => {

  return (
    <div>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">Octavio Magnani's Portfolio</Navbar.Brand>
          <Nav>
            <Nav.Link href="https://github.com/magnaniotavio" target="_blank">GitHub</Nav.Link>
            <Nav.Link href="https://www.linkedin.com/in/otavio-magnani-59304227a/" target="_blank">LinkedIn</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <div class="header">
        <Container>
          <h3>Octavio Magnani's Portfolioooo</h3>
          <p>Welcome to my portfolio website</p>
        </Container>
      </div>

      <div className="main-content-container">
        <ToggleButton name='About Me' content=
          {
            <Col>
              <div class="about-me">
                <p>
                  I'm a self-taught web developer from São Paulo-SP (Brazil) seeking job opportunities in the field.
                  Having completed my Law degree and worked briefly as a lawyer, I discovered my interest in programming and have been teaching myself to code since September 2022.
                  What attracts me to programming is, above all, the rigorous logic involved, and the opportunity to find and solve interesting problems.
                  As someone who enjoys reading philosophy, science, and learning foreign languages/grammar, I greatly appreciate the beauty of elegant logical structures.
                  Though my skills are mostly focused on JavaScript and frameworks like React and Angular, I am also confident in my ability to quickly learn new technologies and programming languages.
                </p>
              </div>
            </Col>
          }
        />
        <ToggleButton name='Resumé' content=
          {
            <Col>
            </Col>
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
            <Container>
              <p>Email: otavio.magnani@gmail.com</p>
              <p>WhatsApp: +55 11 91600 4393</p>
            </Container>
          }
        />
      </div>
    </div >
  );
};

export default App;
