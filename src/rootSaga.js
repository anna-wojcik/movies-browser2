import { all } from "redux-saga/effects";
import { peopleSaga } from "./features/people/peopleSaga";
import { personSaga } from "./features/people/PersonPage/personSaga";
import { genresSaga } from "./common/Genres/genresSaga";

export default function* rootSaga() {
    yield all([
        peopleSaga(),
        personSaga(),
        genresSaga(),
    ]);
};
