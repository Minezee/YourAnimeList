import { useGetTopAnimePageQuery } from "../redux/services/jikanMoeApi";
import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

import {Page} from "../components";

const TopAnime = () => {
    const [searchParams, setSearchParams] = useSearchParams({page: 1});
    const pageNum = searchParams.get('page')
    const [page, setPage] = useState(parseInt(pageNum));
    const { data, isFetching, error } = useGetTopAnimePageQuery(page);
    
    useEffect(() => {
        setSearchParams({ page: page })
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

export default TopAnime