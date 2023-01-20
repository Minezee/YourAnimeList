import { configureStore } from '@reduxjs/toolkit';

// import x from './features/x';
import { jikanMoeApi } from './services/jikanMoeApi';

export const store = configureStore({
    reducer: {
        [jikanMoeApi.reducerPath]: jikanMoeApi.reducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(jikanMoeApi.middleware)
});