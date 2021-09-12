import React, {useEffect} from 'react';
import {useParams} from 'react-router-dom'
import {useDispatch, useSelector} from 'react-redux'
import {Message, LoadingBar} from '../components'
import {getOrderDetails} from "../actions/orderActions";
import {Col, ListGroup, Row} from "react-bootstrap";

const OrderScreen = () => {

    const {id} = useParams();

    const dispatch = useDispatch();

    const orderDetails = useSelector((state) => state.orderDetails);

    const {order, loading, error} = orderDetails;

    console.log(order);

    useEffect(() => {
        dispatch(getOrderDetails(id))
    }, [dispatch, id]);

    return (
        <>
            {loading && <LoadingBar/>}
            {error
                ? (
                   <Message variant={'danger'}>{error}</Message>
                ) : (
                    <>
                    <h1>Order {id}</h1>
                    <Row>
                        <Col md={8}>
                            <ListGroup variant={"flush"} >
                                <ListGroup.Item>
                                    <h2>Shipping</h2>
                                    <p>
                                        <strong>Name: </strong> {order.user.name}
                                    </p>
                                    <p>
                                        <strong>Email: </strong> {order.user.email}
                                    </p>
                                </ListGroup.Item>
                            </ListGroup>
                        </Col>
                    </Row>
                    </>
                )
            }
        </>
    );
};

export default OrderScreen;
