import React from 'react';
import { Row, Col, Button, ListGroup, Image, Card } from 'react-bootstrap';
import {CheckoutSteps, FormContainer, Message} from '../components';
import { useDispatch, useSelector } from 'react-redux';
import {Link} from "react-router-dom";

const PlaceOrderScreen = () => {

    const cart = useSelector((state) => state.cart );

    const addDecimals = (num) => {
        return (Math.round(num * 100) / 100).toFixed(2);
    }

    cart.itemsPrice = addDecimals(
        cart.cartItems.reduce((acc, item) => acc + item.price * item.price, 0)
    )

    cart.shippingPrice = addDecimals(
        cart.itemsPrice > 100 ? 0 : 100
    )

    cart.taxPrice = addDecimals(
        Number((0.15 * cart.itemsPrice).toFixed(2))
    )

    cart.totalPrice = (
        Number(cart.itemsPrice ) +
        Number(cart.shippingPrice) +
        Number(cart.taxPrice)
    ).toFixed(2)

    const placeOrderHandler = (e) => {
        e.preventDefault()
    }

    return (
        <FormContainer xs={12} md={12}>
            <CheckoutSteps step1 step2 step3 step4 />
            <Row>
                <Col md={8}>
                    <ListGroup variant='flush'>
                        <ListGroup.Item>
                            <h2>Shipping</h2>
                            <p>
                                <strong>Address:</strong>{' '}
                                {cart.shippingAddress.address}, {cart.shippingAddress.city},{' '}
                                {cart.shippingAddress.postal},{' '}
                                {cart.shippingAddress.country}
                            </p>
                        </ListGroup.Item>
                        <ListGroup.Item>
                            <h2>Payment Method</h2>
                            <p>
                                <strong>Method:</strong>{' '}
                                {cart.paymentMethod}
                            </p>
                        </ListGroup.Item>
                        <ListGroup.Item>
                            <h2>Order Items</h2>
                            {cart.cartItems.length === 0
                                ? (
                                    <Message>Your cart is empty.</Message>
                                ) : (
                                    <ListGroup.Item variant={'flush'}>
                                        {cart.cartItems.map((item, index) =>(
                                            <ListGroup.Item key={index}>
                                                <Row>
                                                    <Col md={1}>
                                                        <Image
                                                            src={item.image}
                                                            alt={item.name}
                                                            fluid
                                                            rounded
                                                        />
                                                    </Col>
                                                    <Col>
                                                        <Link to={`/product/${item.product}`}>
                                                            {item.name}
                                                        </Link>
                                                    </Col>
                                                    <Col md={4}>
                                                        {item.qty} * ${item.price} = ${item.qty * item.price}
                                                    </Col>
                                                </Row>
                                            </ListGroup.Item>
                                        ))}
                                    </ListGroup.Item>
                                )
                            }
                        </ListGroup.Item>
                    </ListGroup>
                </Col>
                <Col md={4}>
                    <Card>
                        <ListGroup variant='flush'>
                            <ListGroup.Item>
                                <h2>Order Summary</h2>
                            </ListGroup.Item>
                            <ListGroup.Item>
                                <Row>
                                    <Col>Items</Col>
                                    <Col>${cart.itemsPrice}</Col>
                                </Row>
                            </ListGroup.Item>
                            <ListGroup.Item>
                                <Row>
                                    <Col>Shipping</Col>
                                    <Col>${cart.shippingPrice}</Col>
                                </Row>
                            </ListGroup.Item>
                            <ListGroup.Item>
                                <Row>
                                    <Col>Tax</Col>
                                    <Col>${cart.taxPrice}</Col>
                                </Row>
                            </ListGroup.Item>
                            <ListGroup.Item>
                                <Row>
                                    <Col>Total</Col>
                                    <Col>${cart.totalPrice}</Col>
                                </Row>
                            </ListGroup.Item>
                            <ListGroup.Item>
                                <Button
                                    type="button"
                                    className="btn-block"
                                    onClick={placeOrderHandler}
                                >
                                    Place Order
                                </Button>
                            </ListGroup.Item>
                        </ListGroup>
                    </Card>
                </Col>
            </Row>
        </FormContainer>
    );
};

export default PlaceOrderScreen;