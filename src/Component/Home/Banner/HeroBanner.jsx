import React from 'react';
import Banner from '../../../assets/banner.png'
const HeroBanner = () => {
    return (
        <div className='grid grid-cols-2 gap-14 container mx-auto mt-21.25'>
            <div className='justify-center items-center flex'>
                <div>
                    <div className='bg-[#E1E7FF] w-[291px] px-4 py-2 rounded-full flex gap-1.25 justify-center items-center'>
                        <div className='bg-[#4F39F6] w-4 h-4 rounded-full'></div>
                        <p className='text-[#4F39F6] font-medium '>New: AI-Powered Tools Available</p>
                    </div>
                    
                    <h2 className='font-extrabold text-[72px]'>Supercharge Your Digital Workflow</h2>
                    <p className='text-[18px] text-[#627382]'>Access premium AI tools, design assets, templates, and productivity
                        software—all in one place. Start creating faster today.
                        Explore Products
                    </p>
                </div>
            </div>
            <div>
                <img src={Banner} alt="" />
            </div>
        </div>
    );
};

export default HeroBanner;