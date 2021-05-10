import React from 'react'
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';

import './RightSideCart.css';

function RightSideCart() {
    return (    
      <div className="right-side-cart">
        <Container>
        <h3>This is your cart-content</h3>
        <Button variant="primary">Checkout</Button>
        </Container>
      </div>          
                        
    );
}

export default RightSideCart;
