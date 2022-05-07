import React from 'react';
import { Link } from 'react-router-dom';
import { ReactComponent as Logo } from '../assets/discord-logo.svg';
//heroIcons
import { MenuIcon } from '@heroicons/react/outline';

const Header = () => {
    return (
        <header className="flex items-center justify-between py-4 px-6 bg-discord_blue">
            <Link to="/">
                {/* <img src={Logo} alt="" className="w-32 h-12 object-contain" /> */}
                <Logo className="w-32 h-12 object-contain text-white" />
            </Link>
            <div className="hidden lg:flex space-x-8 nav-links">
                <a className="link" href="#">Download</a>
                <a className="link" href="#">Nitro</a>
                <a className="link" href="#">Safety</a>
                <a className="link" href="#">Support</a>
                <a className="link" href="#">Blog</a>
                <a className="link" href="#">Careers</a>
            </div>
            <div className="flex space-x-4">
                <Link to="/" className="bg-white p-2 rounded-full text-sm px-4 focus:outline-none hover:shadow-[0_8px_15px_rgba(0,0,0,0.2)] hover:text-discord_blurple transition duration-200 ease-in-out whitespace-nowrap font-medium">
                    Login
                </Link>
                <MenuIcon className="h-9 text-white cursor-pointer lg:hidden"/>
            </div>
        </header>
    )
}

export default Header