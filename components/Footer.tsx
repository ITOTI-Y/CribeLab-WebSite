import { Mail, MapPin, Phone } from "lucide-react";
import Logo from "@/components/custom/Logo";

const Footer = () => {
    return (
        <footer className="w-full bg-neutral-900 border-t border-neutral-800 py-10 overflow-hidden">
            <div className="mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex gap-12 lg:gap-36 items-center justify-center">
                    <div className="flex flex-col items-start space-y-4 w-fit">
                        <Logo />
                        <p className="font-Roboto text-sm text-gray-400">
                            © 2025 Climate Responsive and Intelligent Built Environment Lab
                        </p>
                    </div>

                    <div className="flex flex-col items-start space-y-4">
                        <div className="flex items-center space-x-3 text-gray-300">
                            <MapPin size={18} className="text-gray-400" />
                            <span className="text-sm">
                                School of Architecture, Design and Planning, University Campus
                            </span>
                        </div>
                        <div className="flex items-center space-x-3 text-gray-300">
                            <Mail size={18} className="text-gray-400" />
                            <a
                                href="mailto:contact@cribelab.edu"
                                className="text-sm hover:text-white transition-colors"
                            >
                                contact@cribelab.edu
                            </a>
                        </div>
                        <div className="flex items-center space-x-3 text-gray-300">
                            <Phone size={18} className="text-gray-400" />
                            <a
                                href="tel:+1234567890"
                                className="text-sm hover:text-white transition-colors"
                            >
                                +1 (234) 567-890
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
