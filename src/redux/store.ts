import { persistStore } from "redux-persist";
import createSagaMiddleware from "redux-saga";
import { configureStore } from "@reduxjs/toolkit";

import reducers from "./reducer";
import rootSaga from "./saga";

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
  reducer: reducers,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }).concat(sagaMiddleware),
  devTools: process.env.NEXT_PUBLIC_ENV !== "production",
});

const isClient = typeof window !== 'undefined';
let persistor;
if (isClient) {
  persistor = persistStore(store);
}

sagaMiddleware.run(rootSaga);

export { persistor, store };
