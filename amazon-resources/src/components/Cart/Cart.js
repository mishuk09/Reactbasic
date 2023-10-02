import React from 'react';
import './Cart.css'

const Cart = (props) => {
    const { cart } = props;
    let total = 0;
    let shipping = 0;
    for (const product of cart) {
        total = total + product.price;
        shipping = shipping + product.shipping;
    }
    const tax = parseFloat((total * 0.1).toFixed(2));
    const grant = tax + shipping + total;

    return (

        <div className='cart' >
            <h4>Order Summary</h4>
            <p>Selected Items: {cart.length}</p>
            <p>Total Price:$ {total}</p>
            <p>Total Shiping price : ${shipping}</p>
            <p>Tax:${tax}</p>
            <p>Grant Total:$ {grant.toFixed(2)}</p>
        </div>


    );
};

export default Cart;