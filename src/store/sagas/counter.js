import { put, delay, all, takeEvery } from "redux-saga/effects";
import { INCREMENT_ASYNC_REQUEST } from "../types";
import * as actions from "../actions/counter";

function* incrementSaga() {
  yield delay(1000);
  const payload = 10;
  yield put(actions.incrementAsync(payload));
}

export default function* watchCounter() {
  // listen INCREMENT_ASYNC_REQUEST action and excute incrementSaga function
  yield takeEvery(INCREMENT_ASYNC_REQUEST, incrementSaga);
}
