import React, { useState } from 'react';
import { Form, Button, Col } from 'react-bootstrap';
import {FormContainer, CheckoutSteps} from "../components";

const PaymentScreen = () => {

    const [paymentMethod, setPaymentMethod] = useState('PayPal');

    const submitHandler = async (e) => {
        e.preventDefault();

    }

    return (
        <FormContainer>
            <CheckoutSteps step1 step2 step3 />
            <h1>Payment</h1>
            <Form onSubmit={submitHandler}>
                <Form.Group>
                    <Form.Label as='legend'>Select Method</Form.Label>
                    <Col>
                        <Form.Check 
                            type='radio'
                            label='PayPal or Credit Card'
                            id='PayPal'
                            name='paymentMethod'
                            value="PayPal"
                            checked
                            onChange={e => setPaymentMethod(e.target.value)}
                        />
                    </Col>
                </Form.Group>
                <Button type='submit' variant='primary'>
                    Continue
                </Button>
            </Form>
        </FormContainer>
    );
};

export default PaymentScreen;