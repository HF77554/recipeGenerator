import React from 'react'
import './NavBar.css'
import { Navbar, Container, Nav, NavDropdown, Form, FormControl, Button } from 'react-bootstrap';
import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <Navbar collapseOnSelect expand="lg" variant='dark' className='navbar-main'>
        <Container fluid>
            <Navbar.Brand as={NavLink} to="/">
                Cookbook Online
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="me-auto">
                <Nav.Link as={NavLink} to="/feature">
                    Feature
                </Nav.Link>
                <Nav.Link as={NavLink} to="/finddish">
                    Find me a Dish!
                </Nav.Link>
                <Nav.Link href="#createdish">Create a Dish!</Nav.Link>
                <NavDropdown title="Browse My Recipes" id="collasible-nav-dropdown">
                    <NavDropdown.Item href="#action/3.1">Main Dish</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.2">Side Dish</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.3">Drink Menu</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action/3.4">Favorites!</NavDropdown.Item>
                </NavDropdown>
                </Nav>
                <Nav>
                <Nav.Link href="#profile">Profile</Nav.Link>
                <Nav.Link href="#login">LogIn</Nav.Link>
                </Nav>
                <Form className="d-flex">
                    <FormControl
                    type="search"
                    placeholder="Search"
                    className="me-2"
                    aria-label="Search"
                    />
                    <Button variant="warning">Search</Button>
                </Form>
            </Navbar.Collapse>
        </Container>
    </Navbar>
  )
}

export default NavBar