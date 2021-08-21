import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap'
import { FormContainer, CheckoutSteps } from '../components';
import { useDispatch, useSelector } from 'react-redux';
import {saveShippingAddress} from "../actions/cartActions";
import { useHistory } from 'react-router-dom';


const ShippingScreen = () => {
    const dispatch = useDispatch();
    const history = useHistory();

    const cart = useSelector(state => state.cart);
    const { shippingAddress } = cart;

    const [address, setAddress] = useState(shippingAddress.address);
    const [city, setCity] = useState(shippingAddress.city);
    const [postalCode, setPostalCode] = useState(shippingAddress.postalCode);
    const [country, setCountry] = useState(shippingAddress.country);

    const submitHandler = async (e) => {
        e.preventDefault();
        
        const userInput = {
            address,
            city,
            postalCode,
            country
        }
        dispatch(saveShippingAddress(userInput))
        history.push('/payment')
    }

    return (
        <FormContainer>
            <h1>Shipping</h1>
            <CheckoutSteps step1 step2 />
            <Form onSubmit={submitHandler}>
                <Form.Group>
                    <Form.Label>Address</Form.Label>
                    <Form.Control
                        type='text'
                        placeholder='Enter Address'
                        value={address}
                        required
                        onChange={e => setAddress(e.target.value)}
                    />
                </Form.Group>
                <Form.Group>
                    <Form.Label>City</Form.Label>
                    <Form.Control
                        type='text'
                        placeholder='Enter City'
                        value={city}
                        required
                        onChange={e => setCity(e.target.value)}
                    />
                </Form.Group>
                <Form.Group>
                    <Form.Label>Postal Code</Form.Label>
                    <Form.Control
                        type='text'
                        placeholder='Enter Postal Code'
                        value={postalCode}
                        required
                        onChange={e => setPostalCode(e.target.value)}
                    />
                </Form.Group>
                <Form.Group>
                    <Form.Label>Country</Form.Label>
                    <Form.Control
                        type='text'
                        placeholder='Enter Country'
                        value={country}
                        required
                        onChange={e => setCountry(e.target.value)}
                    />
                </Form.Group>
                <Button type="submit" variant="primary">Continue</Button>
            </Form>
        </FormContainer>
    );
};

export default ShippingScreen;