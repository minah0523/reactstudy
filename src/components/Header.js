import React from 'react';
import {Navbar, Nav, Container, NavDropdown} from 'react-bootstrap';
import {LinkContainer} from 'react-router-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import {logout} from "../actions/userActions";

const Header = ({variant}) => {
    const dispatch = useDispatch();
    const userLogin = useSelector((state) => state.userLogin);
    const { userInfo } = userLogin;

    console.log(userInfo);

    const logoutHandler = () => {
        dispatch(logout());
    }

    return ( 
        <header>
            <Navbar bg={variant} variant='dark' expand='lg' collapseOnSelect>
                <Container>
                    <Navbar.Brand href='/'>MinaShop</Navbar.Brand>
                    <Navbar.Toggle aria-controls='basic-navbar-nav' />
                    <Navbar.Collapse id='basic-navbar-nav'>
                        <Nav className='ml-auto'>
                            <LinkContainer to='/cart'>
                                <Nav.Link>
                                    <i className='fas fa-shopping-cart' /> Cart
                                </Nav.Link>
                            </LinkContainer>
                            {userInfo ? (
                                <NavDropdown title={userInfo.name} id='username'>
                                    <LinkContainer to='/profile'>
                                        <NavDropdown.Item>Profile</NavDropdown.Item>
                                    </LinkContainer>
                                    <NavDropdown.Item onClick={logoutHandler}>
                                        Logout
                                    </NavDropdown.Item>
                                </NavDropdown>
                            ) : (
                                <LinkContainer to='/login'>
                                    <Nav.Link>
                                        <i className='fas fa-user'></i> Sign In
                                    </Nav.Link>
                                </LinkContainer>
                            )}
                            {/*{userInfo ? (*/}
                            {/*    <NavDropdown title={userInfo.name} id='username'>*/}
                            {/*        <LinkContainer to='/profile'>*/}
                            {/*            <NavDropdown.Item>Profile</NavDropdown.Item>*/}
                            {/*        </LinkContainer>*/}
                            {/*        <NavDropdown.Item onClick={logoutHandler}>*/}
                            {/*            Logout*/}
                            {/*        </NavDropdown.Item>*/}
                            {/*    </NavDropdown>*/}
                            {/*) : (*/}
                            {/*    <LinkContainer to='/login'>*/}
                            {/*        <i className='fas fa-user' />Log In*/}
                            {/*    </LinkContainer>*/}
                            {/*)}*/}

                            {userInfo && userInfo.isAdmin && (
                                <NavDropdown id='adminmenu' title='Admin' >
                                    <LinkContainer to={'/admin/userlist'}>
                                        <NavDropdown.Item>Users</NavDropdown.Item>
                                    </LinkContainer>
                                    <LinkContainer to={'/admin/productlist'}>
                                        <NavDropdown.Item>Products</NavDropdown.Item>
                                    </LinkContainer>
                                    <LinkContainer to={'/admin/orderlist'}>
                                        <NavDropdown.Item>Orders</NavDropdown.Item>
                                    </LinkContainer>
                                </NavDropdown>
                            )}
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </header>    
    );
};

export default Header;