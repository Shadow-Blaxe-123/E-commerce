import { configureStore } from '@reduxjs/toolkit'
import cartSlice from './cartSlice'
import { apiSlice } from './apiSlice'
import { combineReducers } from 'redux';
import { persistReducer, persistStore } from 'redux-persist';
import storage from 'redux-persist/lib/storage';


const rootReducer = combineReducers( {
    cart: cartSlice,
    [apiSlice.reducerPath]: apiSlice.reducer // Api Query with RTK
});


const persistConfig = {
    key: 'root',
    storage,
    blacklist: [`${[apiSlice.reducerPath]}`]
}


const persistedReducer = persistReducer(persistConfig, rootReducer);




const store = configureStore(
    {
        reducer: persistedReducer,

        middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(apiSlice.middleware),
    }
)

const persistor = persistStore(store)

export default store
export {persistor}