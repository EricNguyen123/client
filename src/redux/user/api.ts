import api from "@/utils/api";
import { AxiosResponse } from "axios";

export const getUsersApi = (data: any): Promise<AxiosResponse> => {
  return api.get(`/users?offset=${data.offset}&limit=${data.limit}`);
};

export const getUserApi = (data: any): Promise<AxiosResponse> => {
  return api.get(`/users/account?id=${data.id}`);
};

export const updateUsernameApi = (data: any): Promise<AxiosResponse> => {
  return api.post(`/users/update/username?id=${data.id}`, {
    name: data.name,
  });
};

export const updateEmailApi = (data: any): Promise<AxiosResponse> => {
  return api.post(`/users/update/email?id=${data.id}`, {
    email: data.email,
  });
};

export const updateUserApi = (data: any): Promise<AxiosResponse> => {
  return api.post(`/users/update/user?id=${data.id}`, {
    email: data.email,
    name: data.name,
    roles: data.roles,
    isActive: data.isActive,
  });
};

export const deleteUserApi = (data: any): Promise<AxiosResponse> => {
  return api.delete(`/users/delete/user?id=${data.id}`);
};

export const deleteUsersApi = (data: any): Promise<AxiosResponse> => {
  return api.delete(`/users/delete/users`, {
    data: data
  });
};

export const registerUserApi = (data: any): Promise<AxiosResponse> => {
  return api.post(`/users/register/user`, {
    email: data.email,
    name: data.name,
    password: data.password,
    confirmPassword: data.confirmPassword,
  });
};
