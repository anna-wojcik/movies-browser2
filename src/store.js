import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import peopleReducer from "./features/peopleList/peopleSlice";
import rootSaga from "./rootSaga";

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
    reducer: {
        people: peopleReducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(sagaMiddleware),
});

sagaMiddleware.run(rootSaga);

export default store;