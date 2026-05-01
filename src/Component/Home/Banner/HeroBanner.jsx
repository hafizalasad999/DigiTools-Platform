import React from 'react';
import Banner from '../../../assets/banner.png'
import { Play } from 'lucide-react';

const HeroBanner = () => {
    return (
        <div className='grid px-4 md:grid-cols-2 gap-14 container mx-auto mt-21.25'>
            <div className='justify-center items-center flex'>
                <div>
                    <div className='bg-[#E1E7FF] w-75 px-4 py-2 rounded-full flex gap-1.25 justify-center items-center'>
                        <div className='bg-linear-to-r from-[#4F39F6]/30 to-[#9514FA]/30 w-5 h-5 rounded-full justify-center items-center flex'>
                            <div className='bg-linear-to-r from-[#4F39F6]/40 to-[#9514FA]/40 w-3.5 h-3.5 rounded-full justify-center items-center flex'>
                                <div className='bg-linear-to-r from-[#4F39F6]/70 to-[#9514FA]/70 w-2.25 h-2.25 rounded-full'></div>
                            </div>
                        </div>
                        <p className='text-[#4F39F6] font-medium '>New: AI-Powered Tools Available</p>
                    </div>
                    
                    <h2 className='font-extrabold lg:text-[72px] text-2xl'>Supercharge Your Digital Workflow</h2>
                    <p className='text-[18px] text-[#627382] mt-4'>Access premium AI tools, design assets, templates, and productivity
                        software—all in one place. Start creating faster today.
                        Explore Products
                    </p>
                    <div className='mt-8 gap-4 flex'>
                        <button className='btn bg-linear-to-r from-[#4F39F6] to-[#9514FA] rounded-full text-white font-bold'>Explore Products</button>
                        <button className='btn btn-outline rounded-full border-[#4F39F6] text-[#4F39F6] font-bold'><Play className='w-3.5'></Play> Watch Demo</button>
                    </div>
                </div>
            </div>
            <div>
                <img src={Banner} alt="" />
            </div>
        </div>
    );
};

export default HeroBanner;