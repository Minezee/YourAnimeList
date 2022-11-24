import { Loading, Slider, Error, Detail } from "../components";

import { useParams } from "react-router-dom"
import { useGetMangaByGenreQuery, useGetFullMangaDataQuery } from "../redux/services/jikanMoeApi";

const MangaDetail = () => {
    const { id } = useParams();
    const { data: fullData, isFetching, error } = useGetFullMangaDataQuery(id);
    const mangaData = fullData?.data;

    const genreArr = [];

    fullData?.genres?.map((genre) => {
        genreArr.push(genre.mal_id)
    })

    const { data, isFetching: isFetchingMangaByGenre, error: dataError } = useGetMangaByGenreQuery(genreArr.toString())

    if (isFetching) return <Loading title="Loading your anime data" />

    if (error) return <Error />

    if (dataError) return <Error />
    
    console.log(fullData);

    return (
        <div className="flex flex-col">
            <div className="flex flex-col md:flex-row">
                <img src={mangaData?.images?.jpg?.large_image_url} alt={data?.title} className="h-[40vh] md:h-80 2xl:h-[45vh] mr-2 self-center" />
                <Detail
                    data={mangaData} />
            </div>
            <section className="font-bold text-white text-[10px] md:text-sm 2xl:text-lg">
                Related Anime
                <Slider
                    isFetching={isFetchingMangaByGenre}
                    data={data?.data} />
            </section>
            <br />
        </div>
    )
}

export default MangaDetail