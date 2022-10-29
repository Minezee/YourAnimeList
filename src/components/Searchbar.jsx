import {AiOutlineSearch} from 'react-icons/ai'

const Searchbar = () => {
    return (
        <form className="absolute top-6 right-0 text-purple mr-3 bg-grey rounded-sm">
            <input 
            type="search" 
            value=""
            name="q"
            placeholder="Search..."
            className="bg-transparent placeholder:text-purple w-[150px] pl-1"
            />
            <button className='mr-3 w-3 h-3'>
            <AiOutlineSearch />
            </button>
        </form>
    )
}

export default Searchbar;