import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ReactComponent as Logo } from '../assets/discord-logo.svg';
// firebase
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth, provider } from '../firebase';
// heroIcons
import { MenuIcon } from '@heroicons/react/outline';

const Header = () => {
    /** useAuthState takes auth object and returns 
        user: The auth.User if logged in, or null if not
        loading: A boolean to indicate whether the the authentication state is still being loaded
        error: Any AuthError returned by Firebase when trying to load the user, or undefined if there is no error
    */
    const [user] = useAuthState(auth);//react firebase hook
    const history = useNavigate();

    const signIn = (e) => {
        e.preventDefault();
        auth.signInWithPopup(provider).then(() => history("channels")).catch((error) => alert(error.message));
    }
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
                <button onClick={!user ? signIn : () => history("/channels")} className="bg-white p-2 rounded-full text-sm px-4 focus:outline-none hover:shadow-[0_8px_15px_rgba(0,0,0,0.2)] hover:text-discord_blurple transition duration-200 ease-in-out whitespace-nowrap font-medium">
                    {!user ? "Login" : "Open Discord"}
                </button>
                <MenuIcon className="h-9 text-white cursor-pointer lg:hidden" />
            </div>
        </header>
    )
}

export default Header