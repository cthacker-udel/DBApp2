import React from 'react';
import { Card, Col, Container, Row, Form, Button } from 'react-bootstrap';

export const LandingPage = () => {

    return(
        <>
            <br />
            <Container>
                <Row>
                    <Col>
                        <Card>
                            <Card.Header style={{ textAlign: 'center' }} as="h5">Welcome to Cameron Industries!</Card.Header>
                            <Card.Body>
                                <Card.Title style={{ textAlign: 'center'}} as="h6">Login Page</Card.Title>
                                <br />
                                <br />
                                <Form>
                                    <Form.Group className="mb-3" controlId="LoginForm">
                                        <Form.Label>Username</Form.Label>
                                        <Form.Control type="text" placeholder="Enter username here" />
                                        <br />
                                        <br />
                                        <Form.Label>Password</Form.Label>
                                        <Form.Control type="text" placeholder="Enter password here" />
                                    </Form.Group>
                                </Form>
                                </Card.Body>
                                <br />
                                <Row className="col-md-5 mx-auto" >
                                    <Col style={{ textAlign: 'center', display: 'block'}} >
                                        <Button variant="outline-primary">Login</Button>
                                    </Col>
                                </Row>
                                <br />
                            <Card.Footer>Cameron Thacker Copyright 2022</Card.Footer>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </>
    );


};