'use client'

import { GraduationCap } from 'lucide-react';
import dynamic from 'next/dynamic';

const DynamicMap = dynamic(
    () => import('./custom/MapComponent'),
    {
        ssr: false,
        loading: () => <p>Loading...</p>
    }
)

const JoinSection = () => {
    return (
        <section id="join" className="w-full py-14 bg-neutral-900">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex gap-10 flex-col md:flex-row">
                <div className="w-full md:w-1/2 flex flex-col justify-start py-5 gap-4">
                    <h2 className="text-3xl font-extrabold text-white text-start ">
                        Join Our Lab
                    </h2>
                    <p className="text-gray-300 text-start w-full text-sm sm:text-base">
                        Join us looking for passionate researchers to join our team. Currently
                        recruiting excellent students in building science, thermal comfort and
                        sustainability.
                    </p>
                    <div className="flex gap-4">
                        <GraduationCap className="w-5 h-5" />
                        4 Master&apos;s Students
                    </div>
                    <div className="flex gap-4">
                        <GraduationCap className="w-5 h-5" />
                        2 PhD Students
                    </div>
                    <div className='flex gap-12 text-white mt-8'>
                        <div className='flex flex-col items-center justify-center gap-1'>
                            <div className='w-8 h-8'>
                                <svg className='w-full h-full' viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="4157" fill="currentColor">
                                    <path d="M690.1 377.4c5.9 0 11.8 0.2 17.6 0.5-24.4-128.7-158.3-227.1-319.9-227.1C209 150.8 64 271.4 64 420.2c0 81.1 43.6 154.2 111.9 203.6 5.5 3.9 9.1 10.3 9.1 17.6 0 2.4-0.5 4.6-1.1 6.9-5.5 20.3-14.2 52.8-14.6 54.3-0.7 2.6-1.7 5.2-1.7 7.9 0 5.9 4.8 10.8 10.8 10.8 2.3 0 4.2-0.9 6.2-2l70.9-40.9c5.3-3.1 11-5 17.2-5 3.2 0 6.4 0.5 9.5 1.4 33.1 9.5 68.8 14.8 105.7 14.8 6 0 11.9-0.1 17.8-0.4-7.1-21-10.9-43.1-10.9-66 0-135.8 132.2-245.8 295.3-245.8z m-194.3-86.5c23.8 0 43.2 19.3 43.2 43.1s-19.3 43.1-43.2 43.1c-23.8 0-43.2-19.3-43.2-43.1s19.4-43.1 43.2-43.1z m-215.9 86.2c-23.8 0-43.2-19.3-43.2-43.1s19.3-43.1 43.2-43.1 43.2 19.3 43.2 43.1-19.4 43.1-43.2 43.1z" p-id="4158"></path><path d="M866.7 792.7c56.9-41.2 93.2-102 93.2-169.7 0-124-120.8-224.5-269.9-224.5-149 0-269.9 100.5-269.9 224.5S540.9 847.5 690 847.5c30.8 0 60.6-4.4 88.1-12.3 2.6-0.8 5.2-1.2 7.9-1.2 5.2 0 9.9 1.6 14.3 4.1l59.1 34c1.7 1 3.3 1.7 5.2 1.7 2.4 0 4.7-0.9 6.4-2.6 1.7-1.7 2.6-4 2.6-6.4 0-2.2-0.9-4.4-1.4-6.6-0.3-1.2-7.6-28.3-12.2-45.3-0.5-1.9-0.9-3.8-0.9-5.7 0.1-5.9 3.1-11.2 7.6-14.5zM600.2 587.2c-19.9 0-36-16.1-36-35.9 0-19.8 16.1-35.9 36-35.9s36 16.1 36 35.9c0 19.8-16.2 35.9-36 35.9z m179.9 0c-19.9 0-36-16.1-36-35.9 0-19.8 16.1-35.9 36-35.9s36 16.1 36 35.9c-0.1 19.8-16.2 35.9-36 35.9z" p-id="4159">
                                    </path>
                                </svg>
                            </div>
                            <span className='text-sm font-bold'>
                                Wechat
                            </span>
                        </div>
                        <div className='flex flex-col items-center justify-center gap-1'>
                            <div className='w-8 h-8'>
                                <svg viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="3108" fill="currentColor">
                                    <path d="M854.016 342.016l0-86.016-342.016 214.016-342.016-214.016 0 86.016 342.016 212.010667zM854.016 169.984q34.005333 0 59.008 25.984t25.002667 59.989333l0 512q0 34.005333-25.002667 59.989333t-59.008 25.984l-683.989333 0q-34.005333 0-59.008-25.984t-25.002667-59.989333l0-512q0-34.005333 25.002667-59.989333t59.008-25.984l683.989333 0z" p-id="3109">
                                    </path>
                                </svg>
                            </div>
                            <span className='text-sm font-bold'>
                                Email
                            </span>
                        </div>
                        <div className='flex flex-col items-center justify-center gap-1'>
                            <div className='w-8 h-8'>
                                <svg className='w-full h-full' viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="4157" fill="currentColor">
                                    <path d="M781.8 597s0 0.2 0.2 0.2c18.4 38.8 28.8 82.2 28.8 128C810.6 890.2 677 1024 512 1024s-298.6-133.8-298.6-298.6c0-45.8 10.4-89.2 28.8-128 3.4-7.2 7.2-14.4 11.2-21.4 8.8-15.2 18.8-29.4 30-42.6 54.8-65.2 137-106.6 228.8-106.6 67.2 0 129.2 22.2 179.2 59.8 18.2 13.8 34.8 29.4 49.6 47 11.2 13.2 21.2 27.6 30 42.6 4 6.8 7.6 14 11 21z m52.8-37.6c-60.2-116.8-182-196.8-322.6-196.8s-262.4 80-322.6 196.8L0 405.4 512 0l512 405.4-189.4 154.2z" p-id="4159">
                                    </path>
                                </svg>
                            </div>
                            <span className='text-sm font-bold'>
                                Scholar
                            </span>
                        </div>
                    </div>
                </div>
                <div className="w-full md:w-1/2 aspect-video rounded-lg overflow-hidden">
                    <DynamicMap />
                </div>
            </div>
        </section>
    );
};

export default JoinSection;
