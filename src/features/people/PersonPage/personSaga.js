import { call, put, takeLatest, delay } from "redux-saga/effects";
import { getPerson, getPersonMovieCredits } from "../../../common/apiData/fetchData";
import { fetchPerson, fetchPersonSuccess, fetchPersonError } from "./personSlice";

function* fetchPersonHandler({ payload }) {
    try {
        const { id } = payload;
        yield delay(100);
        const person = yield call(getPerson, id);
        const movieCredits = yield call(getPersonMovieCredits, id);
        yield put(fetchPersonSuccess({ person, movieCredits }));
    } catch (error) {
        yield put(fetchPersonError());
    }
};

export function* personSaga() {
    yield takeLatest(fetchPerson.type, fetchPersonHandler);
};