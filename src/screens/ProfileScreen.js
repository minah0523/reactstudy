import React, { useState } from 'react';
import { Form, Button, Row, Col } from 'react-bootstrap';
import LoadingBar from '../components/LoadingBar';
import FormContainer from '../components/FormContainer';

const ProfileScreen = () => {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    const submitHandler = async (e) => {
        e.preventDefault()
    }

    return (
        <FormContainer md={12}>
            <Row>
                <Col md={9}>
                    <h2>User Profile</h2>
                    <Form onSubmit={submitHandler}>
                        <Form.Group controlId='name'>
                            <Form.Label>User Name</Form.Label>
                            <Form.Control
                                type='text'
                                placeholder='Enter Name'
                                value={name}
                                onChange={e => setName(e.target.value)}
                            />
                        </Form.Group>
                        <Form.Group controlId='email'>
                            <Form.Label>User Email</Form.Label>
                            <Form.Control
                                type='email'
                                placeholder='Enter Email'
                                value={email}
                                onChange={e => setEmail(e.target.value)}
                            />
                        </Form.Group>
                        <Form.Group controlId='password'>
                            <Form.Label>User Password</Form.Label>
                            <Form.Control
                                type='password'
                                placeholder='Enter Password'
                                value={password}
                                onChange={e => setPassword(e.target.value)}
                            />
                        </Form.Group>
                        <Form.Group controlId='confirmPassword'>
                            <Form.Label>Confirm Password</Form.Label>
                            <Form.Control
                                type='password'
                                placeholder='Enter Confirm Password'
                                value={confirmPassword}
                                onChange={e => setConfirmPassword(e.target.value)}
                            />
                        </Form.Group>
                        <Button type="submit" variant="primary">Update</Button>
                    </Form>
                </Col>
            </Row>
            <Col md={3}>
                    <h2>My Orders</h2>
            </Col>
        </FormContainer>
    );
};

export default ProfileScreen;