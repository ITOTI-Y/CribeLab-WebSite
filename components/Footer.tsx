import Logo from "@/components/custom/Logo";

const Footer = () => {
    return (
        <footer className="w-full bg-neutral-900 border-t border-neutral-800 pt-6 pb-6 overflow-hidden">
            <div className="mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex gap-2 lg:gap-36 items-center justify-center">
                    <div className="flex flex-col min-w-40 items-start space-y-4 w-fit">
                        <Logo />
                    </div>

                    <div className="flex flex-col items-start">
                        <div className="flex flex-col items-center text-gray-300">
                            <p className="font-Roboto text-sm text-gray-400 hidden md:block">
                                Climate Responsive and Intelligent Built Environment Lab™
                            </p>
                            <p className="font-Roboto text-sm text-gray-400 mt-2">
                                2025 CRIBE Lab, Tsinghua University. All rights reserved.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
