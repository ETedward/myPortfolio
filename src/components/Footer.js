import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

function Footer() {
    return(
    //mt-5 for margin top
    <footer className = "mt-5"> 
        <Container fluid = {true}>
            <Row className = "border-top justify-content-between p-3">
                <Col className = "p-0" md = {3} sm = {12}>
                    Edward Tian
                </Col>
                <Col className = "p-0 dflex justify-content-end" md = {2.5}>
                    This site was coded by Edward Tian
                </Col>
            </Row>
        </Container>
    </footer>
    )
}
export default Footer;