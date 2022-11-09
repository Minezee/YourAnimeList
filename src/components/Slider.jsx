import Card from "./Card"
import CardLoad from "./CardLoad"

import { useState } from "react"
import {RiArrowRightSLine, RiArrowLeftSLine} from 'react-icons/ri'

const Slider = ({data, isFetching}) => {
    const [currentSlide, setCurrentSlide] = useState(1);

    function nextSlide() {
        if (currentSlide === 5) {
            setCurrentSlide(1)
        } else {
            setCurrentSlide(currentSlide + 1)
        }
    }

    function prevSlide() {
        if (currentSlide === 1) {
            setCurrentSlide(5)
        } else {
            setCurrentSlide(currentSlide - 1)
        }
    }

    return(
    <div className="flex items-center justify-center">
        <div className="relative flex items-center h-[105px] w-full md:w-[50vw] mt-2">
            <RiArrowLeftSLine
            className="text-white absolute left-[-2px] bg-gradient-to-r from-dark h-full w-5 z-10"
            onClick={() => {
                prevSlide();
            }}/>
            <div className="flex w-full h-full overflow-hidden">
                {isFetching ?
                    <CardLoad data={4} />
                    :
                    data?.map((anime) => (
                        <Card
                            key={anime.mal_id}
                            data={anime}
                            currentSlide={currentSlide}/>
                    ))}
            </div>
            <RiArrowRightSLine
            className="text-white absolute right-[-2px] bg-gradient-to-l from-dark h-full w-5 z-10"
            onClick={() => {
                nextSlide();
            }}/>
        </div>
    </div>
    )
}

export default Slider