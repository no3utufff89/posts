import { configureStore } from '@reduxjs/toolkit';
import postsSlice from './slices/postsSlice/postsSlice';
import settingsSlice from './slices/settingsSlice/settingsSlice';

const store = configureStore({
    reducer: {
        posts: postsSlice,
        settings: settingsSlice,
    }, 
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
        serializableCheck: false,
    }),
})
export default store;
export type AppStore = typeof store
export type RootState = ReturnType<AppStore['getState']>
export type AppDispatch = AppStore['dispatch']
