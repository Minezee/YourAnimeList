import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const jikanMoeApi = createApi({
    reducerPath: 'jikanMoeApi',
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://api.jikan.moe/v4',
    }),
    endpoints: (builder) => ({
        getTopAnime: builder.query({query: () => '/top/anime'}),
    }),
});

export const { 
    useGetTopAnimeQuery,
} = jikanMoeApi