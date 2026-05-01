import React, { use, useState } from 'react';

const DigiTools_Card = () => {
    // const Products = use(ProductsPromise);
    const [cardType, setCardType]=useState("Products")
    return (
        <div className='mt-28 container mx-auto flex'>
            <div className='justify-center items-center text-center mx-auto'>
                <h2 className='font-extrabold text-5xl text-[#101727]'>Premium Digital Tools</h2>
                <p className='mt-4 text-[#627382] md:w-[540px]'>Choose from our curated collection of premium digital products designed to boost your productivity and creativity.</p>
                <div className='mt-5'>
                    <button className={`btn ${cardType === "Products" ? "bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white" : ""} w-[120px]  font-semibold  text-black rounded-full`}
                    onClick={()=> setCardType("Products")}
                    >Products</button>
                    <button className={`btn ${cardType === "Cart" ? "bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white" : ""} w-[120px] text-black font-semibold  rounded-full`}
                    onClick={()=> setCardType("Cart")}
                    >Cart</button>
                </div>
            </div>
        </div>
    );
};

export default DigiTools_Card;