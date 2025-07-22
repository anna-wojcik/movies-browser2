import { all } from "redux-saga/effects";
import { peopleSaga } from "./features/people/peopleSaga";
import { personSaga } from "./features/people/PersonPage/personSaga";

export default function* rootSaga() {
    yield all([
        peopleSaga(),
        personSaga(),
    ]);
};
