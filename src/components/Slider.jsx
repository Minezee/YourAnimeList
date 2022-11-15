import Card from "./Card"
import SlideLoad from "./SlideLoad"
import Error from "./Error"

import { useState, useRef, useLayoutEffect } from "react"
import { RiArrowRightSLine, RiArrowLeftSLine } from 'react-icons/ri'

const Slider = ({ data, isFetching, error }) => {
    const [currentSlide, setCurrentSlide] = useState(1);
    const cardRef = useRef();
    const [cardWidth, setCardWidth] = useState(1);
    const sliderRef = useRef();
    const [slideWidth, setSlideWidth] = useState(1);
    let sliderMove;

    useLayoutEffect(() => {
        setSlideWidth(sliderRef.current.offsetWidth);
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

    if (slideWidth < 400) {
        sliderMove = slideWidth + 16;
    } else {
        sliderMove = (((slideWidth * 0.112) * 8) + 130);
    }

    if(error) return <Error />

    return (
        <div className="flex items-center justify-center">
            <div className="relative flex items-center h-[105px] md:h-[29vh] w-full md:w-[90%] mt-2 overflow-hidden">
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
                    style={{ transform: `translateX(${-(((slideWidth * 0.112) * 8) + 130) * (currentSlide - 1)}px)` }}
                >
                    {isFetching ?
                        <SlideLoad />
                        :
                        data?.map((anime) => (
                            <div
                                ref={cardRef}
                                className="min-w-[21.7%] md:min-w-[11.2%] h-full mx-[6px] md:mx-[8px]"
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