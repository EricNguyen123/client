import { all, call, put, takeEvery } from "redux-saga/effects";
import { GetUserResponseResult } from "../../types/redux";

import { getUserResult, getUsersResult, updateEmailResult, updateUsernameResult, updateUserResult } from "./actions";
import { getUserApi, getUsersApi, updateEmailApi, updateUserApi, updateUsernameApi } from "./api";
import types from "./type";

function* getUsersSaga(props: any) {
  try {
    const { data } = props.payload;
    const res: GetUserResponseResult = yield call(getUsersApi, data);
    if (res.status === 200) {
      yield put(getUsersResult({ data: res.data }));
    } else {
      const isSuccess = false;
      yield put(getUsersResult(res, isSuccess));
    }
  } catch (error) {
    console.error('Get User Saga Error:', error);
  };
}


function* getUserSaga(props: any) {
  try {
    const { data } = props.payload;
    const res: GetUserResponseResult = yield call(getUserApi, data);

    if (res.status === 200) {
      yield put(getUserResult({ data: res.data }));
    } else {
      const isSuccess = false;
      yield put(getUserResult(res, isSuccess));
    }
  } catch (error) {
    console.error('Get User Saga Error:', error);
  };
}

function* updateUsernameSaga(props: any) {
  try {
    const { data } = props.payload;
    const res: GetUserResponseResult = yield call(updateUsernameApi, data);

    if (res.status === 200) {
      yield put(updateUsernameResult({ data: res.data }));
    } else {
      const isSuccess = false;
      yield put(updateUsernameResult(res, isSuccess));
    }
  } catch (error) {
    console.error('Get User Saga Error:', error);
  };
}

function* updateEmailSaga(props: any) {
  try {
    const { data } = props.payload;
    const res: GetUserResponseResult = yield call(updateEmailApi, data);

    if (res.status === 200) {
      yield put(updateEmailResult({ data: res.data }));
    } else {
      const isSuccess = false;
      yield put(updateEmailResult(res, isSuccess));
    }
  } catch (error) {
    console.error('Get User Saga Error:', error);
  };
}

function* updateUserSaga(props: any) {
  try {
    const { data, onOpenChange, handleToast } = props.payload;
    const res: GetUserResponseResult = yield call(updateUserApi, data);
    if (res.status === 201) {
      yield onOpenChange(false);
      yield handleToast();
      yield put(updateUserResult({ data: res.data }));
    } else {
      const isSuccess = false;
      yield put(updateUserResult(res, isSuccess));
    }
  } catch (error) {
    console.error('Get User Saga Error:', error);
  };
}

export default function* rootSaga() {
  yield all([
    takeEvery(types.GET_USER, getUserSaga),
    takeEvery(types.GET_USERS, getUsersSaga),
    takeEvery(types.UPDATE_USERNAME, updateUsernameSaga),
    takeEvery(types.UPDATE_EMAIL, updateEmailSaga),
    takeEvery(types.UPDATE_USER, updateUserSaga),
  ]);
}
