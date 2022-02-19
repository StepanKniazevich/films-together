import React from "react";
import { Navbar, Nav, Link } from "react-bootstrap";


export default function HeaderNav() {

    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" className="header">
            <Navbar.Brand>Our films</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="mr-auto">
                    <Nav.Link href="/Anime">Аніме</Nav.Link>
                    <Nav.Link href="/Different">Фільми</Nav.Link>
                    <Nav.Link>Серіали</Nav.Link>
                    <Nav.Link>Мелодрами</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>

    )
}