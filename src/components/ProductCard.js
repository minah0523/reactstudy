import React from 'react';
import {Card} from 'react-bootstrap';

const ProductCard = ({img, name, desc, rating, numReviews, price}) => {
    return (
        <Card className='my-3 p-3 rounded'>
            <Card.Img src={img} variant='top' />
            <Card.Body>
                <Card.Title>
                    <strong>{name.slice(0, 17)}</strong>
                </Card.Title>
                <Card.Text>
                    {desc.slice(0, 80)} ...
                </Card.Text>
                <Card.Text>
                    {rating} from {numReviews} reviews
                </Card.Text>
                <Card.Text as='h4'>
                    ${price}
                </Card.Text>
            </Card.Body>
        </Card>
    );
};

export default ProductCard;