import React, { useEffect, useState } from 'react';
import './Shop.css';
import Product from '../Product/Product';


const Shop = () => {

    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('products.json')
            .then(res => res.json())
            .then(data => setProducts(data))

    }, []);
    const handleAddToClick = () => {
        console.log('Click');
    }
    return (
        <div className='shop-container'>
            <div className="products-container  ">

                {
                    products.map(product => <Product
                        key={product.id}
                        product={product}
                        handleAddToClick={handleAddToClick}

                    ></Product>)
                }
            </div>
            <div className="cart-container">
                <h1>this is for carts</h1>
            </div>
        </div>
    );
};

export default Shop;