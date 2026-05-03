import React from 'react';

const Workflow = () => {
    return (
        <div className='mt-28 bg-linear-to-r from-[#4F39F6] to-[#9514FA]'>
            <div className='container mx-auto justify-center items-center text-center flex flex-col'>
                <div className='px-4 md:px-6 py-10 lg:px-48 lg:py-28 '>
                    <h3 className='font-extrabold text-3xl md:text-5xl text-white'>Simple, Transparent Pricing</h3>
                    <p className='text-white mt-4'>Choose the plan that fits your needs. Upgrade or downgrade anytime.</p>
                    <div className='gap-4 flex justify-center items-center mt-10'>
                        <button className='btn rounded-full w-40.75 text-[#4F39F6] font-semibold'>Explore Products</button>
                        <button className='btn rounded-full btn-outline  text-white font-semibold outline-white w-40.75'>View Pricing</button>
                    </div>
                    <p className='text-white mt-4'>14-day free trial • No credit card required • Cancel anytime</p>
                </div>
            </div>
        </div>
    );
};

export default Workflow;