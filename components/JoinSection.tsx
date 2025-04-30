import Link from "next/link";
import SubTitle from "./custom/SubTitle";

const JoinSection = () => {
    return (
        <section id="join" className="w-full py-14 bg-neutral-900">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <SubTitle content="JOIN OUR LAB" />

                <p className="text-gray-300 max-w-2xl mx-auto mb-10 text-sm sm:text-base font-Roboto">
                    Join us looking for passionate researchers to join our team. Currently
                    recruiting excellent students in building science, thermal comfort and
                    sustainability.
                </p>

                <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-6">
                    <Link
                        href="/join/students"
                        className="inline-flex items-center justify-center px-6 py-3 border border-white text-sm font-medium rounded-sm text-white hover:bg-white hover:text-black transition-colors duration-200"
                    >
                        Graduate Students
                    </Link>
                    <Link
                        href="/join/positions"
                        className="inline-flex items-center justify-center px-6 py-3 border border-white text-sm font-medium rounded-sm text-white hover:bg-white hover:text-black transition-colors duration-200"
                    >
                        Open Positions
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default JoinSection;
