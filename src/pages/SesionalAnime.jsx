import { useGetSeasonAnimePageQuery } from "../redux/services/jikanMoeApi";
import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

import {Page} from "../components";

const SeasonalAnime = () => {
    const [searchParams, setSearchParams] = useSearchParams({page: 1});
    const pageNum = searchParams.get('page')
    const [page, setPage] = useState(parseInt(pageNum));
    const { data, isFetching, error } = useGetSeasonAnimePageQuery(page);
    
    useEffect(() => {
        setSearchParams({ page: page })
        console.log(page)
    }, [page])

    return(
        <Page 
        data = {data}
        isFetching = {isFetching}
        error = {error}
        pageNum = {pageNum}
        setPage = { (num) => setPage(num)}
        page = {page}
        />
    )
}

export default SeasonalAnime