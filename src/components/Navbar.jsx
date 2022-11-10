import { menuItems } from '../assets/MenuItems';
import { NavLink } from 'react-router-dom';

const Dropdown = ({ submenu }) => (
    <div className="hidden group-hover:block absolute bg-[#453F3F] top-[64px] w-[140px] z-50 border-[1px]">
        <div className='h-4 w-4 bg-[#453F3F] absolute rotate-45 top-[-9px] left-7 z-10 border-l-[1px] border-t-[1px]'></div>
        {submenu.map((item) => (
            <NavLink to={item.url} key={item.name}>
                <div className='px-[10px] py-4 w-max menu'>
                    <h4 className='z-30 text-sm'>{item.name}</h4>
                    <div className='h-[1px] bg-white w-0 underline-animation'></div>
                </div>
            </NavLink>
        ))}
    </div>
)

const Navbar = () => {
    return (
        <div className="flex w-full bg-grey justify-between fixed z-30 px-5">
            <h1 className="text-white font-bold text-xl py-5">YourAnimeList</h1>
            <div className='flex text-white items-center'>
                {menuItems.map((item) => (
                    <div
                        className={`relative group ${item.submenu && 'cursor-default'} h-full py-5 hover:bg-[#453F3F]`}
                        key={item.name}
                    >
                        <NavLink to={item.url}>
                            <h3 className='mx-4'>{item.name}</h3>
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