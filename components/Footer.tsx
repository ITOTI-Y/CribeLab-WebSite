import Logo from "@/components/custom/Logo";

const Footer = () => {
    return (
        <footer className="w-full bg-neutral-900 border-t border-neutral-800 py-10 overflow-hidden">
            <div className="mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex gap-12 lg:gap-36 items-center justify-center">
                    <div className="flex flex-col items-start space-y-4 w-fit">
                        <Logo />
                    </div>

                    <div className="flex flex-col items-start space-y-4">
                        <div className="flex items-center space-x-3 text-gray-300">
                            <p className="font-Roboto text-sm text-gray-400">
                                Climate Responsive and Intelligent Built Environment Lab™
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
