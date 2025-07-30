import { put, call, takeLatest } from "redux-saga/effects";
import { fetchMovie, fetchMovieError, fetchMovieSuccess } from "./movieSlice";
import { getMovie, getMovieCredits } from "../../../common/apiData/fetchData";

function* fetchMovieHandler({ payload }) {
    try {
        const { id } = payload;
        const movie = yield call(getMovie, id);
        const movieCredits = yield call(getMovieCredits, id);
        yield put(fetchMovieSuccess({ movie, movieCredits }));
    } catch (error) {
        yield put(fetchMovieError());
    };
};

export function* movieSaga() {
    yield takeLatest(fetchMovie.type, fetchMovieHandler);
};