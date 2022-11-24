import { TfiTime } from "react-icons/tfi"
import { AiFillStar } from "react-icons/ai"

const Detail = ({ data }) => {
    const releaseDate = data?.aired?.prop?.from;

    var month;

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
        <div className="text-[10px] md:text-sm 2xl:text-lg text-white">
            <h3 className=" font-bold text-sm md:text-lg 2xl:text-2xl mt-6 text-white notranslate">{data?.title}</h3>
            {data?.score &&
                <section className="flex flex-row opacity-60 items-center mt-2">
                    {data.type !== "Manga" && 
                    <>
                    <TfiTime className="text-xs md:text-sm 2xl:text-lg" />
                    <span className="ml-1 mr-3">{data?.duration}</span>
                    </>
                    }
                    <AiFillStar className="text-xs md:text-sm 2xl:text-lg" />
                    <span className="ml-1">{data?.score}</span>
                </section>
            }
            <hr className="w-full my-3 opacity-60" />
            <section className="flex flex-row  justify-between">
                <div>
                    {data.type === "Manga" ?
                        <>
                            <div className="font-bold">
                                Status
                            </div>
                            <span className="opacity-60">
                                {data.status}
                            </span>
                        </>
                        :
                        <>
                            <div className="font-bold">
                                Release Date
                            </div>
                            <span className="opacity-60">
                                {releaseDate?.year === null ?
                                    'Still no information'
                                    : `${releaseDate?.day} ${month} ${releaseDate?.year}`}
                            </span>
                        </>}
                    <div className="font-bold pt-3">
                        Type
                    </div>
                    <span className="opacity-60">
                        {data?.type === "TV" ?
                            `episodes${data?.episodes === null ? '' : ': ' + data?.episodes}` : data.type}
                    </span>
                </div>
                <div className="font-bold text-center w-[40%]">
                    Genres
                    <div className="flex flex-wrap justify-center">
                        {data?.genres?.map((genre) => (
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
                    {data?.synopsis?.slice(0, data?.synopsis.search("Written") - 1)}
                </p>
            </section>
            <hr className="w-full my-3 opacity-60" />
        </div>
    )
}

export default Detail