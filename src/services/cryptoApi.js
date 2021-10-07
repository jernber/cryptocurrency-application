import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query'

const cryptoApiHeaders = {
          'x-rapidapi-host': 'coinranking1.p.rapidapi.com',
          'x-rapidapi-key': '561fe73ee8mshbcae87a2953e69dp10c1b1jsnfe2e4f55f178'
}
const createRequest = (url) => ({ url, headers: cryptoApiHeaders})
const baseUrl = 'https://coinranking1.p.rapidapi.com/exchanges'

export const cryptoApi = createApi({
    reducerPath: 'cryptoApi',
    baseQuery: fetchBaseQuery({ baseUrl }),
    endpoints: (builder) => ({
        getCryptos: builder.query({
            query: () => createRequest('/exchanges')
        })
    })
})  