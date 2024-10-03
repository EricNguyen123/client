import { all, call, put, takeEvery } from "redux-saga/effects";
import { GetUserResponseResult } from "../../types/redux";

import { deleteUserResult, deleteUsersResult, getUserResult, getUsersResult, registerUserResult, updateEmailResult, updateUsernameResult, updateUserResult } from "./actions";
import { deleteUserApi, deleteUsersApi, getUserApi, getUsersApi, registerUserApi, updateEmailApi, updateUserApi, updateUsernameApi } from "./api";
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
    const { data, onOpenChange, handleToast, handleToastError } = props.payload;
    const res: GetUserResponseResult = yield call(updateUserApi, data);
    if (res.status === 201) {
      yield onOpenChange(false);
      yield handleToast();
      yield put(updateUserResult({ data: res.data }));
    } else {
      const isSuccess = false;
      yield handleToastError();
      yield put(updateUserResult(res, isSuccess));
    }
  } catch (error) {
    console.error('Get User Saga Error:', error);
  };
}

function* deleteUserSaga(props: any) {
  try {
    const { data, onOpenChange, handleToast, handleToastError } = props.payload;
    const res: GetUserResponseResult = yield call(deleteUserApi, data);
    if (res.status === 200) {
      yield onOpenChange(false);
      yield handleToast();
      yield put(deleteUserResult({ data: res.data }));
    } else {
      const isSuccess = false;
      yield handleToastError();
      yield put(deleteUserResult(res, isSuccess));
    }
  } catch (error) {
    console.error('Get User Saga Error:', error);
  };
}

function* registerUserSaga(props: any) {
  try {
    const { data, onOpenChange, handleToast, handleToastError } = props.payload;
    const res: GetUserResponseResult = yield call(registerUserApi, data);
    if (res.status === 201) {
      yield onOpenChange(false);
      yield handleToast();
      yield put(registerUserResult({ data: res.data }));
    } else {
      const isSuccess = false;
      yield handleToastError();
      yield put(registerUserResult(res, isSuccess));
    }
  } catch (error) {
    console.error('Register User Saga Error:', error);
  };
}

function* deleteUsersSaga(props: any) {
  try {
    const { data, onOpenChange, handleToast, handleToastError } = props.payload;
    const res: GetUserResponseResult = yield call(deleteUsersApi, data);
    if (res.status === 200) {
      yield onOpenChange(false);
      yield handleToast();
      yield put(deleteUsersResult({ data: res.data }));
    } else {
      const isSuccess = false;
      yield handleToastError();
      yield put(deleteUsersResult(res, isSuccess));
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
    takeEvery(types.DELETE_USER, deleteUserSaga),
    takeEvery(types.DELETE_USERS, deleteUsersSaga),
    takeEvery(types.REGISTER_USER, registerUserSaga),
  ]);
}
