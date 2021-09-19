import React, {useState, useEffect} from 'react';
import {Link, useHistory} from "react-router-dom";
import {FormContainer, LoadingBar, Message} from "../components";
import {useDispatch, useSelector} from "react-redux";
import {Button, Form} from "react-bootstrap";
import { getUserDetails, updateUser } from "../actions/userActions"

const UserEditScreen = ({ match} ) => {

    const userId = match.params.id;

    console.log({userId})

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [isAdmin, setIsAdmin] = useState(false)

    const dispatch = useDispatch();

    const userDetails = useSelector((state) => state.userDetails);
    const { loading, error, user} = userDetails;

    const userUpdate = useSelector((state) => state.userUpdate);
    const {
        loading: loadingUpdate,
        error: errorUpdate,
        success: successUpdate
    } = userUpdate

    console.log('successUpdate', successUpdate);

    const history = useHistory();

    useEffect(()=>{
        if(successUpdate) {
            history.push('/admin/userlist')
        }
        else {
            if (!user.name || user._id !== userId) {
                dispatch(getUserDetails(userId))
            } else {
                setName(user.name);
                setEmail(user.email);
                setIsAdmin(user.isAdmin);
            }
        }
    }, [dispatch, userId, user, successUpdate])


    const submitHandler = () => {
        dispatch(updateUser({_id: userId, name, email, isAdmin}) )
    }

    return (
        <>
            <Link to='/admin/userlist' className="btn btn-light my-3" >
                Go Back
            </Link>
            <FormContainer>
                <h1>Edit {user.name} User</h1>
                {loadingUpdate && <LoadingBar />}
                {errorUpdate && <Message variant={'danger'}>{errorUpdate}</Message>}
                {loading ? (
                    <LoadingBar />
                ):(
                    error ? (
                        <Message variant={'danger'}>{error}</Message>
                    ):(
                        <Form onSubmit={submitHandler}>
                            <Form.Group controlId={'name'}>
                                <Form.Label>Name</Form.Label>
                                <Form.Control
                                    type={"name"}
                                    placeholder={"Enter name"}
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                />
                            </Form.Group>
                            <Form.Group controlId={'email'}>
                                <Form.Label>Email</Form.Label>
                                <Form.Control
                                    type={"email"}
                                    placeholder={"Enter email"}
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                            </Form.Group>
                            <Form.Group controlId={'isAdmin'}>
                                <Form.Check
                                    type={"checkbox"}
                                    label={"Is Admin"}
                                    checked={isAdmin}
                                    onChange={(e) => setIsAdmin(e.target.value)}
                                />
                            </Form.Group>
                            <Button type={'submit'} variant={'primary'} >
                                Update
                            </Button>
                        </Form>
                    )
                )}
            </FormContainer>
        </>
    );
};

export default UserEditScreen;
