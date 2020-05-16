import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
/**
* @author
* @function CustomNavbar
**/

const CustomNavbar = (props) => {
    return (
        <div>
            <Navbar collapseOnSelect>
                <Navbar.Brand>
                    <Nav.Link href="/">Goodlife</Nav.Link>
                </Navbar.Brand>
                <Navbar.Toggle />
                <Navbar.Collapse className="justify-content-end">
                    <Nav variant="pills" accessKey={1}>
                        <Nav.Item>
                            <Nav.Link href="/" eventKey={1} componentClass={Link} to="/">Home</Nav.Link>
                        </Nav.Item>
                    </Nav>
                    <Nav.Item>
                        <Nav.Link href="/news" eventKey={2} componentClass={Link} to="/news">News</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link href="/about" eventKey={3} componentClass={Link} to="/about">About</Nav.Link>
                    </Nav.Item>
                </Navbar.Collapse>

            </Navbar>

        </div>
    )

}

export default CustomNavbar