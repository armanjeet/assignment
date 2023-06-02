import React from 'react'
import { Link } from 'react-router-dom';
import { Navbar, Nav, NavLink } from 'react-bootstrap';
import 'bootstrap/dist/js/bootstrap.bundle.min';

const Sidebar = () => {
    return (
        <Navbar collapseOnSelect expand="sm" bg="dark" variant="dark">
            <Navbar.Toggle aria-controls='navbarScroll' data-bs-target="#navbarScroll" />
            <Navbar.Collapse id='navbarScroll'>
                <Nav>
                    <NavLink eventkey="1" as={Link} to="/" className='bi bi-house'> </NavLink>
                    <NavLink eventkey="2" as={Link} to="/about">about</NavLink>
                    <NavLink eventkey="3" as={Link} to="/contact">contact</NavLink>
                    <NavLink eventkey="1" as={Link} to="/" className='bi bi-person-circle' id='person' > </NavLink>
                </Nav>
            </Navbar.Collapse>

        </Navbar>
    )
}

export default Sidebar