import { Slider } from '../components';

import { Link } from "react-router-dom";
import { BigSlider } from "../components";
import { useGetSeasonNowQuery, useGetTopAnimeQuery } from "../redux/services/jikanMoeApi";


const FirstPage = () => {
    const { data:seasonAnime, isFetching:isFetchingSeasonAnime, error:seasonErr } = useGetSeasonNowQuery();
    const {data:topAnime, isFetching:isFetchingTopAnime, error:topErr} = useGetTopAnimeQuery();

    const seasonDataDisplay = seasonAnime?.data.slice(0, 20);
    const topAnimeDisplay = topAnime?.data.slice(0, 20);

    return (
        <div>
            <BigSlider />
            <div className="flex flex-row mt-8 items-center text-white text-[12px]">
            <h2 className="text-white">Winter 2022 Anime</h2>
            <div className="mx-2 h-px bg-white flex-1"></div>
            <Link className="text-link">View All</Link>
            </div>
            <Slider
            isFetching={isFetchingSeasonAnime}
            data={seasonDataDisplay}/>
            <div className="flex flex-row mt-8 items-center text-white text-[12px]">
            <h2 className="text-white">Top 2022 Anime</h2>
            <div className="mx-2 h-[.5px] bg-white flex-1"></div>
            <Link className="text-link">View All</Link>
            </div>
            <Slider
            isFetching={isFetchingTopAnime}
            data={topAnimeDisplay}/>
        </div>
    )
}

export default FirstPage;