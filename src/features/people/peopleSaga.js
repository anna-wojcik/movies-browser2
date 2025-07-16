import { takeLatest, put, call, delay, debounce } from "redux-saga/effects";
import { fetchPeople, fetchPeopleSuccess, fetchPeopleError, fetchPeopleSearch, fetchPeopleSearchSuccess } from "./peopleSlice";
import { getPeople, getPeopleSearch } from "../../common/apiData/fetchData";

function* fetchPeopleHandler({ payload: page }) {
    try {
        yield delay(200);
        const results = yield call(getPeople, page);
        yield put(fetchPeopleSuccess(results));
    } catch (error) {
        yield put(fetchPeopleError());
    }
}

function* fetchPeopleSearchHandler({ payload }) {
    try {
        const { query, page } = payload;
        const results = yield call(getPeopleSearch, query, page);
        yield put(fetchPeopleSearchSuccess(results));
    } catch (error) {
        yield put(fetchPeopleError());
    }
}

export function* peopleSaga() {
    yield takeLatest(fetchPeople.type, fetchPeopleHandler);
    yield debounce(400, fetchPeopleSearch.type, fetchPeopleSearchHandler);
}