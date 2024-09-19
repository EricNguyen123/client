import {
  Action,
  LoginProps,
  ForGotPasswordProps,
  ResetPasswordProps,
  ChangePasswordProps,
  SettingPasswordProps,
  CheckResetPasswordTokenProps,
  RegisterProps,
} from "../../types/redux";
import types from "./type";

export const register = (data: RegisterProps): Action => ({
  type: types.REGISTER,
  payload: data,
});

export const registerResult = (result: any, isSuccess = true): Action => ({
  type: isSuccess ? types.REGISTER_SUCCESS : types.REGISTER_FAILED,
  payload: result,
});

export const login = (data: LoginProps): Action => ({
  type: types.LOGIN,
  payload: data,
});

export const loginResult = (result: any, isSuccess = true): Action => ({
  type: isSuccess ? types.LOGIN_SUCCESS : types.LOGIN_FAILED,
  payload: result,
});

export const loginWithGoogle = (data: { email: string | null }): Action => ({
  type: types.LOGIN_WITH_GOOGLE,
  payload: data,
});

export const loginWithGoogleResult = (result: any, isSuccess = true): Action => ({
  type: isSuccess ? types.LOGIN_WITH_GOOGLE_SUCCESS : types.LOGIN_WITH_GOOGLE_FAILED,
  payload: result,
});


export const logout = (data: any): Action => ({
  type: types.LOGOUT,
  payload: data,
});

export const logoutResult = (result: any, isSuccess = true): Action => ({
  type: isSuccess ? types.LOGOUT_SUCCESS : types.LOGOUT_FAILED,
  payload: result,
});

export const checkResetPasswordToken = (
  data: CheckResetPasswordTokenProps
): Action => ({
  type: types.CHECK_RESET_PASSWORD_TOKEN,
  payload: data,
});

export const checkResetPasswordTokenResult = (
  result: any,
  isSuccess = true
): Action => ({
  type: isSuccess
    ? types.CHECK_RESET_PASSWORD_TOKEN_SUCCESS
    : types.CHECK_RESET_PASSWORD_TOKEN_FAILED,
  payload: result,
});

export const forgotPassword = (data: ForGotPasswordProps): Action => ({
  type: types.FORGOT_PASSWORD,
  payload: data,
});

export const forgotPasswordResult = (isSuccess = true): Action => ({
  type: isSuccess
    ? types.FORGOT_PASSWORD_SUCCESS
    : types.FORGOT_PASSWORD_FAILED,
});

export const resetPassword = (data: ResetPasswordProps): Action => ({
  type: types.RESET_PASSWORD,
  payload: data,
});

export const resetPasswordResult = (result: any, isSuccess = true): Action => ({
  type: isSuccess ? types.RESET_PASSWORD_SUCCESS : types.RESET_PASSWORD_FAILED,
  payload: result,
});

export const settingPassword = (data: SettingPasswordProps): Action => ({
  type: types.SETTING_PASSWORD,
  payload: data,
});

export const settingPasswordResult = (
  result: any,
  isSuccess = true
): Action => ({
  type: isSuccess
    ? types.SETTING_PASSWORD_SUCCESS
    : types.SETTING_PASSWORD_FAILED,
  payload: result,
});

export const changePassword = (data: ChangePasswordProps): Action => ({
  type: types.CHANGE_PASSWORD,
  payload: data,
});

export const changePasswordResult = (
  result: any,
  isSuccess = true
): Action => ({
  type: isSuccess
    ? types.CHANGE_PASSWORD_SUCCESS
    : types.CHANGE_PASSWORD_FAILED,
  payload: result,
});
