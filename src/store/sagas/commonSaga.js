import { takeEvery } from "redux-saga/effects";
import { COMMON } from '../definitions';

function langChange(action) {
  console.log(action.lang)
}

function handleInit() {
  console.log('Here working');
}

export default function* commonSaga()  {
  yield takeEvery(COMMON.INIT, handleInit);
  yield takeEvery(COMMON.LANG_CHANGE, langChange);
}
