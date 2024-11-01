'use client'
import { Container, Nav, NavDropdown, Navbar } from 'react-bootstrap'
import logo from './remove.photos-removed-background.png'
import Link from 'next/link'
function NavBar() {
    return (
        <Navbar collapseOnSelect fixed='top' className="bg-body-tertiary" expand="lg" id="navs" >
            <Container>
                <Navbar.Brand aria-label="Home" href="/" style={{ width: '150px' }}>
                    <img style={{ height: '42px', width: '150px' }} src={logo.src} alt="" />
                </Navbar.Brand>
                <Navbar.Toggle id="navbar-toggler" aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll" style={{ justifyContent: 'center' }} >
                    <Nav style={{ color: 'rgb(15 43 86)' }}>
                        <Nav.Link as={Link} eventKey='0' href='/' >
                            Home
                        </Nav.Link>
                        <NavDropdown title="About Us" id="basic-nav-dropdown">
                            <NavDropdown.Item as={Link} eventKey='0' href="/Teams">
                                Teams
                            </NavDropdown.Item>
                            <NavDropdown.Item as={Link} eventKey='0' href="/Certificates">Certificates</NavDropdown.Item>
                            <NavDropdown.Item as={Link} eventKey='0' href="/Agencies">Agencies & Clients</NavDropdown.Item>
                        </NavDropdown>

                        <Nav.Link as={Link} eventKey='0' href='/#services' >
                            Services
                        </Nav.Link>
                        <Nav.Link as={Link} eventKey='0' href='/Projects' >
                            Projects
                        </Nav.Link>
                        <Nav.Link as={Link} eventKey='0' href='/Products' >
                            Products
                        </Nav.Link>
                        <Nav.Link as={Link} eventKey='0' href='/#contact' >
                            Contact Us
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default NavBar