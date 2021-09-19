import React, {useEffect} from 'react';
import { LinkContainer } from 'react-router-bootstrap'
import { useDispatch, useSelector } from "react-redux";
import { getListUsers, deleteUser } from "../actions/userActions";
import {LoadingBar, Message} from "../components";
import {Button, Table} from "react-bootstrap";
import {useHistory} from "react-router-dom"

const UserListScreen = () => {

    const dispatch = useDispatch();

    const history = useHistory();

    const userList = useSelector((state) => state.userList);
    const {loading, users, error} = userList;

    const userDelete = useSelector((state) => state.userDelete);
    const {success} = userDelete;

    const userLogin = useSelector((state) => state.userLogin);

    const {userInfo} = userLogin;

    console.log("********",userInfo);

    const deleteUserHandler = (id) => {
        if(window.confirm('Are you sure?')){
            dispatch(deleteUser(id));
        }
    }

    useEffect(()=> {
        if(userInfo && userInfo.isAdmin) {
            dispatch(getListUsers());
        }
        else {
            history.push("/login")
        }

    }, [dispatch, success, history])

    return (
        <>
            <h1>User List</h1>
            {loading ? <LoadingBar /> : (
                error ? (
                    <Message variant={'danger'}>{error}</Message>
                ) : (
                    <Table striped bordered hover responsive className={'table-sm'}>
                        <thead>
                        <tr>
                            <th>JOIN DATE</th>
                            <th>NAME</th>
                            <th>EMAIL</th>
                            <th>ADMIN</th>
                            <th></th>
                        </tr>
                        </thead>
                        <tbody>
                        {users.map(user => (
                            <tr key={user._id}>
                                <td>{user.createdAt.slice(0, 10)}</td>
                                <td>{user.name}</td>
                                <td><a href={`mailto: ${user.email}`}>{user.email}</a></td>
                                <td>
                                    {user.isAdmin ? (
                                        <i className={'fas fa-check'} style={{color: 'green'}} />
                                    ):(
                                        <i className={'fas fa-check'} style={{color: 'red'}} />
                                    )}
                                </td>
                                <td>
                                    <LinkContainer to={`/admin/user/${user._id}/edit`}>
                                        <Button variant={'light'} className={'btn-sm'}>
                                            <i className={'fas fa-edit'} />
                                        </Button>
                                    </LinkContainer>
                                    <Button
                                        variant={'danger'}
                                        className={'btn-sm'}
                                        onClick={ () => deleteUserHandler(user._id) }
                                    >
                                        <i className={'fas fa-trash'} />
                                    </Button>
                                </td>
                            </tr>
                        ))}
                        </tbody>
                    </Table>
                )
            )}

        </>
    );
};

export default UserListScreen;
