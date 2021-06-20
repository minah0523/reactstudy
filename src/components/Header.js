import React from 'react';
import {Navbar, Nav, Container} from 'react-bootstrap';

const Header = ({variant}) => {
    return ( 
        <header>
            <Navbar bg={variant} variant='dark' expand='lg' collapseOnSelect>
                <Container>
                    <Navbar.Brand href='/'>MinaShop</Navbar.Brand>
                    <Navbar.Toggle aria-controls='basic-navbar-nav' />
                    <Navbar.Collapse id='basic-navbar-nav'>
                        <Nav className='ml-auto'>
                            <Nav.Link href='/cart'>
                                <i className='fas fa-shopping-cart' /> Cart 
                            </Nav.Link>
                            <Nav.Link href='/login'>
                                <i className='fas fa-user' /> Login 
                            </Nav.Link>
                        </Nav>                        
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </header>    
    );
};

export default Header;