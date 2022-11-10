import Card from "./Card"
import CardLoad from "./CardLoad"

import { useState, useRef, useLayoutEffect } from "react"
import { RiArrowRightSLine, RiArrowLeftSLine } from 'react-icons/ri'

const Slider = ({ data, isFetching }) => {
    const [currentSlide, setCurrentSlide] = useState(1);
    const sliderRef = useRef();
    const [width, setWidth] = useState(1);
    let sliderMove;

    useLayoutEffect(() => {
        setWidth(sliderRef.current.offsetWidth);
    }, []);

    function nextSlide() {
        if (currentSlide === 3) {
            setCurrentSlide(1)
        } else {
            setCurrentSlide(currentSlide + 1)
        }
    }

    function prevSlide() {
        if (currentSlide === 1) {
            setCurrentSlide(3)
        } else {
            setCurrentSlide(currentSlide - 1)
        }
    }

    if(width > 400){
        sliderMove = width + 18;
    }else{
        sliderMove = width + 16;
    }

    return (
        <div className="flex items-center justify-center">
            <div className="relative flex items-center h-[105px] md:h-[175px] w-full md:w-[90%] mt-2 overflow-hidden">
                <button className="absolute left-[-2px] z-10 h-full">
                    <RiArrowLeftSLine
                        className="text-white bg-gradient-to-r from-dark h-full w-5 md:w-7 z-10 hover:animate-slideleft"
                        onClick={() => {
                            prevSlide();
                        }} />
                </button>
                <div 
                ref={sliderRef}
                className="flex w-full h-full"
                style={{ transform: `translateX(${-sliderMove * (currentSlide - 1)}px)` }}
                >
                    {isFetching ?
                        <>
                            <div className="flex md:hidden">
                                <CardLoad data={4} />
                            </div>
                            <div className="hidden md:flex">
                                <CardLoad data={8} />
                            </div>
                        </>
                        :
                        data?.map((anime) => (
                            <div 
                            className="relative min-w-[21.7%] md:min-w-[124px] h-full mx-[6px] md:mx-[8px]"
                            key={anime.mal_id}
                            >
                                <Card
                                    data={anime} />
                            </div>
                        ))
                    }
                </div>

                <button className="absolute right-[-2px] h-full z-10">
                    <RiArrowRightSLine
                        className="text-white bg-gradient-to-l from-dark h-full w-5 md:w-7 hover:animate-slideright"
                        onClick={() => {
                            nextSlide();
                        }} />
                </button>
            </div>
        </div>
    )
}

export default Slider