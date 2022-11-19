import { useState } from 'react';
import {AiOutlineSearch} from 'react-icons/ai'
import { useNavigate, useSearchParams } from 'react-router-dom';

const Searchbar = () => {
    const [inputValue, setInputValue] = useState('');
    const navigate = useNavigate();
    const [searchParams] = useSearchParams();

    function handleClick(){
        navigate(`/YourAnimeList/anime/search?${searchParams.get('q')}`)
    }

    return (
        <form className="flex flex-row absolute top-6 right-0 md:relative 2xl:mt-4 md:ml-3 text-white mr-3 bg-grey rounded-sm w-[175px] md:w-[20%] h-6 md:h-[7vh]">
            <input 
            value={inputValue}
            type="search" 
            onChange={(e) => setInputValue(e.target.value)}
            name="q"
            placeholder="Search..."
            autoComplete='off'
            className=" placeholder:text-white placeholder:text-sm placeholder:font-light
            bg-transparent flex-1 w-1 h-full pl-2 "
            />
            <button 
            className='md:mr-3 w-6 md:w-[7%] md:text-xl h-full align-sub'
            onClick={(e)=>{
                handleClick(e)
                }}
            >
            <AiOutlineSearch />
            </button>
        </form>
    )
}

export default Searchbar;