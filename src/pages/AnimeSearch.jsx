import { useGetAnimeSearchQuery } from "../redux/services/jikanMoeApi";
import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

import { Page, Error } from "../components";

const AnimeSearch = () => {
    const [searchParams] = useSearchParams({ q: ' ' });
    const pageNum = 0;
    const [page, setPage] = useState(0);
    const query = searchParams.get('q');
    const [type, setType] = useState('')
    const { data, isFetching, error } = useGetAnimeSearchQuery({ type, query });

    if (error) return <Error />

    return (
        <>
                <>
                    <h2 className="text-white text-center text-sm md:text-xl font-bold notranslate">Search : {query}</h2>
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
                        error={error}
                        pageNum={pageNum}
                        setPage={(num) => setPage(num)}
                        page={page}
                    />
                </>
            
        </>
    )
}

export default AnimeSearch