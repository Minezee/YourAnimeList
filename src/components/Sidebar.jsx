import { useState } from 'react';
import { HiOutlineMenu, } from 'react-icons/hi'
import { RiCloseLine, RiArrowUpSLine, RiArrowDownSLine } from 'react-icons/ri'
import { NavLink } from 'react-router-dom';

import { menuItems } from '../assets/MenuItems';
import '../assets/dropdown.css'

const DropDown = ({ submenu, handleClick, menuOpen, menu }) => {
    return (
        <div className={` ${menuOpen === menu ? "block" : "hidden"}`}>
            {submenu.map((item) => {
                return (
                    <NavLink
                        to={item.url}
                        key={item.name}
                        className={`flex flex-row justify-start items-center my-8 ml-10
            text-sm font-medium text-gray-400 hover:text-cyan-400`}
                        onClick={() => { handleClick && handleClick() }}>
                        {item.name}
                    </NavLink>
                )
            })}
        </div>
    )
}

const NavLinks = ({ handleClick }) => {
    const [menuOpen, setMenuOpen] = useState("");
    return (
        <div className='pl-5'>
            {menuItems.map((item) => {
                return (
                    <div key={item.name}>
                        <NavLink
                            to={item.url}
                            className="flex flex-row justify-between items-center my-8 
                                        text-sm font-medium text-gray-400 hover:text-cyan-400"
                            onClick={() => {
                                menuOpen !== item.name ? setMenuOpen(item.name) : setMenuOpen("");
                                !item.submenu && handleClick()
                            }}>
                            <div className="flex flex-row items-center">
                                <item.icons className="w-8 h-6 mr-2" />

                                {item.name}
                            </div>

                            {item.submenu && 
                            (menuOpen == item.name ?
                                (<RiArrowUpSLine className="w-6 h-6 text-white mr-2" />)
                                :
                                (<RiArrowDownSLine className="w-6 h-6 text-white mr-2" />))
                            }
                        </NavLink>
                        {item.submenu &&
                            <DropDown
                                submenu={item.submenu}
                                handleClick={handleClick}
                                menuOpen={menuOpen}
                                menu={item.name} />}
                    </div>
                )
            })}
        </div>
    )
}

const Sidebar = () => {
    const [isNavOpen, setIsNavOpen] = useState(false)
    return (
        <>
            <div className="absolute md:hidden block top-6 left-3 z-30 bg-transparent">
                {isNavOpen ? (
                    <RiCloseLine className="w-6 h-6 text-white mr-2"
                        onClick={() => setIsNavOpen(false)} />
                ) : (
                    <HiOutlineMenu className="w-6 h-6 text-white mr-2"
                        onClick={() => setIsNavOpen(true)} />
                )}
            </div>

            <div className={`absolute h-screen w-3/4 bg-gradient-to-tl from-white/5 
            to-dark backdrop-blur-lg z-10 md:hidden mooth-transition 
            ${isNavOpen ? 'left-0' : 'right-full'}`}>
                <div className='text-center text-white'>
                    <h1 className='text-base pt-6 font-bold'>YourAnimeList</h1>
                    <NavLinks handleClick={() => setIsNavOpen(false)} />
                </div>
            </div>
        </>
    )
}

export default Sidebar;