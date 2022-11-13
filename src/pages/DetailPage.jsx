import { Loading, Slider, Error } from "../components";

import { useParams } from "react-router-dom"
import { useGetAnimeByGenreQuery, useGetFullAnimeDataQuery } from "../redux/services/jikanMoeApi";
import { TfiTime } from "react-icons/tfi"
import { AiFillStar } from "react-icons/ai"

const DetailPage = () => {
    const { id } = useParams();
    const { data: fullData, isFetching, error } = useGetFullAnimeDataQuery(id);
    const animeData = fullData?.data;
    const releaseDate = animeData?.aired?.prop?.from;
    const cutText = animeData?.synopsis.search("Written") - 1;
    const genreArr = [];
    
    animeData?.genres?.map((genre) => {
        genreArr.push(genre.mal_id)
    })

    const { data, isFetching: isFetchingAnimeByGenre, error:dataError } = useGetAnimeByGenreQuery(genreArr.toString())
    var month;

    if (isFetching) return <Loading title="Loading your anime data" />

    if (error) return <Error />

    if (dataError) return <Error />

    //switch case to get name of month
    switch (releaseDate?.month) {
        case 1:
            month = "January";
            break;
        case 2:
            month = "February";
            break;
        case 3:
            month = "March";
            break;
        case 4:
            month = "April";
            break;
        case 5:
            month = "May";
            break;
        case 6:
            month = "June";
            break;
        case 7:
            month = "July";
            break;
        case 8:
            month = "August";
            break;
        case 9:
            month = "September";
            break;
        case 10:
            month = "October";
            break;
        case 11:
            month = "November";
            break;
        case 12:
            month = "December";
            break;
    }

    return (
        <div className="flex flex-col">
            <iframe
                allowFullScreen="1"
                src={`https://www.youtube.com/embed/${animeData?.trailer?.youtube_id}`}
                className="self-center rounded-md w-full md:w-[50%] h-[200px] md:h-[58vh] z-10">
            </iframe>
            <h3 className=" font-bold text-sm md:text-lg 2xl:text-2xl mt-6 text-white">{animeData?.title}</h3>
            <div className="text-[10px] md:text-sm 2xl:text-lg text-white">
                <section className="flex flex-row opacity-60 items-center mt-2">
                    <TfiTime className="text-xs md:text-sm 2xl:text-lg" />
                    <span className="ml-1">{animeData?.duration}</span>
                    <AiFillStar className="ml-3 text-xs md:text-sm 2xl:text-lg" />
                    <span className="ml-1">{animeData?.score}</span>
                </section>
                <hr className="w-full my-3 opacity-60" />
                <section className="flex flex-row  justify-between">
                    <div>
                        <div className="font-bold">
                            Release Date
                        </div>
                        <span className="opacity-60">
                            {`${releaseDate?.day} ${month} ${releaseDate?.year}`}
                        </span>
                        <div className="font-bold pt-3">
                            Type
                        </div>
                        <span className="opacity-60">
                            {animeData?.type === "TV" ?
                                `episodes${animeData?.episodes === null ? '' : ': ' + animeData?.episodes}` : "Movies"}
                        </span>
                    </div>
                    <div className="font-bold text-center w-[40%]">
                        Genres
                        <div className="flex flex-wrap justify-center">
                            {animeData?.genres?.map((genre) => (
                                <div
                                    key={genre.mal_id}
                                    className="bg-grey py-1 px-2 m-1 opacity-60 rounded-lg font-normal">
                                    {genre.name}
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
                <hr className="w-full my-3 opacity-60" />
                <section className="font-bold">
                    Synopsis :
                    <p className="font-normal opacity-60 mt-2 text-justify">
                        {animeData?.synopsis?.slice(0, cutText)}
                    </p>
                </section>
                <hr className="w-full my-3 opacity-60" />
                <section className="font-bold">
                    Related Anime
                    <Slider
                    isFetching={isFetchingAnimeByGenre}
                    data={data?.data} />
                </section>
            </div>
            <br />
        </div>
    )
}

export default DetailPage