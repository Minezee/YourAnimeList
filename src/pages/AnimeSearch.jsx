import { useGetAnimeSearchQuery } from "../redux/services/jikanMoeApi";
import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

import {Page} from "../components";

const AnimeSearch = () => {
    const [searchParams, setSearchParams] = useSearchParams({q: ''});
    const pageNum = 0;
    const [page, setPage] = useState(0);
    const query = searchParams.get('q');
    const { data, isFetching, error } = useGetAnimeSearchQuery(query);
    
    useEffect(() => {
        setSearchParams({ q: query })
    }, [query])

    return(
        <>
            {query &&
                <h2 className="text-white text-center text-sm md:text-xl font-bold">Search : {query}</h2>}
            <Page
            data = {data}
            isFetching = {isFetching}
            error = {error}
            pageNum = {pageNum}
            setPage = { (num) => setPage(num)}
            page = {page}
            />
        </>
    )
}

export default AnimeSearch