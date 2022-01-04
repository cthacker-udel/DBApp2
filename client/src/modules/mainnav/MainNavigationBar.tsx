import React from 'react';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';

export const MainNavigationBar = () => {

    return(

        <>
            <Navbar bg="light" fixed="top">
                <Container>
                    <Navbar.Brand href="#/tickets">Cameron Ticketing</Navbar.Brand>
                </Container>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <NavDropdown title="Ticketing Module" id="basic-nav-dropdown">
                            <Nav.Link href="/tickets/add">Add Ticket</Nav.Link>
                            <Nav.Link href="/tickets/remove">Remove Ticket</Nav.Link>
                            <Nav.Link href="/tickets/edit">Edit Ticket</Nav.Link>
                        </NavDropdown>
                        <NavDropdown title="User Module" id="basic-nav-dropdown">
                            <Nav.Link href="/users/mainpage">Main Page</Nav.Link>
                            <Nav.Link href="/users/add">Add User</Nav.Link>
                            <Nav.Link href="/users/remove">Remove User</Nav.Link>
                            <Nav.Link href="/users/edit">Edit User</Nav.Link>
                        </NavDropdown>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </>

    );


};