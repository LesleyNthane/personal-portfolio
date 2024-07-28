import { useState, useEffect } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { ArrowRightCircle } from "react-bootstrap-icons";
import headerImage from "../assets/img/Les-header2.png";
import 'animate.css';
import TrackVisibility from "react-on-screen";

/* for icons install :npm install react-bootstrap-icons --save */
export const Banner = () => {
    const [loopNum, setLoopNum] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const toRotate = [ "Web Developer", "Web Designer", "UI/UX Designer" ];
    const [text, setText] = useState('');
    const [delta, setDelta] = useState(300 - Math.random() * 100);
    const period = 2000;

    useEffect(() => {
        let ticker = setInterval(() => {
            tick();
        }, delta)

        return () => { clearInterval(ticker) };
    }, [text])

    const tick = () => {
        let i = loopNum % toRotate.length;
        let fullText = toRotate[i];
        let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

        setText(updatedText);

        if (isDeleting){
            setDelta(prevDelta => prevDelta / 2)
        }

        if (!isDeleting && updatedText === fullText){
            setIsDeleting(true);
            setDelta(period);
        }else if (isDeleting && updatedText === ''){
            setIsDeleting(false);
            setLoopNum(loopNum + 1);
            setDelta(500);
        }
        //ended video on 37:17 minutes.
    }

    return (
        <section className="banner" id="home">
            <Container>
                <Row className="align-item-center">
                    <Col xs={12} md={6} xl={7}>  
                        <TrackVisibility>
                        {({ isVisible }) => 
                            <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                                <span className="tagline">Welcome to my Portfolio</span>
                                <h1>{`Hi I'm Lesley Nthane `}<br/><span className="wrap">{text}</span></h1>
                                <p>
                                    My name is Lesley Nthane, and I am a web developer currently employed as an IT Assistant 
                                    at Bona Electronic Solutions. I am a proficient web developer with aspirations to become 
                                    a software developer. My skills enable me to create responsive and high-quality frontend, 
                                    backend, and full-stack websites. I am currently working on integrating my web applications 
                                    across all operating systems to enhance their responsiveness and efficiency.
                                </p>
                                <a href="#connect"><button onClick={() => console.log('connect')}>Let's connect <ArrowRightCircle size={25} /></button></a>
                            </div>}
                        </TrackVisibility>
                    </Col>
                    <Col xs={12} md={6} xl={5} id="pic">
                        <img src={headerImage} alt="Header Iamage" />
                    </Col>
                </Row>
            </Container>
        </section>
    )
}