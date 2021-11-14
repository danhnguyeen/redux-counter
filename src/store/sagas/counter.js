import { put, delay, all, takeEvery } from "redux-saga/effects";
import { INCREMENT_ASYNC, INCREMENT_ASYNC_REQUEST } from "../types";

function* incrementSaga(action) {
  yield delay(1000);
  yield put({
    type: INCREMENT_ASYNC,
    payload: action.payload,
  });
}

export default function* counterSaga() {
  yield takeEvery(INCREMENT_ASYNC_REQUEST, incrementSaga);
}

