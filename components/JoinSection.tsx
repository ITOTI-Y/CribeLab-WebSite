'use client'

import { GraduationCap } from 'lucide-react';
import dynamic from 'next/dynamic';
import Link from 'next/link';

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
                        <Link href="https://www.scopus.com/authid/detail.uri?authorId=54400115300" className='flex flex-col items-center justify-center gap-1'>
                            <div className='w-8 h-8'>
                                <svg className='w-full h-full' viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="4157" fill="currentColor">
                                    <path d="M222.305191 32.218144C120.012585 32.218144 35.439958 117.059255 35.439958 219.083377v598.452019c0 102.292606 84.841112 186.865233 186.865233 186.865233h598.452019c102.292606 0 186.865233-84.841112 186.865234-186.865233V219.351862c0-102.292606-84.841112-186.865233-186.865234-186.865234H222.305191z m97.191401 738.869428V265.799685h374.53592v86.720504H420.71526v111.689565h253.986366v85.109596h-253.986366v136.658626h281.908757v45.64237l20.673309 39.735711H319.496592z m0 0" p-id="4159">
                                    </path>
                                </svg>
                            </div>
                            <span className='text-sm font-bold'>
                                Scopus
                            </span>
                        </Link>
                        <Link href="mailto:contact@cribelab.org" className='flex flex-col items-center justify-center gap-1'>
                            <div className='w-8 h-8'>
                                <svg viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="3108" fill="currentColor">
                                    <path d="M854.016 342.016l0-86.016-342.016 214.016-342.016-214.016 0 86.016 342.016 212.010667zM854.016 169.984q34.005333 0 59.008 25.984t25.002667 59.989333l0 512q0 34.005333-25.002667 59.989333t-59.008 25.984l-683.989333 0q-34.005333 0-59.008-25.984t-25.002667-59.989333l0-512q0-34.005333 25.002667-59.989333t59.008-25.984l683.989333 0z" p-id="3109">
                                    </path>
                                </svg>
                            </div>
                            <span className='text-sm font-bold'>
                                Email
                            </span>
                        </Link>
                        <Link href="https://scholar.google.com/citations?user=qMU5vdgAAAAJ&hl=en" className='flex flex-col items-center justify-center gap-1'>
                            <div className='w-8 h-8'>
                                <svg className='w-full h-full' viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="4157" fill="currentColor">
                                    <path d="M781.8 597s0 0.2 0.2 0.2c18.4 38.8 28.8 82.2 28.8 128C810.6 890.2 677 1024 512 1024s-298.6-133.8-298.6-298.6c0-45.8 10.4-89.2 28.8-128 3.4-7.2 7.2-14.4 11.2-21.4 8.8-15.2 18.8-29.4 30-42.6 54.8-65.2 137-106.6 228.8-106.6 67.2 0 129.2 22.2 179.2 59.8 18.2 13.8 34.8 29.4 49.6 47 11.2 13.2 21.2 27.6 30 42.6 4 6.8 7.6 14 11 21z m52.8-37.6c-60.2-116.8-182-196.8-322.6-196.8s-262.4 80-322.6 196.8L0 405.4 512 0l512 405.4-189.4 154.2z" p-id="4159">
                                    </path>
                                </svg>
                            </div>
                            <span className='text-sm font-bold'>
                                Scholar
                            </span>
                        </Link>
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
