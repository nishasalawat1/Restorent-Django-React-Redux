import React, { Component } from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faList, faHome, faSearch, faUser } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';


class CustomNavbar extends Component {
    render() {
        return (
            <div>
                <Navbar bg="light" expand="lg">
                    <Navbar.Brand href="#home">Restorant</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="mr-auto">
                            <Nav.Link><Link to={"/"}><FontAwesomeIcon icon={faHome} />Home</Link></Nav.Link>
                            <Nav.Link><Link to={"/list"}><FontAwesomeIcon icon={faList} />List</Link></Nav.Link>
                            <Nav.Link><Link to={"/create"}><FontAwesomeIcon icon={faPlus} />Create</Link></Nav.Link>
                            <Nav.Link><Link to={"/search"}><FontAwesomeIcon icon={faSearch} />Search</Link></Nav.Link>
                            {
                                localStorage.getItem('token') ?
                                    <Nav.Link><Link to={"/logout"}><FontAwesomeIcon icon={faUser} />Logout</Link></Nav.Link>
                                    :
                                    <Nav.Link><Link to={"/login"}><FontAwesomeIcon icon={faUser} />Login</Link></Nav.Link>
                            }
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
            </div>
        );
    }
}

export default CustomNavbar;