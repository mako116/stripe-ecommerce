import { configureStore} from "@reduxjs/toolkit"
 import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import renderReducer from "./renderSlice";
 
const persistConfig = {
    key: 'root',
    version: 1,
    storage,
  }

  const persistedReducer = persistReducer(persistConfig,renderReducer)

export const store = configureStore({
    reducer: {mako : persistedReducer},
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
        serializableCheck: {
          ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
        },
      }),
  
});

export let persistor = persistStore(store)
