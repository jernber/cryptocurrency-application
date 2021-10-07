import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

const cryptoApiHeaders = {
          'x-rapidapi-host': 'coinranking1.p.rapidapi.com',
          'x-rapidapi-key': '561fe73ee8mshbcae87a2953e69dp10c1b1jsnfe2e4f55f178'
}

const createRequest = (url) => ({ url, headers: cryptoApiHeaders })
const baseUrl = 'https://coinranking1.p.rapidapi.com/exchanges'

// This functions calls on Coinranking API to get exchange rates of cryptocurrencies
export const cryptoApi = createApi({
    // What the reducer is for
    reducerPath: 'cryptoApi',
    // Where the API address is
    baseQuery: fetchBaseQuery({ baseUrl }),
    endpoints: (builder) => ({
        getCryptos: builder.query({
            query: () => createRequest('/coins')
        })
    })
})  

// Using Redux toolkit to creates hooks you can call instantly to get all data on query's
export const { useGetCryptosQuery } = cryptoApi;