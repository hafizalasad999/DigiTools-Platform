import React from 'react';
// import CartSection from '../CartSection/CartSection';
import Card from '../../../ui/Card';

const Products = ({ Product, cartProduct, setCartProduct }) => {
    return (
        <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-7 w-10/12 mx-auto'>
            {
                Product.map(Product => <Card key={Product.id}
                    Product={Product}
                    cartProduct={cartProduct}
                    setCartProduct={setCartProduct}></Card>)
            }
        </div>
    );
};

export default Products;