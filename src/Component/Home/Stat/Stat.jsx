import React from 'react';

const Stat = () => {
    return (
        <div className='mt-20.25 bg-linear-to-r from-[#4F39F6] to-[#9514FA] flex py-14.75 px-48'>
            <div className='container mx-auto justify-center items-center flex'>
                <div className="justify-between  text-white gap-32 grid md:grid-cols-3">
                    <div>
                        <h3 className='font-extrabold text-6xl'>50K+</h3>
                        <p className='text-2xl'>Active Users</p>
                    </div>
                    
                    <div>
                        <h3 className='font-extrabold text-6xl'>200+</h3>
                        <p className='text-2xl'>Premium Tools</p>
                    </div>
                    <div>
                        <h3 className='font-extrabold text-6xl'>4.9</h3>
                        <p className='text-2xl'>Rating</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Stat;