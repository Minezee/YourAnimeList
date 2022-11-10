import Error from "./Error";

import { Link } from "react-router-dom";
import { useGetSeasonNowQuery } from "../redux/services/jikanMoeApi"
import { useState } from "react";
import { RiArrowRightSLine, RiArrowLeftSLine } from "react-icons/ri"
import { useEffect, useRef, useLayoutEffect } from "react";

/*Loading Card*/
const ContainerLoad = () => (
    <div className="min-w-[270px] md:min-w-[40vw] h-[150px] md:h-[40vh] bg-grey rounded-lg mx-3">
        <div className="animate-pulse h-full flex flex-row">
            <div className="h-full w-[106px] md:w-[170px] bg-dummy animate-pulse rounded-md"></div>
            <div className="flex flex-col m-2 w-[40px] md:w-[61%] md:pt1">
                <div className="w-full h-3 md:h-4 bg-dummy rounded-md"></div>
                <div className="w-2/3 m-2 h-3 md:h-4 bg-dummy self-center rounded-md"></div>
                <div className="w-full h-2 md:h-3 mt-2 bg-dummy rounded-md"></div>
                <div className="w-full h-2 md:h-3 mt-2 bg-dummy rounded-md"></div>
                <div className="w-full h-2 md:h-3 mt-2 bg-dummy rounded-md"></div>
                <div className="w-full h-2 md:h-3 mt-2 bg-dummy rounded-md"></div>
                <div className="w-full h-2 md:h-3 mt-2 bg-dummy rounded-md"></div>
                <div className="w-full h-2 md:h-3 mt-2 bg-dummy rounded-md"></div>
                <div className="w-[70%] h-2 md:h-3 mt-2 bg-dummy rounded-md"></div>
                <div
                    className="w-[55px] md:w-[86px] h-[15px] md:h-[29px] bg-dummy rounded-sm self-end mt-4"></div>
            </div>
        </div>
    </div>
)

/*Card for big slider*/
const Container = ({ data, currentSlide }) => {
    const sliderRef = useRef();
    const [width, setWidth] = useState(0);
    let sliderMove;

    useLayoutEffect(() => {
        setWidth(sliderRef.current.offsetWidth);
    }, []);

    if(width > 400){
        sliderMove = width + 24;
    }else{
        sliderMove = width + 23
    }

    return (
        <>
            {data?.map((anime) => {
                return (
                    <div key={anime.mal_id}
                        ref={sliderRef}
                        className={`min-w-[270px] md:min-w-[40vw] h-[150px] md:h-[40vh] bg-grey rounded-lg flex flex-row text-white mx-3`}
                        style={{ transform: `translateX(${-sliderMove * (currentSlide - 1)}px)` }}>
                        <img
                            src={anime.images.jpg.large_image_url}
                            alt={anime.title}
                            className="h-full rounded-lg" />
                        <div className="flex flex-col m-2 md:m-4 flex-1">
                            <h2 className="text-[10px] md:text-lg text-center font-bold">{anime.title}</h2>
                            <p className="text-[8px] md:text-[14px] text-justify w-full h-20 mt-2 tracking-tighter">{anime.synopsis.slice(0, width === 270 ? 230 : 310) + "..."}</p>
                            <Link
                                className="button bottom-2 absolute self-end"
                                to={`detail/${anime.mal_id}`}
                            >view more</Link>
                        </div>
                    </div>
                )
            })}
        </>
    )
}

/*Big Slider*/
const BigSlider = () => {
    const [currentSlide, setCurrentSlide] = useState(1);
    const { data: topAnimeData, isFetching, error } = useGetSeasonNowQuery();

    if (error) return <Error />

    //slider settings
    const maxSlide = 5
    const auto = false;
    const interval = 20000;
    let slideInterval;


    const topAnime = topAnimeData?.data?.slice(0, maxSlide);

    /*used for auto slide*/
    useEffect(() => {
        if (auto) {
            slideInterval = setInterval(() => {
                nextSlide()
            }, interval);
        }
        return () => clearInterval(slideInterval);
    }, [currentSlide])

    /*Slider next and prev function*/
    function nextSlide() {
        if (currentSlide === maxSlide) {
            setCurrentSlide(1)
        } else {
            setCurrentSlide(currentSlide + 1)
        }
    }

    function prevSlide() {
        if (currentSlide === 1) {
            setCurrentSlide(maxSlide)
        } else {
            setCurrentSlide(currentSlide - 1)
        }
    }

    return (
        <>
            <div className="flex flex-row justify-center items-center">
                <RiArrowLeftSLine
                    className="text-white h-6 w-6"
                    onClick={() => prevSlide()} />
                <div className="flex flex-row overflow-hidden w-[294px] md:w-[43%]">
                    {isFetching ?
                        <ContainerLoad />
                        :
                        <Container
                            data={topAnime}
                            currentSlide={currentSlide} />
                    }
                </div>
                <button>
                    <RiArrowRightSLine
                        className="text-white h-6 w-6"
                        onClick={() => nextSlide()} />
                </button>
            </div>
            <div className="flex mx-auto my-2 justify-center">
                {topAnime?.map((d, index) => (
                    <div
                        key={`dots-${index}`}
                        onClick={() => setCurrentSlide(index + 1)}
                        className={`${currentSlide === index + 1 ? 'bg-white' : 'bg-[#898282]'} w-[6px] h-[6px] rounded-full mx-1`}></div>
                ))}
            </div>
        </>
    )
}

export default BigSlider