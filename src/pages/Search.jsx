import { useGetAnimeSearchQuery } from "../redux/services/jikanMoeApi";
import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

import {Page} from "../components";

const Search = () => {
    const [searchParams] = useSearchParams({q: ''});
    const pageNum = 0;
    const [page, setPage] = useState(0);
    const query = searchParams.get('q');
    const { data, isFetching, error } = useGetAnimeSearchQuery(query);

    return (
        <div className="w-full flex justify-center items-center">
        <h1 className="font-bold text-2xl text-white mt-2">
            Searching {query} . . .
        </h1>
    </div>
    )
}

export default Search;