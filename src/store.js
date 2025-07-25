import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import peopleReducer from "./features/people/peopleSlice";
import personReducer from "./features/people/PersonPage/personSlice";
import genresReducer from "./common/Genres/genresSlice";
import moviesReducer from "./features/movies/MoviesPage/moviesSlice";
import rootSaga from "./rootSaga";

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
    reducer: {
        people: peopleReducer,
        person: personReducer,
        genres: genresReducer,
        movies: moviesReducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(sagaMiddleware),
});

sagaMiddleware.run(rootSaga);

export default store;