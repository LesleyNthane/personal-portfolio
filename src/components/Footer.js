import { Col, Container, Row } from "react-bootstrap";
//import { MailchimpForm } from "./MailchimpForm";
import logo from "../assets/img/logo1.png";
import navIcon1 from '../assets/img/nav-icon1.svg';
import navIcon2 from '../assets/img/nav-icon2.svg';
import navIcon3 from '../assets/img/icons8-twitterx2.svg';

export const Footer = () => {
    return (
        <footer className="footer">
            <Container>
                <Row className="align-item-center">
                    
                    <Col sm={6}>
                        <img src={logo} alt="Logo" />
                    </Col>
                    <Col sm={6} className="text-center text-sm-end">
                        <div className="social-icon">
                            <a href="https://linkedin.com/in/lesley-nthane-179386274"><img src={navIcon1} /></a>
                            <a href="https://github.com/LesleyNthane/"><img src={navIcon2} /></a>
                            <a href="https://x.com/lesley_nthane"><img src={navIcon3} /></a>
                        </div>
                        <p>CopyRigts 2024. All rights reserved by LesleyNthane</p>
                    </Col>
                </Row>
            </Container>
        </footer>
    )
}