import { configureStore } from '@reduxjs/toolkit'
import cartSlice from './cartSlice'
import { apiSlice } from './apiSlice'


const store = configureStore(
    {
        reducer: {
            cart: cartSlice,
            [apiSlice.reducerPath]: apiSlice.reducer // Api Query with RTK
        },

        middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(apiSlice.middleware),
    }
)

export default store