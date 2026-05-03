import React from 'react';

const PricingCart = () => {
    return (
        <div className='mt-28'>
            <div className='container mx-auto '>
                <div className='px-4 md:px-6 py-10 lg:px-48 lg:py-28 justify-center items-center flex flex-col '>
                    <h3 className='font-extrabold text-3xl md:text-5xl text-[#101727]'>Simple, Transparent Pricing</h3>
                    <p className='text-[#627382] mt-4'>Choose the plan that fits your needs. Upgrade or downgrade anytime.</p>
                    <div className='mt-6 grid md:grid-cols-2 lg:grid-cols-3 gap-8'>
                        {/* Price Cart 01 */}
                        <div className="card  bg-[#F9FAFC] border border-[#F2F2F2] text-[#101727] shadow-sm">
                            <div className="card-body">
                                <h4 className='font-bold text-2xl'>Starter</h4>
                                <p className='text-[#627382]'>Perfect for getting started</p>
                                <div className="flex justify-between">
                                    <h2 className="text-3xl font-bold">$0/mo</h2>
                                </div>
                                <ul className="mt-6 flex flex-col gap-2 text-xs text-[#627382]">
                                    <li>
                                        <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                                        <span>Access to 10 free tools</span>
                                    </li>
                                    <li>
                                        <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                                        <span>Basic templates</span>
                                    </li>
                                    <li>
                                        <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                                        <span>Community support</span>
                                    </li>
                                    <li>
                                        <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                                        <span>1 project per month</span>
                                    </li>
                                </ul>
                                <div className="mt-6">
                                    <button className="btn bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white font-bold btn-block rounded-full">Start Pro Trial</button>
                                </div>
                            </div>
                        </div>
                        {/* Price Cart 02 */}
                        <div className="card bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white shadow-sm">
                            <span className="badge badge-lg rounded-full bg-[#FEF3C6] border-none text-[#BB4D00] badge-warning justify-center items-center flex flex-col mx-auto -mt-2">Most Popular</span>
                            <div className="card-body">
                                <h4 className='font-bold text-2xl'>Pro</h4>
                                <p>Best for professionals</p>
                                <div className="flex justify-between">
                                    <h2 className="text-3xl font-bold">$29/mo</h2>
                                </div>
                                <ul className="mt-6 flex flex-col gap-2 text-xs">
                                    <li>
                                        <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                                        <span>Access to all premium tools</span>
                                    </li>
                                    <li>
                                        <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                                        <span>Unlimited templates</span>
                                    </li>
                                    <li>
                                        <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                                        <span>Priority support</span>
                                    </li>
                                    <li>
                                        <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                                        <span>Unlimited projects</span>
                                    </li>
                                    <li>
                                        <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                                        <span>Cloud sync</span>
                                    </li>
                                    <li>
                                        <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                                        <span>Advanced analytics</span>
                                    </li>
                                </ul>
                                <div className="mt-6">
                                    <button className="btn bg-white text-[#4F39F6] font-bold btn-block rounded-full">Start Pro Trial</button>
                                </div>
                            </div>
                        </div>
                        {/* Price Cart 03 */}
                         <div className="card w-96 bg-[#F9FAFC] border border-[#F2F2F2] text-[#101727] shadow-sm">
                            <div className="card-body">
                                <h4 className='font-bold text-2xl'>Enterprise</h4>
                                <p className='text-[#627382]'>For teams and businesses</p>
                                <div className="flex justify-between">
                                    <h2 className="text-3xl font-bold">$99/mo</h2>
                                </div>
                                <ul className="mt-6 flex flex-col gap-2 text-xs text-[#627382]">
                                    <li>
                                        <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                                        <span>Everything in Pro</span>
                                    </li>
                                    <li>
                                        <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                                        <span>Team collaboration</span>
                                    </li>
                                    <li>
                                        <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                                        <span>Custom integrations</span>
                                    </li>
                                    <li>
                                        <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                                        <span>Dedicated support</span>
                                    </li>
                                    <li>
                                        <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                                        <span>SLA guarantee</span>
                                    </li>
                                    <li>
                                        <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                                        <span>Custom branding</span>
                                    </li>
                                </ul>
                                <div className="mt-6">
                                    <button className="btn bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white font-bold btn-block rounded-full">Start Pro Trial</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PricingCart;