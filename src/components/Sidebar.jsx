import { useState } from 'react';
import { HiOutlineMenu, } from 'react-icons/hi'
import { RiCloseLine } from 'react-icons/ri'
import { Link, NavLink } from 'react-router-dom';

import { menuItems } from '../assets/MenuItems';
import '../assets/dropdown.css'

const DropDown = ({ submenu, handleClick, heading, menu }) => {
    console.log( "head =" + heading)
    console.log("menu =" +menu)
    return (
        <div className={` ${heading === menu ? "block" : "hidden"}`}>
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
    const [heading, setHeading] = useState("");
    return (
        <div className='pl-5'>
            {menuItems.map((item) => {
                return (
                    <div key={item.name} className="group">
                        <NavLink
                            to={item.url}
                            className="flex flex-row justify-start items-center my-8 
                    text-sm font-medium text-gray-400 hover:text-cyan-400"
                            onClick={() => {
                                heading !== item.name ? setHeading(item.name) : setHeading("");
                            }}>
                            <item.icons className="w-8 h-6 mr-2" />
                            {item.name}
                        </NavLink>
                        {item.submenu &&
                            <DropDown
                                submenu={item.submenu}
                                handleClick={handleClick} 
                                heading={heading}
                                menu={item.name}/>}
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