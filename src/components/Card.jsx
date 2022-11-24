import { Link } from "react-router-dom"

const Card = ({ data }) => (
    <Link
        to={data.type === 'Manga' ?  `/manga/detail/${data.mal_id}` : `/anime/detail/${data.mal_id}`}
        className="hover:opacity-80 relative "
    >
        <img
            src={data.images.jpg.large_image_url}
            className="h-full w-full"
            alt={data.title} />
        <div className="absolute w-full h-1/2 bg-gradient-to-t from-dark bottom-0 notranslate">
            <div className="absolute bottom-0 left-0 m-1 md:m-2">
                <h3 className="md:hidden text-[8px] text-white font-bold w-full cut-title">
                    {data.title}
                </h3>

                <h3 className="md:block hidden text-xs text-white font-bold w-full">
                    {data.title}
                </h3>
                <p className="text-[6px] md:text-[10px] text-white w-full">{data.score}</p>
            </div>
        </div>
    </Link>
)

export default Card