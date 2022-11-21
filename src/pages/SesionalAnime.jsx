import { useGetSeasonAnimePageQuery } from "../redux/services/jikanMoeApi";
import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

import {Page, Error} from "../components";

const SeasonalAnime = () => {
    const [searchParams, setSearchParams] = useSearchParams({page: 1});
    const pageNum = searchParams.get('page')
    const [page, setPage] = useState(parseInt(pageNum));
    const { data, isFetching, error } = useGetSeasonAnimePageQuery(page);
    
    useEffect(() => {
        setSearchParams({ page: page })
    }, [page])

    if (error) return <Error />

    return(
        <>
            <h2 className="text-white text-center text-sm md:text-xl font-bold">Seasonal Anime</h2>
            <Page
            data = {data}
            isFetching = {isFetching}
            pageNum = {pageNum}
            setPage = { (num) => setPage(num)}
            page = {page}
            />
        </>
    )
}

export default SeasonalAnime