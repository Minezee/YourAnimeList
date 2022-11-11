import { useState } from 'react';
import {AiOutlineSearch} from 'react-icons/ai'

const Searchbar = () => {
    const [inputValue, setInputValue] = useState('');

    return (
        <form className="flex flex-row absolute top-6 right-0 md:relative 2xl:mt-4 md:ml-3 text-white mr-3 bg-grey rounded-sm w-[175px] md:w-[20%] h-[7vh]">
            <input 
            type="search" 
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            name="q"
            placeholder="Search..."
            className=" placeholder:text-white placeholder:text-sm placeholder:font-light
            bg-transparent flex-1 h-full pl-2 "
            />
            <button className='mr-3 w-[7%] text-xl h-full align-sub'>
            <AiOutlineSearch />
            </button>
        </form>
    )
}

export default Searchbar;