import React, { useEffect } from 'react';
import {Container, Row, Col} from 'react-bootstrap';
import ProductCard from '../components/ProductCard';
import { useDispatch, useSelector } from 'react-redux';
import { listProducts } from '../actions/productActions';
import LoadingBar from "../components/LoadingBar";
import Message from "../components/Message";

const HomeScreen = () => {
    const dispatch = useDispatch();

    const productList = useSelector((state) => state.productList);
    const {products, loading, error} = productList;

    useEffect(() => {
        dispatch(listProducts())
    }, [dispatch])

    return (
        <Container>
            <h1>Welcome to Mina Shopping!</h1>
            {loading ? (
                <LoadingBar />
            ) : error ? (
                <Message variant='danger'>{error}</Message>
            ) : (
                <Row>
                    {products.length === 0
                        ? <h1>데이터가 없습니다.</h1>
                        : <>
                            {products.map(product => (
                                <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
                                    <ProductCard
                                        id={product._id}
                                        name={product.name}
                                        price={product.price}
                                        img={product.image}
                                        desc={product.description}
                                        rating={product.rating}
                                        numReviews={product.numReviews}
                                    />
                                </Col>
                            ))}
                        </>
                    }
                </Row>
            )}
        </Container>
    );
};

export default HomeScreen;