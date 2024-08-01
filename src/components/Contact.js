import { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import contactImg from "../assets/img/contact-img.svg";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

//Ended on 1h:15m:18s
/**For mail server install: npm install express cors nodemailer*/

export const Contact = () => {
    const formInitialDetails = {
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        message: ''
    }

    const [formDetails, setFormDetails] = useState(formInitialDetails);
    const [buttonText, setButtonText] = useState('Send');
    const [status, setStatus] = useState({});

    const onFormUpdate = (category, value) => {
        setFormDetails({
            ...formDetails,
            [category]: value
        })
    }

    const onSubmit = async (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);
    
        formData.append("access_key", "2e339ec8-3fec-476e-94db-b4f9fa2fc861");
    
        const object = Object.fromEntries(formData);
        const json = JSON.stringify(object);
    
        const res = await fetch("https://api.web3forms.com/submit", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json"
          },
          body: json
        }).then((res) => res.json());
    
        setFormDetails(formInitialDetails);

        if (res.success) {
          console.log("Success", res);
          setStatus({ success: true, message: 'Message sent successfully' });
        }else {
            setStatus({ success: false, message: 'Something went wrong, please try again later.' });
        }
      };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setButtonText('Sending...');
        
        try {
            let response = await fetch("http://localhost:500/contact", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json;charset=utf-8",
                },
                body: JSON.stringify(formDetails),
            });
            
            setButtonText("Send");
            let result = await response.json();
    
            setFormDetails(formInitialDetails);
    
            if (response.ok) {
                setStatus({ success: true, message: 'Message sent successfully' });
            } else {
                setStatus({ success: false, message: 'Something went wrong, please try again later.' });
            }
        } catch (error) {
            setButtonText("Send");
            setStatus({ success: false, message: 'Something went wrong, please try again later.' });
            console.error("Error:", error);
        }
    };

    return (
        <section className="contact" id="connect">
            <Container>
                <Row className="align-items-center">
                    <Col md={6}>
                    <img src={contactImg} alt="Contact Us" />
                    </Col>
                    <Col md={6}>
                        <h2>Get In Touch</h2>
                        <form onSubmit={onSubmit}>
                            <Row>
                                <Col sm={6} className="px-1">
                                    <input type="text" name='name' value={formDetails.firstName} placeholder="First Name" onChange={(e) => onFormUpdate('firstName', e.target.value)} required />
                                </Col>
                                <Col sm={6} className="px-1">
                                    <input type="text" name="lastname" value={formDetails.lastName} placeholder="Last Name" onChange={(e) => onFormUpdate('lastName', e.target.value)} />
                                </Col>
                                <Col sm={6} className="px-1">
                                    <input type="email" name="email" value={formDetails.email} placeholder="Email Address" onChange={(e) => onFormUpdate('email', e.target.value)} required />
                                </Col>
                                <Col sm={6} className="px-1">
                                    <input type="tel" value={formDetails.phone} placeholder="Phone number" onChange={(e) => onFormUpdate('phone', e.target.value)} />
                                </Col>
                                <Col>
                                    <textarea rows="6" name='message' value={formDetails.message} placeholder="message" onChange={(e) => onFormUpdate('message', e.target.value)} required ></textarea>
                                    <button type="submit"><span>{buttonText}</span></button>
                                </Col>
                                {
                                    status.message &&
                                    <Col>
                                        <p className={status.success === false ? "danger" : "success"}>{status.message}</p>
                                    </Col>
                                }
                            </Row>
                        </form>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}