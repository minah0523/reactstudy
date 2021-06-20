import React from 'react';
import {Container, Row, Col, Card} from 'react-bootstrap';
import products from '../products';
import ProductCard from './ProductCard';


const Main = () => {
    return (
        <main className='py-3'>
          <Container>
            <h1>Welcome to Mina Shopping!</h1>
            <Row>
                {products.map(product => (
                    <Col sm={12} md={6} lg={4} xl={3}>
                        <ProductCard 
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
        </main>

    );
};

export default Main;