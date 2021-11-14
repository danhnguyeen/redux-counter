import { all } from "redux-saga/effects";
import watchCounter from "./counter";

export default function* rootSaga() {
  yield all([watchCounter()]);
}
