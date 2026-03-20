import {combineReducers, configureStore} from '@reduxjs/toolkit'
import { persistReducer, persistStore } from 'redux-persist'
import storage from 'redux-persist/es/storage'

// slice redux
import nameSlice from '@/store/nameSlice'

const rootReducers = combineReducers({
    nameSlice
})

// configuration persistReducer
const persistConfig = {
    key: 'root',
    storage,
    whitelist: []
}

const persistReducers = persistReducer(persistConfig, rootReducers)

const store = configureStore({
    reducer: persistReducers,
    middleware: (getDefaultMiddleware) => 
        getDefaultMiddleware({
            serializableCheck: false
        })
    ,
})

const persistor = persistStore(store)

export { store, persistor }

export type IRootState = ReturnType<typeof rootReducers>