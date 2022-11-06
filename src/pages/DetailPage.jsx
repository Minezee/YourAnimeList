import { useParams } from "react-router-dom"
import { Loading } from "../components";
import { useGetFullAnimeDataQuery } from "../redux/services/jikanMoeApi";

const DetailPage = () => {
    const { id } = useParams();
    const { data, isFetching, error } = useGetFullAnimeDataQuery(id);
    const detailData = data?.data

    if(isFetching) return <Loading title="Loading your anime data"/>

    if(error) return <Error />

    return (
        <div className="flex flex-col">
            <iframe
                allowFullScreen="1"
                height="150"
                width="270"
                src={`https://www.youtube.com/embed/${detailData?.trailer?.youtube_id}`}
                className="self-center rounded-md">
            </iframe>
        </div>
    )
}

export default DetailPage