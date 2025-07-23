import { put, call, takeLatest } from 'redux-saga/effects';
import { getGenres } from '../apiData/fetchData';
import { fetchGenres, fetchGenresError, fetchGenresSuccess } from './genresSlice';

function* fetchGenresHandle() {
    try {
        const data = yield call(getGenres);
        yield put(fetchGenresSuccess(data.genres));
    } catch (error) {
        yield put(fetchGenresError());
    }
};

export function* genresSaga() {
    yield takeLatest(fetchGenres.type, fetchGenresHandle);
};