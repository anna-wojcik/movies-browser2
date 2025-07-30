import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import peopleReducer from "./features/people/peopleSlice";
import personReducer from "./features/people/PersonPage/personSlice";
import genresReducer from "./common/Genres/genresSlice";
import moviesReducer from "./features/movies/MoviesPage/moviesSlice";
import movieReducer from "./features/movies/MoviePage/movieSlice";
import rootSaga from "./rootSaga";

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
    reducer: {
        people: peopleReducer,
        person: personReducer,
        genres: genresReducer,
        movies: moviesReducer,
        movie: movieReducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(sagaMiddleware),
});

sagaMiddleware.run(rootSaga);

export default store;