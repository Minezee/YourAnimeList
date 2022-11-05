import Error from "./Error";

import { NavLink } from "react-router-dom";
import { useGetSeasonNowQuery } from "../redux/services/jikanMoeApi"
import { useState } from "react";
import { RiArrowRightSLine, RiArrowLeftSLine } from "react-icons/ri"
import { useEffect } from "react";

const ContainerLoad = () => (
    <div className="min-w-[270px] h-[150px] bg-grey rounded-lg mx-3">
        <div className="animate-pulse h-full flex flex-row">
            <div className="h-full w-[106px] bg-dummy animate-pulse rounded-md"></div>
            <div className="flex flex-col m-2 w-40">
                <div className="w-full h-3 bg-dummy rounded-md"></div>
                <div className="w-2/3 m-2 h-3 bg-dummy self-center rounded-md"></div>
                <div className="w-full h-2 mt-2 bg-dummy rounded-md"></div>
                <div className="w-full h-2 mt-2 bg-dummy rounded-md"></div>
                <div className="w-full h-2 mt-2 bg-dummy rounded-md"></div>
                <div className="w-[80%] h-2 mt-2 bg-dummy rounded-md"></div>
                <div
                    className="w-[55px] h-[15px] bg-dummy rounded-sm self-end mt-4"></div>
            </div>
        </div>
    </div>
)

const Container = ({ data, currentSlide }) => (
    <>
        {data?.map((anime) => {
            return (
                <div key={anime.mal_id}
                    className={`min-w-[270px] h-[150px] bg-grey rounded-lg flex flex-row text-white mx-3`}
                    style={{ transform: `translateX(${-294 * (currentSlide - 1)}px)` }}>
                    <img
                        src={anime.images.jpg.large_image_url}
                        alt={anime.title}
                        className="h-full rounded-l-lg" />
                    <div className="flex flex-col m-2">
                        <h2 className="text-[10px] text-center font-bold">{anime.title}</h2>
                        <p className="text-[8px] text-justify w-[150px] h-20 mt-2">{anime.synopsis.slice(0, 200) + "..."}</p>
                        <NavLink
                            className="button bottom-2 absolute self-end"
                        >view more</NavLink>
                    </div>
                </div>
            )
        })}
    </>
)

const BigSlider = () => {
    const [currentSlide, setCurrentSlide] = useState(1);
    const { data: topAnimeData, isFetching, error } = useGetSeasonNowQuery();

    if (error) return <Error />

    //slider settings
    const maxSlide = 5
    const auto = true;
    const interval = 20000;
    let slideInterval;


    const topAnime = topAnimeData?.data?.slice(0, maxSlide);

    useEffect(() => {
        if (auto) {
            slideInterval = setInterval(() => {
                nextSlide()
            }, interval);
        }
        return () => clearInterval(slideInterval);
    }, [currentSlide])

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
                    onClick={() =>  prevSlide()} />
                <div className="flex flex-row overflow-hidden w-[294px]">
                    {isFetching ?
                        <ContainerLoad />
                        :
                        <Container
                            data={topAnime}
                            currentSlide={currentSlide} />
                    }
                </div>
                <RiArrowRightSLine
                    className="text-white h-6 w-6"
                    onClick={() => nextSlide()} />
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