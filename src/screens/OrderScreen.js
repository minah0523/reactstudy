import React from 'react';
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
                                        <strong>Name: </strong> 김민아
                                    </p>
                                    <p>
                                        <strong>Email: </strong>
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
