import React from 'react';
import { toast } from 'react-toastify';

const CartSection = ({ cartProduct, setCartProduct }) => {
    const DeleteBtn = (Product) => {
        const filteredProduct = cartProduct.filter(cartProduct => cartProduct.name != Product.name);
        setCartProduct(filteredProduct)
        // toast.warn("Wow so easy!");

    }
    const handleCheckout = () => {
        setCartProduct([]);
        toast.warn("Order successful! Your cart is cleared.")
        // alert("");
    };
    const priceTotal = cartProduct.reduce((sum, Product) => sum + Product.price, 0)
    console.log(priceTotal);
    return (
        <div className='border-2 border-[#F2F2F2] rounded-2xl gap-7 container mx-auto p-10 w-max-full '>
            <h3 className='font-bold text-2xl text-gray-400'>Your Cart</h3>
            {cartProduct.map((Product, index) =>
            (
                <div key={index} className='flex justify-between bg-[#F9FAFC] p-5 rounded-2xl mt-4 lg:w-275'>
                    <div className='flex gap-4'>
                        <div className='border border-amber-200 rounded-full w-14 h-14 justify-center items-center flex'><img src={Product.icon} alt="" /></div>
                        <div>
                            <h3 className='card-title font-semibold text-[20px]  text-[#101727]'>{Product.name}</h3>
                            <h5 className='flex  mt-2'>${Product.price}/<span><p className='' >{Product.period}</p></span></h5>
                        </div>
                    </div>
                    <button className='btn bg-none border-none hover:bg-none text-[#F14749]' onClick={() => DeleteBtn(Product)}>Remove
                    </button>
                </div>

            )
            )
            }
            <div className='flex justify-between items-center mt-6'>
                <div>
                    <p className='text-[#627382]'>Total:</p>
                </div>
                <div>
                    <p className='font-bold text-2xl text-[#101727]'>${priceTotal}</p>
                </div>
            </div>
            <div className='mt-6'>
                <button onClick={()=>handleCheckout( )} className='btn bg-linear-to-r from-[#4F39F6] to-[#9514FA] font-semibold text-white rounded-full w-full'>Proceed to Checkout</button>
            </div>
        </div>
    );
};

export default CartSection;