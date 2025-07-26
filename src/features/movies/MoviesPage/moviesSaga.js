import { call, put, delay, takeLatest, debounce } from "redux-saga/effects";
import { getMovies, getMoviesSearch } from "../../../common/apiData/fetchData";
import { fetchMovies, fetchMoviesError, fetchMoviesSearch, fetchMoviesSearchSuccess, fetchMoviesSuccess } from "./moviesSlice";

function* fetchMoviesHandler({ payload: page }) {
    try {
        yield delay(200);
        const results = yield call(getMovies, page);
        yield put(fetchMoviesSuccess(results));
    } catch (error) {
        yield put(fetchMoviesError());
    }

};

function* fetchMoviesSearchHandler({ payload }) {
    try {
        const { query, page } = payload;
        const results = yield call(getMoviesSearch, query, page);
        yield put(fetchMoviesSearchSuccess(results));
    } catch (error) {
        yield put(fetchMoviesError());
    }
};

export function* moviesSaga() {
    yield takeLatest(fetchMovies.type, fetchMoviesHandler);
    yield debounce(400, fetchMoviesSearch.type, fetchMoviesSearchHandler);
};