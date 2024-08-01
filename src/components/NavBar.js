import { useState, useEffect } from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import logo from '../assets/img/logo1.png';
import navIcon1 from '../assets/img/nav-icon1.svg';
import navIcon2 from '../assets/img/nav-icon2.svg';
import navIcon3 from '../assets/img/icons8-twitterx2.svg';



/* for bootstrap install: npm install react-bootstrap bootstrap 8 */
export const NavBar = ()=> {
  const [activeLink, setActiveLink] = useState('home');
  const [scrolled, seScrolled] = useState(false);

  useEffect( () => {
    const onScroll = () => {
      if (window.scrollY > 50){
        seScrolled(true);
      }else{
        seScrolled(false);
      }
    }

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, []);


  const onUpdateActiveLink = (value) => {
    setActiveLink(value);
  }
  

    return (
        /*import Container from 'react-bootstrap/Container';
        import Nav from 'react-bootstrap/Nav';
        import Navbar from 'react-bootstrap/Navbar';
        import NavDropdown from 'react-bootstrap/NavDropdown';
        */
    <Navbar expand="lg" className={scrolled ? "scrolled": ""}>
      <Container>
        <Navbar.Brand href="#home">
            <img src={logo} alt="Logo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav">
            <span className="navbar-toggler-icon"></span>
        </Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home" className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('home')}>Home</Nav.Link>
            <Nav.Link href="#skills" className={activeLink === 'skills' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('skills')}>Skills</Nav.Link>
            <Nav.Link href="#projects" className={activeLink === 'projects' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('projects')}>Projects</Nav.Link>
          </Nav>
          <span className="navbar-text">
            <div className="social-icon">
                <a href="https://linkedin.com/in/lesley-nthane-179386274"><img src={navIcon1} alt="LinkedIn Icon" /></a>
                <a href="https://github.com/LesleyNthane/"><img src={navIcon2} alt="Github Icon" /></a>
                <a href="#"><img src={navIcon3} alt="" /></a>
            </div>
            <a href="#connect"><button className="vvd" onClick={() => console.log('connect')}><span>Let's Connect</span></button></a>
          </span>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    )
}