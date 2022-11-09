import { menuItems } from '../assets/MenuItems';

const Dropdown = ({ submenu }) => (
    <div className="hidden group-hover:block absolute bg-grey top-14 w-[140px]">
        <div className='h-4 w-4 bg-grey absolute rotate-45 top-[-8px] left-7 z-10'></div>
        {submenu.map((item) => (
                <h4 className='px-[10px] py-4 z-30 text-sm' key={item.name}>{item.name}</h4>
        ))}
    </div>
)

const Navbar = () => {
    return (
        <div className="flex w-full p-5 bg-grey justify-between fixed z-50">
            <h1 className="text-white font-bold text-xl">YourAnimeList</h1>
            <div className='flex text-white items-center'>
                {menuItems.map((item) => (
                    <div className='relative group' key={item.name}>
                        <h3 className='mx-4'>{item.name}</h3>
                        {item.submenu && <Dropdown
                        submenu={item.submenu} />}
                        
                    </div>
                ))}
                <button className='button'>Sign In</button>
            </div>
        </div>
    )
}

export default Navbar