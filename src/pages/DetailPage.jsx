import { Loading, Slider, Error, Detail } from "../components";

import { useParams } from "react-router-dom"
import { useGetAnimeByGenreQuery, useGetFullAnimeDataQuery } from "../redux/services/jikanMoeApi";

const DetailPage = () => {
    const { id } = useParams();
    const { data: fullData, isFetching, error } = useGetFullAnimeDataQuery(id);
    const animeData = fullData?.data;

    const genreArr = [];

    fullData?.genres?.map((genre) => {
        genreArr.push(genre.mal_id)
    })

    const { data, isFetching: isFetchingAnimeByGenre, error: dataError } = useGetAnimeByGenreQuery(genreArr.toString())

    if (isFetching) return <Loading title="Loading your anime data" />

    if (error) return <Error />

    if (dataError) return <Error />

    return (
        <div className="flex flex-col">
            <iframe
                allowFullScreen="1"
                src={`https://www.youtube.com/embed/${animeData?.trailer?.youtube_id}`}
                className="self-center rounded-md w-full md:w-[50%] h-[200px] md:h-[58vh] z-10">
            </iframe>
            <Detail 
            data = {animeData}/>
            <section className="font-bold text-white text-[10px] md:text-sm 2xl:text-lg">
                Related Anime
                <Slider
                    isFetching={isFetchingAnimeByGenre}
                    data={data?.data} />
            </section>
            <br />
        </div>
    )
}

export default DetailPage