import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {deleteProduct, listProducts} from "../actions/productActions";
import {Button, Col, Container, Image, Row, Table} from "react-bootstrap";
import {LoadingBar, Message} from "../components";
import {useHistory} from "react-router-dom";

const ProductListScreen = () => {

    const dispatch = useDispatch();
    const history = useHistory();

    const productList = useSelector((state) => state.productList);
    const {products, loading, error} = productList;

    const productDelete = useSelector((state)=> state.productDelete);
    const {loading: deleteLoading, error: deleteError, success: deleteSuccess} = productDelete;

    useEffect(() => {
        dispatch(listProducts())
    }, [dispatch, deleteSuccess])

    console.log({products});

    const HandleDeleteProduct = (id) => {
        if(window.confirm('Are you sure?')){
            dispatch(deleteProduct(id));
        }
    }

    return (
        <Container>
            <h1>Product List</h1>
            {loading ? (
                <LoadingBar />
            ) : error ? (
                <Message variant={'danger'}>{error}</Message>
            ) : (
                <Table striped bordered hover responsive className={'table-sm'}>
                    <thead>
                    <tr>
                        <th>이미지</th>
                        <th>브랜드</th>
                        <th>카테고리</th>
                        <th>제품명</th>
                        <th>가격</th>
                        <th>수정</th>
                        <th>삭제</th>
                    </tr>
                    </thead>
                    <tbody>
                        {products.map(product => (
                            <tr  key={product._id}>
                                 <td><Image style={{width: '50px'}} src={product.image} /></td>
                                 <td>{product.brand}</td>
                                 <td>{product.category}</td>
                                 <td>{product.name}</td>
                                 <td>{product.price}</td>
                                 <td>
                                    <Button variant={'light'} className={'btn-sm'}>
                                        <i className={'fas fa-edit'} />
                                    </Button>
                                 </td>
                                <td>
                                    <Button
                                        variant={'danger'}
                                        className={'btn-sm'}
                                        onClick={()=>HandleDeleteProduct(product._id)}
                                    >
                                        <i className={'fas fa-trash'} />
                                    </Button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </Table>
            )}
        </Container>
    );
};

export default ProductListScreen;
