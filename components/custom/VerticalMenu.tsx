'use client';
import { MeanItem } from '@/lib/api';
import { Link as ScrollLink} from 'react-scroll';

export default function VerticalMenu({ meanItems, toggleMenu, isMenuOpen }: { meanItems: MeanItem[], toggleMenu: () => void, isMenuOpen: boolean }) {
    return (
        <div className="lg:hidden bg-black">
            <div className={`transition-all duration-500 ease-out overflow-hidden ${isMenuOpen ? 'max-h-screen' : 'max-h-0'}`}>
                <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                {meanItems.map((item: MeanItem) => (
                    <ScrollLink
                        key={item.id}
                        to={item.id}
                        smooth={true}
                        offset={-100}
                        onClick={toggleMenu}
                        className="block px-3 py-2 text-white hover:bg-gray-800 rounded-md font-roboto font-medium cursor-pointer"
                    >
                        {item.label}
                    </ScrollLink>
                ))}
            </div>
            </div>
        </div>
    )
}
