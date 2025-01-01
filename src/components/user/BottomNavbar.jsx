import React, { useState, useEffect } from 'react';
import { ActivityIcon, TypeIcon, Users, Users2 } from 'lucide-react';
import Activity from '../../pages/admin/Activity';

export default function BottomNavbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [userType, setUserType] = useState(null);

    useEffect(() => {
        const userData = JSON.parse(localStorage.getItem('user'));
        if (userData) {
            setUserType(userData.user_type);
        }
    }, []);

    // अगर user patient है तो navbar नहीं दिखाएंगे
    if (userType === 'patient') {
        return null;
    }

    const NavItem = ({ icon: Icon, label, href = "#" }) => (
        <a
            href={href}
            className="flex flex-col text-black items-center justify-center hover:text-[#17686d] transition-colors duration-200"
        >
            <Icon size={20} />
            <span className="text-xs">{label}</span>
        </a>
    );

    return (
        <div>
            <nav className="fixed h-14 bottom-0 left-0 right-0 bg-[#e8e8ed] shadow-[0_-2px_10px_rgba(0,0,0,0.1)] py-2">
                <div className="flex h-full font-semibold justify-around items-center">
                    <NavItem icon={Users} label='Users' href='/users' />
                    <NavItem icon={Users2} label="Accounts" href="/accounts" />
                </div>
            </nav>
        </div>
    );
}
