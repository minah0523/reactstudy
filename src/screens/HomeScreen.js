import React, { useState, useEffect } from 'react';
import {Container, Row, Col} from 'react-bootstrap';
import ProductCard from '../components/ProductCard';
import axios from 'axios';
// import products from '../products';

const HomeScreen = () => {
    // 상태선언 함수선언 상수 변수 선언
    const [products, setProducts] = useState([]);


    const getData = async() => {
        // 네트워킹 
        // async-await : 비동기 네트워킹

        await axios
        .get("/api/products")
        // .then(res => console.log(res.data.products))
        .then(res => {
            setProducts(res.data.products)
        })
        .catch(err => console.log(err))

    }

    useEffect(() => {
        // console.log('안녕');
        getData();
    }, [])

    //화면에 보여지는 부분
    return (
        <Container>
            <h1>Welcome to Mina Shopping!</h1>
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
            {/* {products.map(product => (
                <h1>{product.name}</h1>
            ))} */}

        </Container>
    );
};

export default HomeScreen;