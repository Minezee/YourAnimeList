import { menuItems } from '../assets/MenuItems';

import { useState } from 'react';
import { HiOutlineMenu, } from 'react-icons/hi'
import { RiCloseLine } from 'react-icons/ri'

const Sidebar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState()
    return (
        <>
            <div className="absolute md:hidden block top-6 left-3 z-30">
                {isMenuOpen ? (
                    <RiCloseLine className="w-6 h-6 text-purple mr-2"
                        onClick={() => setIsMenuOpen(false)} />
                ) : (
                    <HiOutlineMenu className="w-6 h-6 text-purple mr-2"
                        onClick={() => setIsMenuOpen(true)} />
                )}
            </div>

            <div className={`absolute top-0 h-screen w-2/3 bg-gradient-to-tl from-white/5 
            to-dark backdrop-blur-lg z-10 p-6 md:hidden mooth-transition 
            ${isMenuOpen ? 'left-0' : 'right-full'}`}>
                <div className='text-center text-purple'>
                <h1 className='text-2xl font-bold mt-5'>YourAnimeList</h1>
                    <ul className='text-base'>
                        {menuItems.map((menu, index) => {
                            return (
                                <li key={index} className="pt-10">
                                    <a href={menu.url}>{menu.title}</a>
                                    <div></div>
                                    
                                </li>
                            )
                        })}
                        <a href="/sign-up" className="button">Sign Up</a>
                    </ul>
                </div>
            </div>
        </>
    )
}

export default Sidebar;