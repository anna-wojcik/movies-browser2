import { takeLatest, put, call, select, delay } from "redux-saga/effects";
import { fetchPeople, fetchPeopleSuccess, fetchPeopleError, selectPage } from "./peopleSlice";
import { getPeople } from "../../common/apiData/fetchData";

function* fetchPeopleHandler() {
    try {
        yield delay(200);
        const page = yield select(selectPage);
        const results = yield call(getPeople, page);
        yield put(fetchPeopleSuccess(results));
    } catch(error) {
        yield put(fetchPeopleError());
    }
}

export function* peopleSaga() {
    yield takeLatest(fetchPeople.type, fetchPeopleHandler);
}