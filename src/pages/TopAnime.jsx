import { useGetTopAnimePageQuery } from "../redux/services/jikanMoeApi";
import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

import { Page, Error } from "../components";

const TopAnime = () => {
    const [searchParams, setSearchParams] = useSearchParams({ page: 1 });
    const pageNum = searchParams.get('page')
    const [page, setPage] = useState(parseInt(pageNum));
    const [type, setType] = useState('')
    const { data, isFetching, error } = useGetTopAnimePageQuery({ type, page });

    useEffect(() => {
        setSearchParams({ page: page })
    }, [page])

    if (error) return <Error />

    return (
        <>
            <h2 className="text-white text-center text-sm md:text-xl font-bold notranslate">Top Anime {type.charAt(0).toUpperCase() + type.slice(1)}</h2>
            <select
                className="bg-grey text-white p-2 text-sm mt-0 md:mt-2 notranslate"
                onChange={(e) => setType(e.target.value)}>
                <option value="">All</option>
                <option value="tv">TV</option>
                <option value="movie">Movie</option>
            </select>
            <Page
                data={data}
                isFetching={isFetching}
                pageNum={pageNum}
                setPage={(num) => setPage(num)}
                page={page}
            />
        </>
    )
}

export default TopAnime