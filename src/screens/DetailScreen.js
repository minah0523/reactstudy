import React, {useState, useEffect} from 'react';
import axios from 'axios';

const DetailScreen = ({match}) => {

    const productId = match.params.id;

    const [product, setProduct] = useState({});

    const getProduct = async() => {
        await axios.get(`/api/products/${productId}`)
        // .then(res => console.log("++++++++++++", res.data))
        .then(res => setProduct(res.data))
        .catch(err => console.log(err.message))
    }

    useEffect(() => {
        getProduct();
    }, {})

    return (
        <div>
            <h1>{product.name}</h1>
        </div>
    );
};

export default DetailScreen;