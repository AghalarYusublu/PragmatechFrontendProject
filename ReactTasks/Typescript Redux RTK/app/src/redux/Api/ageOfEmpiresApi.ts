import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { WordDefinitions } from '../../Types/typesExport';




export const ageOfEmpiresAPi = createApi({
    reducerPath: 'ageOfEmpiresAPi',
    baseQuery: fetchBaseQuery({ baseUrl: 'https://api.dictionaryapi.dev/api/v2/' }),
    endpoints: (builder) => ({
        getAgeOfEmpiresInfo: builder.query<WordDefinitions[], string>({
            query: (word) => `entries/en/${word}`,
        }),
    }),
})

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetAgeOfEmpiresInfoQuery, useLazyGetAgeOfEmpiresInfoQuery } = ageOfEmpiresAPi
