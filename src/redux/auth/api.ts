import api from "@/utils/api";
import Axios, { AxiosResponse } from "axios";

export const registerApi = (data: any): Promise<AxiosResponse> => {
  Axios.defaults.baseURL = process.env.NEXT_PUBLIC_API_ENDPOINT;
  return Axios.post("/auth/register", {
    name: data.name,
    email: data.email,
    password: data.password,
    confirmPassword: data.confirmPassword,
  });
};

export const loginApi = (data: any): Promise<AxiosResponse> => {
  Axios.defaults.baseURL = process.env.NEXT_PUBLIC_API_ENDPOINT;
  return Axios.post("/auth/login", {
    email: data.email,
    password: data.password,
  });
};

export const loginWithGoogleApi = (data: any): Promise<AxiosResponse> => {
  Axios.defaults.baseURL = process.env.NEXT_PUBLIC_API_ENDPOINT;
  return Axios.post("/auth/callback/login", {
    email: data.email,
  });
};

export const forgotPasswordApi = (data: any): Promise<AxiosResponse> => {
  return Axios.post("/auth/password", {
    email: data.email,
    redirect_url: data.redirectUrl,
  });
};

export const resetPasswordApi = (data: any): Promise<AxiosResponse> => {
  return Axios.patch("/auth/password", {
    password: data.password,
    password_confirmation: data.confirmPassword,
    reset_password_token: data.resetPasswordToken,
  });
};

export const checkResetPasswordTokenApi = (
  data: any
): Promise<AxiosResponse> => {
  return Axios.get(
    `/auth/password/edit?reset_password_token=${data.resetPasswordToken}&redirect_url=""`
  );
};

export const settingPasswordApi = (data: any): Promise<AxiosResponse> => {
  return Axios.patch("/auth/password", {
    password: data.password,
    password_confirmation: data.confirmPassword,
    reset_password_token: data.resetPasswordToken,
  });
};

export const logoutApi = (data: any): Promise<AxiosResponse> => {
  return api.post("/auth/logout", {
    token: data.token,
  });
};

export const changePasswordApi = (data: any): Promise<AxiosResponse> => {
  return api.post("/auth/update/password", {
    id: data.id,
    currentPassword: data.currentPassword,
    password: data.password,
    confirmPassword: data.confirmPassword,
  });
};
