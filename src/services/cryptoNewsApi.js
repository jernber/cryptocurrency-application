import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

const cryptoNewsHeaders = {
    headers: {
        'x-bingapis-sdk': 'true',
        'x-rapidapi-host': 'bing-news-search1.p.rapidapi.com',
        'x-rapidapi-key': '561fe73ee8mshbcae87a2953e69dp10c1b1jsnfe2e4f55f178'
    }
}
const baseUrl = 'https://bing-news-search1.p.rapidapi.com'
const createRequest = (url) = ({ url, headers: cryptoNewsHeaders})

export const cryptoNewsApi = createApi({
    // What the reducer is for
    reducerPath: 'cryptoNewsApi',
    // Where the API address is
    baseQuery: fetchBaseQuery({ baseUrl }),
    endpoints: (builder) => ({
        getCryptoNews: builder.query({
            query: ({ newsCategory, count }) => createRequest(`/news/search?q=${newsCategory}&safeSearch=Off&textFormat=Raw&freshness=Day&count=${count}`)
        })
    })
})  
 
export const { useGetCryptoNewsQuery } = cryptoApi;
