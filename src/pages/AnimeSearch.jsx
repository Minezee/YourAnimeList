import { useGetAnimeSearchQuery } from "../redux/services/jikanMoeApi";
import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

import { Page } from "../components";

const AnimeSearch = () => {
    const [searchParams] = useSearchParams({ q: '' });
    const pageNum = 0;
    const [page, setPage] = useState(0);
    const query = searchParams.get('q');
    const { data, isFetching, error } = useGetAnimeSearchQuery(query);

    return (
        <>
            {data?.data.length === 0 ?
                <div className="w-full flex justify-center items-center">
                    <h1 className="font-bold text-2xl text-white mt-2">
                        Cant find {query}
                    </h1>
                </div>
                :
                <>
                    <h2 className="text-white text-center text-sm md:text-xl font-bold notranslate">Search : {query}</h2>
                    <Page
                    data={data}
                    isFetching={isFetching}
                    error={error}
                    pageNum={pageNum}
                    setPage={(num) => setPage(num)}
                    page={page}
                                />
                </>
            }
        </>
    )
}

export default AnimeSearch