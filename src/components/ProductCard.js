// import React from 'react';
// import {Card} from 'react-bootstrap';


// const ProductCard = ({img, name, desc, rating, numReviews, price}) => {
//     return (
        
//     );
// };

// export default ProductCard;

import React from 'react';
import PropTypes from 'prop-types';
import {Card} from 'react-bootstrap';
import Rating from './Rating';

const ProductCard = ({id, img, name, desc, rating, numReviews, price}) => {
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
                    {/* {rating} from {numReviews} reviews */}
                    <Rating
                        text={`${numReviews} reviews`}
                        value={rating}
                        color='#fcba03'
                    />
                </Card.Text>
                <Card.Text as='h4'>
                    ${price}
                </Card.Text>
            </Card.Body>
        </Card>
    );
};

ProductCard.propTypes = {
    img: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    desc: PropTypes.string,
    rating: PropTypes.number,
    numReviews: PropTypes.number,
    price: PropTypes.number,
    id: PropTypes.string.isRequired
};

export default ProductCard;