import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

const cryptoApiHeaders = {
          'x-rapidapi-host': 'coinranking1.p.rapidapi.com',
          'x-rapidapi-key': '561fe73ee8mshbcae87a2953e69dp10c1b1jsnfe2e4f55f178'
}

const createRequest = (url) => ({ url, headers: cryptoApiHeaders })
const baseUrl = 'https://coinranking1.p.rapidapi.com'

// This functions calls on Coinranking API to get exchange rates of cryptocurrencies
export const cryptoApi = createApi({
    // What the reducer is for
    reducerPath: 'cryptoApi',
    // Where the API address is
    baseQuery: fetchBaseQuery({ baseUrl }),
    endpoints: (builder) => ({
        getCryptos: builder.query({
            query: (count) => createRequest(`/coins?limit=${count}`)
        }),
        getCryptoDetails: builder.query({
            query: (coinId) => createRequest(`/coin/${coinId}`),
        })
    })
})  

// Using Redux toolkit to creates hooks you can call instantly to get all data on query's
export const { useGetCryptosQuery, useGetCryptoDetailsQuery } = cryptoApi;
