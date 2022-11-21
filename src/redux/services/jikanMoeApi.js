import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const jikanMoeApi = createApi({
    reducerPath: 'jikanMoeApi',
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://api.jikan.moe/v4',
    }),
    endpoints: (builder) => ({
        getTopAnime: builder.query({query: () => '/top/anime'}),
        getSeasonNow: builder.query({query: () => '/seasons/now'}),
        getFullAnimeData: builder.query({query: (id) => `/anime/${id}/full`}),
        getAnimeByGenre: builder.query({query: (genre) => `/anime?genres=${genre}&order_by=score&sort=desc&sfw=false`}),
        getTopAnimePage: builder.query({query: ({type , page}) => `/top/anime?page=${page}&sfw=false&type=${type}`}),
        getSeasonAnimePage: builder.query({query: (page) => `/seasons/now?page=${page}&sfw=false`}),
        getUpcomingAnimePage: builder.query({query: (page) => `/seasons/upcoming?page=${page}&sfw=false&type=movie`}),
        getAnimeSearch: builder.query({query: ({type , query}) => `/anime?q=${query}&type=${type}&min_score=4&order_by=rank&sfw=false`}),
    }),
});

export const { 
    useGetTopAnimeQuery,
    useGetSeasonNowQuery,
    useGetFullAnimeDataQuery,
    useGetAnimeByGenreQuery,
    useGetTopAnimePageQuery,
    useGetSeasonAnimePageQuery,
    useGetUpcomingAnimePageQuery,
    useGetAnimeSearchQuery,
} = jikanMoeApi