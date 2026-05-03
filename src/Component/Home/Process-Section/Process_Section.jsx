import React from 'react';
import { User } from 'lucide-react';
import { PackageSearch } from 'lucide-react';
import { Rocket } from 'lucide-react';

const Process_Section = () => {
    return (
        <div className='bg-[#F9FAFC] mt-28'>
            <div className='container mx-auto flex'>
                <div className='px-4 py-10 md:px-6 md:py-10 lg:px-48 lg:py-28 mx-auto'>
                    <div className='justify-center items-center mx-auto text-center'>
                        <h3 className='font-extrabold text-5xl text-[#101727]'>Get Started in 3 Steps</h3>
                        <p className='text-[#627382] mt-4'>Start using premium digital tools in minutes, not hours.</p>
                        <div className='grid md:grid-cols-3 gap-7.5 mt-10'>
                            {/* Card-01 */}
                            <div className='card shadow-sm px-5 pt-5 pb-20 border border-gray-100 rounded-2xl'>
                                <div className='flex justify-end'>
                                    <span className='bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white rounded-full w-10 h-10 justify-center items-center text-center flex font-bold'>
                                        01
                                    </span>
                                </div>
                                <div className='flex flex-col justify-center items-center text-center mt-2'>
                                    <div className='bg-[#9514FA]/10 rounded-full w-20 h-20 justify-center items-center flex'>
                                        <User size={32} color="#9514FA" />
                                    </div>
                                    <h4 className='font-bold text-2xl text-[#101727] mt-5'>Create Account</h4>
                                    <p className='text-[#627382] mt-2 max-w-62.5'>
                                        Sign up for free in seconds. No credit card required to get started.
                                    </p>
                                </div>
                            </div>
                            {/* Card-02 */}
                            <div className='card shadow-sm px-5 pt-5 pb-20 border border-gray-100 rounded-2xl'>
                                <div className='flex justify-end'>
                                    <span className='bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white rounded-full w-10 h-10 justify-center items-center text-center flex font-bold'>
                                        02
                                    </span>
                                </div>
                                <div className='flex flex-col justify-center items-center text-center mt-2'>
                                    <div className='bg-[#9514FA]/10 rounded-full w-20 h-20 justify-center items-center flex'>
                                        <PackageSearch size={32} color="#9514FA"></PackageSearch>
                                    </div>
                                    <h4 className='font-bold text-2xl text-[#101727] mt-5'>Choose Products</h4>
                                    <p className='text-[#627382] mt-2 max-w-62.5'>
                                        Browse our catalog and select the tools that fit your needs.
                                    </p>
                                </div>
                            </div>
                            {/* Card-03 */}
                            <div className='card shadow-sm px-5 pt-5 pb-20 border border-gray-100 rounded-2xl'>
                                <div className='flex justify-end'>
                                    <span className='bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white rounded-full w-10 h-10 justify-center items-center text-center flex font-bold'>
                                        03
                                    </span>
                                </div>
                                <div className='flex flex-col justify-center items-center text-center mt-2'>
                                    <div className='bg-[#9514FA]/10 rounded-full w-20 h-20 justify-center items-center flex'>
                                        <Rocket size={32} color="#9514FA"></Rocket>
                                    </div>
                                    <h4 className='font-bold text-2xl text-[#101727] mt-5'>Start Creating</h4>
                                    <p className='text-[#627382] mt-2 max-w-62.5'>
                                        Download and start using your premium tools immediately.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Process_Section;