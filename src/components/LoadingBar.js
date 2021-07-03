import React from 'react';
import { Spinner } from 'react-bootstrap';

const LoadingBar = () => {
    return (
        <Spinner 
            animation="border"
            role="status"
            style={{
                width: '50px',
                height: '50px',
                margin: 'auto',
                display: 'block',
            }} 
            variant="info" 
        >
            <span className="sr-only">Loading...</span>   
        </Spinner>
    );
};

export default LoadingBar;