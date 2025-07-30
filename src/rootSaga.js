import { all } from "redux-saga/effects";
import { peopleSaga } from "./features/people/peopleSaga";
import { personSaga } from "./features/people/PersonPage/personSaga";
import { genresSaga } from "./common/Genres/genresSaga";
import { moviesSaga } from "./features/movies/MoviesPage/moviesSaga";
import { movieSaga } from "./features/movies/MoviePage/movieSaga";

export default function* rootSaga() {
    yield all([
        peopleSaga(),
        personSaga(),
        genresSaga(),
        moviesSaga(),
        movieSaga(),
    ]);
};
