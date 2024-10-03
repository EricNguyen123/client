import {
  Action,
  DeleteUserProps,
  DeleteUsersProps,
  GetUserProps,
  GetUsersProps,
  RegisterUserProps,
  UpdateEmailProps,
  UpdateUsernameProps,
  UpdateUserProps,
} from "../../types/redux";
import types from "./type";

export const getUsers = (data: GetUsersProps): Action => ({
  type: types.GET_USERS,
  payload: data,
});

export const getUsersResult = (result: any, isSuccess = true): Action => ({
  type: isSuccess ? types.GET_USERS_SUCCESS : types.GET_USERS_FAILED,
  payload: result,
});

export const getUser = (data: GetUserProps): Action => ({
  type: types.GET_USER,
  payload: data,
});

export const getUserResult = (result: any, isSuccess = true): Action => ({
  type: isSuccess ? types.GET_USER_SUCCESS : types.GET_USER_FAILED,
  payload: result,
});

export const updateUsername = (data: UpdateUsernameProps): Action => ({
  type: types.UPDATE_USERNAME,
  payload: data,
});

export const updateUsernameResult = (result: any, isSuccess = true): Action => ({
  type: isSuccess ? types.UPDATE_USERNAME_SUCCESS : types.UPDATE_USERNAME_FAILED,
  payload: result,
});

export const updateEmail = (data: UpdateEmailProps): Action => ({
  type: types.UPDATE_EMAIL,
  payload: data,
});

export const updateEmailResult = (result: any, isSuccess = true): Action => ({
  type: isSuccess ? types.UPDATE_EMAIL_SUCCESS : types.UPDATE_EMAIL_FAILED,
  payload: result,
});

export const updateUser = (data: UpdateUserProps): Action => ({
  type: types.UPDATE_USER,
  payload: data,
});

export const updateUserResult = (result: any, isSuccess = true): Action => ({
  type: isSuccess ? types.UPDATE_USER_SUCCESS : types.UPDATE_USER_FAILED,
  payload: result,
});

export const deleteUser = (data: DeleteUserProps): Action => ({
  type: types.DELETE_USER,
  payload: data,
});

export const deleteUserResult = (result: any, isSuccess = true): Action => ({
  type: isSuccess ? types.DELETE_USER_SUCCESS : types.DELETE_USER_FAILED,
  payload: result,
});

export const registerUser = (data: RegisterUserProps): Action => ({
  type: types.REGISTER_USER,
  payload: data,
});

export const registerUserResult = (result: any, isSuccess = true): Action => ({
  type: isSuccess ? types.REGISTER_USER_SUCCESS : types.REGISTER_USER_FAILED,
  payload: result,
});

export const deleteUsers = (data: DeleteUsersProps): Action => ({
  type: types.DELETE_USERS,
  payload: data,
});

export const deleteUsersResult = (result: any, isSuccess = true): Action => ({
  type: isSuccess ? types.DELETE_USERS_SUCCESS : types.DELETE_USERS_FAILED,
  payload: result,
});
