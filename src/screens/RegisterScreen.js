import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Form, Button, Row, Col } from 'react-bootstrap';
import FormContainer from '../components/FormContainer';
import LoadingBar from '../components/LoadingBar';
import {useDispatch, useSelector} from 'react-redux';
import { register } from '../actions/userActions';
import Message from "../components/Message";

const RegisterScreen = ({ history }) => {

    const dispatch = useDispatch();

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    const userRegister = useSelector((state) => state.userRegister);
    const {loading, error, userInfo} = userRegister;

    const submitHandler = async (e) => {
        e.preventDefault();

        if (password !== confirmPassword) {
            alert('password do not match')
        }
        else {
            dispatch(register(name, email, password))
            history.push('/login')
        }
    }

    return (
        <FormContainer>
            <h1>Register</h1>
            {loading && <LoadingBar />}
            {error && <Message variant='danger'>{error}</Message>}
            <Form onSubmit={submitHandler}>
                <Form.Group controlId="name">
                    <Form.Label>Name</Form.Label>
                    <Form.Control 
                        type='text'
                        placeholder='Enter User Name'
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                </Form.Group>
                <Form.Group controlId="email">
                    <Form.Label>Email</Form.Label>
                    <Form.Control 
                        type='email'
                        placeholder='Enter Email'
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </Form.Group>
                <Form.Group controlId="password">
                    <Form.Label>Password</Form.Label>
                    <Form.Control 
                        type='password'
                        placeholder='Enter Password'
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </Form.Group>
                <Form.Group controlId="confirmPassword">
                    <Form.Label>Confirm Password</Form.Label>
                    <Form.Control
                        type='password'
                        placeholder='Confirm Password'
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                    />
                </Form.Group>
                <Button type="submit" variant="primary">Register</Button>
            </Form>
            <Row className="py-3">
                <Col>
                    Already Account?{' '}
                    <Link to="/login">
                        Login
                    </Link>
                </Col>
            </Row>
        </FormContainer>
    );
};

export default RegisterScreen;