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
        <section id="join" className="w-full">
            <div className="py-14 bg-neutral-900 rounded-lg">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex gap-10 flex-col md:flex-row">
                    <div className="w-full md:w-1/2 flex flex-col justify-start py-5 gap-4">
                        <h2 className="text-3xl font-extrabold text-white text-start ">
                            Join Our Lab
                        </h2>
                        <p className="text-gray-300 text-start w-full text-sm sm:text-base">
                            We are looking for passionate researchers to join our team. Currently
                            recruiting excellent students in building science, thermal comfort and
                            sustainability.
                        </p>
                        <div className="flex gap-4">
                            <GraduationCap className="w-5 h-5" />
                            5 Master&apos;s Students
                        </div>
                        <div className="flex gap-4">
                            <GraduationCap className="w-5 h-5" />
                            <p>
                                1 PhD student (Chinese mainland resident)
                            </p>

                        </div>
                        <div className="flex gap-4">
                            <p className="ml-9">
                                2 PhD student (non-Chinese mainland resident)
                            </p>
                        </div>
                    </div>
                    <div className="w-full md:w-1/2 aspect-video rounded-lg overflow-hidden">
                        <DynamicMap />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default JoinSection;
