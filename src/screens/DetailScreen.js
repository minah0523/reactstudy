import React, { useEffect, useState } from 'react';
import { Link, useParams, useHistory } from 'react-router-dom'
import {Row, Col, Image, ListGroup, Button, Container, Form} from 'react-bootstrap';
import Rating from '../components/Rating';
import { useDispatch, useSelector } from 'react-redux';
import {listProductDetails} from '../actions/productActions';
import LoadingBar from "../components/LoadingBar";
import Message from "../components/Message";


const DetailScreen = () => {
    //2
    const dispatch = useDispatch();

    const [qty, setQty] = useState(1);

    const { id } = useParams();

    const history = useHistory();

    const productDetails = useSelector((state) => state.productDetails);
    const { product, loading, error } = productDetails;

    useEffect(() => {
        dispatch(listProductDetails(id))
    }, [dispatch, id]);

    const addToCartHandler = () => {
        history.push(`/cart/${id}?qty=${qty}`)
    }

    return (
        <Container>
            <Link to={'/'} className='btn btn-light my-3'>Go Back</Link>
            { loading ? (
                <LoadingBar />
            ) : error ? (
                <Message variant='danger'>{error}</Message>
            ) : (
                <Row>
                    <Col md={6}>
                        <Image src={product.image} alt={product.name} />
                    </Col>
                    <Col md={3}>
                        <ListGroup variant='flush'>
                            <ListGroup.Item>
                                <h3>{product.name}</h3>
                            </ListGroup.Item>
                            <ListGroup.Item>
                                <Rating value={product.rating} text={`${product.numReviews} reviews`}/>
                            </ListGroup.Item>
                            <ListGroup.Item>
                                Price : ${product.price}
                            </ListGroup.Item>
                            <ListGroup.Item>
                                {product.description}
                            </ListGroup.Item>
                        </ListGroup>
                    </Col>
                    <Col md={3}>
                        <ListGroup variant='flush'>
                            <ListGroup.Item>
                                <Row>
                                    <Col>Price : </Col>
                                    <Col>
                                        <strong>${product.price}</strong>
                                    </Col>
                                </Row>
                            </ListGroup.Item>
                            <ListGroup.Item>
                                <Row>
                                    <Col>Status : </Col>
                                    <Col>
                                        {product.countInStock > 0 ? 'In Stock' : 'Out of Stock'}
                                    </Col>
                                </Row>
                            </ListGroup.Item>
                            {product.countInStock > 0 && (
                                <ListGroup.Item>
                                    <Row>
                                        <Col>Qty</Col>
                                        <Col>
                                            <Form.Control
                                                as='select'
                                                value={qty}
                                                onChange={(e)=> setQty(e.target.value)}
                                            >
                                                {[...Array(product.countInStock).keys()].map((x) => (
                                                    <option key={ x + 1 } value={ x + 1 }>
                                                        { x + 1 }
                                                    </option>
                                                ))}
                                            </Form.Control>
                                        </Col>
                                    </Row>
                                </ListGroup.Item>
                            )}
                            <ListGroup.Item>
                                <Button
                                    className='btn-block'
                                    type='button'
                                    disabled={product.countInStock === 0}
                                    onClick={addToCartHandler}
                                >
                                    Add to Cart
                                </Button>
                            </ListGroup.Item>
                        </ListGroup>
                    </Col>
                </Row>
            )}
        </Container>
    );
};

export default DetailScreen;