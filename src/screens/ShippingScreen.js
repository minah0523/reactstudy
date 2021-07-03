import React, { useState } from 'react';
import FormContainer from '../components/FormContainer';
import { Form, Button } from 'react-bootstrap'
import CheckoutSteps from '../components/CheckoutSteps';


const ShippingScreen = () => {

    const [address, setAddress] = useState("");
    const [city, setCity] = useState("");
    const [postal, setPostal] = useState("");
    const [country, setCountry] = useState("");

    const submitHandler = async (e) => {
        e.preventDefault();
        
        const userInput = {
            address,
            city,
            postal,
            country
        }

        console.log(userInput);
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
                        value={postal}
                        required
                        onChange={e => setPostal(e.target.value)}
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