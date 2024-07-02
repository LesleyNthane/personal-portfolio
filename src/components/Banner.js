import { Col, Container, Row } from "react-bootstrap";
import { ArrowRightCircle } from "react-bootstrap-icons";

export const Banner = () => {
    return (
        <section className="banner" id="home">
            <Container>
                <Row className="align-item-center">
                    <Col xs={12} md={6} xl={7}>
                        <span className="tagline">Welcome to my Portfolio</span>
                        <h1>{`Hi I'm Lesley Nthane`}</h1>
                        <p>Paragraph about My self</p>
                        <button onClick={() => console.log('connect')}>Let's connect</button>
                    </Col>
                    /*stopped at 28 min on you tube*/
                </Row>
            </Container>
        </section>
    )
}