import { Slider } from '../components';

import { Link } from "react-router-dom";
import { BigSlider } from "../components";
import { useGetSeasonNowQuery, useGetTopAnimeQuery } from "../redux/services/jikanMoeApi";


const FirstPage = () => {
    const { data: seasonAnime, isFetching: isFetchingSeasonAnime, error: seasonErr } = useGetSeasonNowQuery();
    const { data: topAnime, isFetching: isFetchingTopAnime, error: topErr } = useGetTopAnimeQuery();
    const month = new Date().getMonth();
    const year = new Date().getFullYear();
    let season;

    //switch case to get season
    switch(month){
        case 0:
        case 1:
        case 11:
            season = "Winter";
            break;
        case 2:
        case 3:
        case 4:
            season = "Spring";
            break;
        case 5:
        case 6:
        case 7:
            season = "Summer";
            break;
        case 8:
        case 9:
        case 10:
            season = "Autumn";
            break;
    }

    const seasonDataDisplay = seasonAnime?.data;
    const topAnimeDisplay = topAnime?.data;

    return (
        <div>
            <BigSlider />
            <div className="flex flex-row mt-8 items-center text-white text-[12px] md:text-base w-full md:w-[90%] md:mx-auto">
                <h2 className="text-white">{season} {year} Anime</h2>
                <div className="mx-2 h-px bg-white flex-1"></div>
                <Link className="text-link">View All</Link>
            </div>
            <Slider
                isFetching={isFetchingSeasonAnime}
                data={seasonDataDisplay} />
            <div className="flex flex-row mt-8 items-center text-white text-[12px] md:text-base w-full md:w-[90%] md:mx-auto">
                <h2 className="text-white">Top {year} Anime</h2>
                <div className="mx-2 h-[.5px] bg-white flex-1"></div>
                <Link className="text-link">View All</Link>
            </div>
            <Slider
                isFetching={isFetchingTopAnime}
                data={topAnimeDisplay} />
                {/*coming soon maybe?!?!?!*/}
                <br />
                <br />
        </div>
    )
}

export default FirstPage;