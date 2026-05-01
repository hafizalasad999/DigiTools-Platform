import React from 'react';

const CartSection = ({ Product }) => {
    const {name, description, price, period, tagType, features, icon} = Product;
    return (
        <div className="  bg-base-100 shadow-sm">
            <div className="card-body">
                <div className='flex justify-between'>
                    <div className='border border-amber-200 rounded-full w-14 h-14 justify-center items-center flex'><img src={icon} alt="" /></div>
                    <div className="badge badge-soft badge-primary rounded-full ">{tagType}</div>
                </div>
                <div>
                    <h3 className='card-title font-bold text-2xl text-[#101727]'>{name}</h3>
                    <p className=' mt-4 text-[#627382]'>{description}</p>
                    <h5 className='flex text-2xl font-medium mt-4'>${price}/<span><p className='text-[16px] font-light' >{period}</p></span></h5>
                    <ul className='mt-4'>
                        {
                            features.map((features,index)=><li key={index} className='justify-self-start space-y-2'>
                            <svg xmlns="http://www.w3.org/2000/svg" class="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" /></svg>
                            <span className='text-[#627382] font-medium'>{features}</span>
                        </li>)
                        }
                    </ul>
                    <button className='btn w-full bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white rounded-full mt-4'>Buy Now</button>
                </div>
            </div>
        </div>
    );
};

export default CartSection;