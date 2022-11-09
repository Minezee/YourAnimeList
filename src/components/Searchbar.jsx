import { useState } from 'react';
import {AiOutlineSearch} from 'react-icons/ai'

const Searchbar = () => {
    const [inputValue, setInputValue] = useState('');

    return (
        <form className="absolute top-6 right-0 md:relative md:ml-3 text-white mr-3 bg-grey rounded-sm w-[175px] md:w-[200px]">
            <input 
            type="search" 
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            name="q"
            placeholder="Search..."
            className=" placeholder:text-white placeholder:text-sm placeholder:font-light
            bg-transparent w-[150px] md:w-[175px] h-[28px] md:h-[32px] pl-2 "
            />
            <button className='mr-3 w-3 h-3 align-sub'>
            <AiOutlineSearch />
            </button>
        </form>
    )
}

export default Searchbar;