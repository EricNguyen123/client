import { handleAuthErrors, handleAuthSuccess } from "../../common/error";
import { all, call, put, takeEvery } from "redux-saga/effects";
import {
  LoginResponseResult,
  PasswordResetResponseResult,
  ResponseResult,
  CheckResetPasswordTokenResponseResult,
  RegisterResponseResult,
  ChangePasswordResult,
} from "../../types/redux";
import { setAuthToken } from "../../utils";

import {
  loginResult,
  logoutResult,
  forgotPasswordResult,
  resetPasswordResult,
  settingPasswordResult,
  checkResetPasswordTokenResult,
  registerResult,
  loginWithGoogleResult,
  changePasswordResult
} from "./actions";
import {
  loginApi,
  logoutApi,
  forgotPasswordApi,
  resetPasswordApi,
  settingPasswordApi,
  checkResetPasswordTokenApi,
  registerApi,
  loginWithGoogleApi,
  changePasswordApi
} from "./api";
import types from "./type";

function* registerSaga(props: any) {
  try {
    const { data, setError } = props.payload;
    const res: RegisterResponseResult = yield call(registerApi, data);
    if (res.status === 201) {
      yield put(registerResult({ data: res.data }));
      setAuthToken(res.headers);
      localStorage.setItem("headers", JSON.stringify(res.headers));
    } else {
      const error = handleAuthErrors(res.response.data.errors[0]);
      setError(error);
      const isSuccess = false;
      yield put(registerResult(res, isSuccess));
    }
  } catch (error) {
    const isSuccess = false;
    yield put(registerResult({}, isSuccess));
  };
}

function* loginSaga(props: any) {
  try {
    const { data, setError } = props.payload;
    const res: LoginResponseResult = yield call(loginApi, data);

    if (res.status === 201) {
      const status = res.data.user.isActive;
      if (status) {
        const role = res.data.user.roles
        yield put(loginResult({ data: res.data, role }));
        localStorage.setItem("headers", JSON.stringify(res.headers));
        localStorage.setItem("token", res.data.token)
      } else {
        const error = handleAuthErrors("inactive");
        setError(error);
        const isSuccess = false;
        yield put(loginResult(res, isSuccess));
      }
    } else {
      const error = handleAuthErrors(res.response.data.errors[0]);
      setError(error);
      const isSuccess = false;
      yield put(loginResult(res, isSuccess));
    }
  } catch (error) {
    const { setError } = props.payload;
    setError(error);
    const isSuccess = false;
    yield put(loginResult({}, isSuccess));
  };
}

function* loginWithGoogleSaga(props: any) {
  try {
    const { email } = props.payload;
    const res: LoginResponseResult = yield call(loginWithGoogleApi, { email: email });
    if (res.status === 201) {
      const status = res.data.user.isActive;
      if (status) {
        const role = res.data.user.roles
        yield put(loginWithGoogleResult({ data: res.data, role }));
        // setAuthToken(res.headers);
        localStorage.setItem("headers", JSON.stringify(res.headers));
        localStorage.setItem("token", res.data.token)
      } else {
        const error = handleAuthErrors("inactive");
        const isSuccess = false;
        yield put(loginWithGoogleResult(res, isSuccess));
      }
    } else {
      const error = handleAuthErrors(res.response.data.errors[0]);
      const isSuccess = false;
      yield put(loginWithGoogleResult(res, isSuccess));
    }
  } catch (error) {
    console.error('Login Saga Error:', error);
  };
}

function* logoutSaga(props: any) {
  try {
    const { handleRedirect } = props.payload;
    const res: ResponseResult = yield call(logoutApi,{ token: localStorage.getItem('token') });
    localStorage.clear();
    yield handleRedirect();
    yield put(logoutResult(res.data));
  } catch (error) {
    const isSuccess = false;
    yield put(logoutResult(error, isSuccess));
  }
}

function* forgotPasswordSaga(props: any) {
  const { data, setError, resetForm, setMessage } = props.payload;
  const formData = {
    email: data.email,
    redirectUrl: window.location.origin,
  };
  const res: ResponseResult = yield call(forgotPasswordApi, formData);
  if (res.status === 200) {
    yield put(forgotPasswordResult());
    setMessage("success", handleAuthSuccess("sent email success"));
    resetForm();
  } else {
    yield put(forgotPasswordResult(false));
    const error = res.response.data.errors[0];
    setError(error);
  }
}

function* checkResetPasswordTokenSaga(props: any) {
  const { data, setMessage, handleRedirectPage } = props.payload;

  const res: CheckResetPasswordTokenResponseResult = yield call(
    checkResetPasswordTokenApi,
    data
  );

  if (res.data?.success) {
    yield put(checkResetPasswordTokenResult(res));
  } else {
    setMessage("error", res.data.errors[0]);
    handleRedirectPage("/login");
    const isSuccess = false;
    yield put(resetPasswordResult(res, isSuccess));
  }
}

function* resetPasswordSaga(props: any) {
  const { data, setError, handleRedirectPage, setMessage } = props.payload;

  const res: PasswordResetResponseResult = yield call(resetPasswordApi, data);
  if (res.status === 200) {
    yield put(resetPasswordResult(res));
    setMessage("success", handleAuthSuccess("reset password success"));
    handleRedirectPage("/login");
  } else {
    setError(res.response.data.errors.password[0]);
    const isSuccess = false;
    yield put(resetPasswordResult(res, isSuccess));
  }
}

function* settingPasswordSaga(props: any) {
  const { data, setError, handleRedirectPage } = props.payload;

  const res: PasswordResetResponseResult = yield call(settingPasswordApi, data);
  if (res.status === 200) {
    yield put(settingPasswordResult(res));
    handleRedirectPage("/login");
  } else {
    setError(res.response.data.errors.password[0]);
    const isSuccess = false;
    yield put(settingPasswordResult(res, isSuccess));
  }
}

function* changePasswordSaga(props: any) {
  try {
    const { data, handleHidenPage, handleErrorCurrentPassword } = props.payload;
    const res: ChangePasswordResult = yield call(changePasswordApi, data);

    if (res.status === 201) {
      yield put(changePasswordResult({ data: res.data }));
      if (res.data.status === 404) {
        yield handleErrorCurrentPassword(res.data)
      } else {
        yield handleHidenPage();
      }
    } else {
      const isSuccess = false;
      yield put(changePasswordResult(res, isSuccess));
    }
  } catch (error) {
    console.error('Register Saga Error:', error);
  };
}

export default function* rootSaga() {
  yield all([
    takeEvery(types.LOGIN_WITH_GOOGLE, loginWithGoogleSaga),
    takeEvery(types.REGISTER, registerSaga),
    takeEvery(types.LOGIN, loginSaga),
    takeEvery(types.LOGOUT, logoutSaga),
    takeEvery(types.FORGOT_PASSWORD, forgotPasswordSaga),
    takeEvery(types.RESET_PASSWORD, resetPasswordSaga),
    takeEvery(types.CHANGE_PASSWORD, changePasswordSaga),
    takeEvery(types.SETTING_PASSWORD, settingPasswordSaga),
    takeEvery(types.CHECK_RESET_PASSWORD_TOKEN, checkResetPasswordTokenSaga),
  ]);
}
