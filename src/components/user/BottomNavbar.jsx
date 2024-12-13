import React, { useState } from 'react';
import { Home, ThumbsUp, Users, User, Settings, ShoppingCart, Menu } from 'lucide-react';

export default function BottomNavbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const NavItem = ({ icon: Icon, label, href = "#" }) => (
        <a
            href={href}
            className="flex flex-col text-black items-center justify-center  hover:text-[#17686d] transition-colors duration-200"
        >
            <Icon size={20} />
            <span className="text-xs ">{label}</span>
        </a>
    );
    return (
        <div>
            <nav className=" fixed h-14 bottom-0 left-0 right-0 bg-[#e8e8ed] shadow-[0_-2px_10px_rgba(0,0,0,0.1)] py-2">
                <div className="flex h-full justify-around items-center">
                    <NavItem icon={Home} label="Home" href="#home" />
                    <NavItem icon={ThumbsUp} label='Feedback' href='/' />
                    <NavItem icon={Users} label="Profile" href="#profile" />
                    <div
                        className="flex flex-col items-center justify-center  text-black hover:text-[#17686d] transition-colors duration-200 cursor-pointer"
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                    >
                        <Menu size={24} />
                        <span className="text-xs ">More</span>
                    </div>
                    <NavItem icon={ShoppingCart} label="Cart" href="#cart" />
                    <NavItem icon={Settings} label="Settings" href="#settings" />
                </div>
            </nav>

            {/* Mobile Menu Overlay */}
            {isMenuOpen && (
                <div
                    className="fixed inset-0 bg-black bg-opacity-50 z-60 "
                    onClick={() => setIsMenuOpen(false)}
                >
                    <div
                        className="absolute bottom-0 left-0 right-0 bg-white rounded-t-xl p-6 space-y-4"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <h2 className="text-xl font-bold mb-4">Menu</h2>
                        <div className="grid grid-cols-3 gap-4">
                            <NavItem icon={Home} label="Home" href="#home" />
                            <NavItem icon={Users} label="Profile" href="#profile" />
                            <NavItem icon={ShoppingCart} label="Cart" href="#cart" />
                            <NavItem icon={Settings} label="Settings" href="#settings" />
                            {/* Add more menu items as needed */}
                        </div>
                        <button
                            className="w-full bg-gray-200 py-2 rounded-md mt-4"
                            onClick={() => setIsMenuOpen(false)}
                        >
                            Close
                        </button>
                    </div>
                </div>
            )}
        </div>
    )
}
