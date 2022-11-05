import { configureStore } from '@reduxjs/toolkit';

// import x from './features/x';
import { jikanMoeApi } from './services/jikanMoeApi';

//lern on redux documentation :)
export const store = configureStore({
    reducer: {
        [jikanMoeApi.reducerPath]: jikanMoeApi.reducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(jikanMoeApi.middleware)
});