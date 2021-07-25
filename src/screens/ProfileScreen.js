import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Form, Button, Row, Col, Table } from 'react-bootstrap';
import LoadingBar from '../components/LoadingBar';
import {getUserDetails, updateUserProfile} from "../actions/userActions";
import Message from "../components/Message";


const ProfileScreen = ({history}) => {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [message, setMessage] = useState("");

    const dispatch = useDispatch();

    const userDetails = useSelector((state) => state.userDetails);
    const { loading, error, user} = userDetails;

    const userLogin = useSelector((state) => state.userLogin);
    const { userInfo } = userLogin;

    const userUpdateProfile = useSelector((state) => state.userUpdateProfile);
    const { success } = userUpdateProfile;

    useEffect(() => {
        if(!userInfo){
            history.push('/login');
        }
        else {
            if(!userInfo.name) {
                dispatch(getUserDetails('profile'))
            }else {
                setName(userInfo.name);
                setEmail(userInfo.email);
            }
        }
    }, [dispatch, history, userInfo, user]);


    const submitHandler = async (e) => {
        e.preventDefault()
        if(password !== confirmPassword){
            setMessage('Password do not match')
        }
        else {
            dispatch(updateUserProfile({id: user._id, name, email, password}))
        }
    }

    return (
            <Row>
                <Col md={3}>
                    <h2>User Profile</h2>
                    {loading && <LoadingBar />}
                    {message && <Message variant='danger'>{message}</Message> }
                    {error && <Message variant='danger'>{error}</Message>}
                    {success && <Message variant='success'>Profile Updated</Message>}
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
                <Col md={9}>
                    <h2>My Orders</h2>
                    <Table striped bordered hover responsive className="table-sm">
                        <thread>
                            <tr>
                                <th>ID</th>
                                <th>DATE</th>
                                <th>TOTAL</th>
                                <th>PAID</th>
                                <th>DELIVERED</th>
                                <th></th>
                            </tr>
                        </thread>
                        <tbody>

                        </tbody>
                    </Table>
                </Col>
            </Row>
    );
};

export default ProfileScreen;