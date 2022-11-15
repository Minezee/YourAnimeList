import { menuItems } from '../assets/MenuItems';
import { NavLink } from 'react-router-dom';

const Dropdown = ({ submenu }) => (
    <div className="hidden group-hover/nav:block absolute bg-[#453F3F] top-[64px] w-[140px] z-50 border-[1px]">
        <div className='h-4 w-4 bg-[#453F3F] absolute rotate-45 top-[-9px] left-7 z-10 border-l-[1px] border-t-[1px]'></div>
        {submenu.map((item) => (
            <NavLink to={item.url} key={item.name}>
                <div className='px-[10px] py-4 w-max group/dropdown'>
                    <h4 className='z-30 text-sm'>{item.name}</h4>
                    <div className='h-[1px] bg-white w-0 group-hover/dropdown:w-full'></div>
                </div>
            </NavLink>
        ))}
    </div>
)

const Navbar = () => {
    return (
        <div className="flex w-full bg-grey justify-between fixed z-30 px-5">
            <NavLink to={"/YourAnimeList/"}>
                <h1 className="text-white font-bold text-xl 2xl:text-2xl py-5 2xl:py-7">YourAnimeList</h1>
            </NavLink>
            <div className='flex text-white items-center'>
                {menuItems.map((item) => (
                    <div
                        className={`relative group/nav hover:bg-[#453F3F]`}
                        key={item.name}
                    >
                        <NavLink to={item.url}>
                            <h3 className={`px-4 text-lg 2xl:text-lg ${item.submenu && 'cursor-default'} h-full py-5 2xl:py-7`}>{item.name}</h3>
                        </NavLink>
                        {item.submenu && <Dropdown
                            submenu={item.submenu} />}
                    </div>
                ))}
                <button className='button ml-2 cursor-not-allowed'>Sign In</button>
            </div>
        </div>
    )
}

export default Navbar