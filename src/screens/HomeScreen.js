import React from 'react';
import {Container, Row, Col} from 'react-bootstrap';
import ProductCard from '../components/ProductCard';
import products from '../products';

const HomeScreen = () => {
    return (
        <Container>
            <h1>Welcome to Mina Shopping!</h1>
            <Row>
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
            </Row>
            {/* {products.map(product => (
                <h1>{product.name}</h1>
            ))} */}
        </Container>
    );
};

export default HomeScreen;