import { useEffect } from 'react';
import { useState, useRef } from 'react';
import { HiOutlineMenu, } from 'react-icons/hi'
import { RiCloseLine, RiArrowRightSLine } from 'react-icons/ri'
import { NavLink } from 'react-router-dom';

import { menuItems } from '../assets/MenuItems';
/*Nav for mobile*/ 

/*Dropdown*/
const DropDown = ({ submenu, handleClick, menuOpen, menu }) => {
    return (
        <div className={` ${menuOpen === menu ? "block" : "hidden"}`}>
            {submenu.map((item) => {
                return (
                    <NavLink
                        to={item.url}
                        key={item.name}
                        className={`flex flex-row justify-start items-center my-8 ml-10
            text-sm font-medium text-gray-400 hover:text-cyan-400 animate-slidedown`}
                        onClick={() => { handleClick && handleClick() }}>
                        {item.name}
                    </NavLink>
                )
            })}
        </div>
    )
}

/*Navbar Menu*/
const NavLinks = ({ handleClick }) => {
    const [menuOpen, setMenuOpen] = useState("");
    return (
        <nav className='pl-5'>
            {menuItems.map((item) => {
                return (
                    <div key={item.name}>
                        <NavLink
                            to={item.url}
                            className="flex flex-row justify-between items-center my-8 
                                        text-sm font-medium text-gray-400 hover:text-cyan-400 z-40"
                            onClick={() => {
                                menuOpen !== item.name ? setMenuOpen(item.name) : setMenuOpen("");
                                !item.submenu && handleClick()
                            }}>
                            <div className="flex flex-row items-center">
                                <item.icons className="w-8 h-6 mr-2" />

                                {item.name}
                            </div>

                            {item.submenu &&
                                (<RiArrowRightSLine
                                    className={`w-6 h-6 text-white mr-2
                                ${menuOpen === item.name ? "rotate-90" : "rotate-0"}`} />)
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
        </nav>
    )
}

/*Sidebar*/
const Sidebar = () => {
    const [isNavOpen, setIsNavOpen] = useState(false);
    const sidebarRef = useRef();

    useEffect(() => {
        let handler = e => {
            if(!sidebarRef.current.contains(e.target)){
                setIsNavOpen(false)
            }
        }
        document.addEventListener('mousedown', handler)
    },[])

    return (
        <aside>
            <div className="absolute md:hidden block top-6 left-3 z-40 bg-transparent">
                {isNavOpen ? (
                    <RiCloseLine className="w-6 h-6 text-white mr-2"
                        onClick={() => setIsNavOpen(false)} />
                ) : (
                    <HiOutlineMenu className="w-6 h-6 text-white mr-2"
                        onClick={() => setIsNavOpen(true)} />
                )}
            </div>

            <div className={`absolute w-screen h-screen ${isNavOpen ? 'left-0' : 'left-[-100%]'}`}>
                <div className={`absolute h-screen w-3/4 bg-gradient-to-tl from-white/5
                to-dark backdrop-blur-lg z-30 md:hidden smooth-transition`}
                ref={sidebarRef}
                >
                    <div className='text-center text-white'>
                        <h1 className='text-base pt-6 font-bold'>YourAnimeList</h1>
                        <NavLinks handleClick={() => setIsNavOpen(false)} />
                    </div>
                </div>
            </div>
        </aside>
    )
}

export default Sidebar;