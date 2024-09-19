import { RoleEnum } from "../common/general";

export type Action = {
  type: string;
  payload?: any;
};

type ErrorResponse = {
  message: string;
  name: string;
  response: {
    status: number;
    statusText: string;
    data: {
      errors: string[];
      success: boolean;
    };
  };
};

type PasswordResetErrorResponse = {
  message: string;
  name: string;
  response: {
    status: number;
    statusText: string;
    data: {
      errors: {
        password_confirmation: string[];
        password: string[];
        full_messages: string[];
      };
      success: boolean;
    };
  };
};

type CheckResetPasswordTokenErrorResponse = {
  message: string;
  name: string;
  response: {
    status: number;
    statusText: string;
    errors: string[];
  };
};

type LoginSuccessResponse = {
  status: number;
  statusText: string;
  data: {
    errors: string[];
    success: boolean;
    screen: string;
    user: {
      isActive: boolean;
      roles: string;
    };
    token: string;
  };
  headers: {
    "access-token": string;
    client: string;
    uid: string;
  };
};

type RegisterSuccessResponse = {
  status: number;
  statusText: string;
  data: {
    errors: string[];
    success: boolean;
    screen: string;
    user: {
      isActive: boolean;
      roles: string;
    };
  };
  headers: {
    "access-token": string;
    client: string;
    uid: string;
  };
};

type SuccessResponse = {
  status: number;
  statusText: string;
  data: {
    errors: string[];
    success: boolean;
    screen: string;
  };
  headers: {
    "access-token": string;
    client: string;
    uid: string;
  };
};

type GetUserSuccessResponse = {
  status: number;
  statusText: string;
  data: {
    errors: string[];
    success: boolean;
    screen: string;
    user: {
      name: string;
      email: string;
      password: string;
    };
    users: {
      name: string;
      email: string;
      password: string;
      isActive: boolean;
    }[];
  };
  headers: {
    "access-token": string;
    client: string;
    uid: string;
  };
};

type ChangePasswordResponse = {
  status: number;
  statusText: string;
  data: {
    errors: string[];
    success: boolean;
    screen: string;
    status: number;
    message: string;
  };
  headers: {
    "access-token": string;
    client: string;
    uid: string;
  };
};

export type ResponseResult = ErrorResponse & SuccessResponse;

export type ChangePasswordResult = ErrorResponse & ChangePasswordResponse;

export type PasswordResetResponseResult = PasswordResetErrorResponse &
  SuccessResponse;

export type CheckResetPasswordTokenResponseResult =
  CheckResetPasswordTokenErrorResponse & SuccessResponse;

export type LoginResponseResult = ErrorResponse & LoginSuccessResponse;

export type RegisterResponseResult = ErrorResponse & RegisterSuccessResponse;

export type GetUserResponseResult = ErrorResponse & GetUserSuccessResponse;

export type GetUserProps = {
  data: {
    id: string;
  };
};

export type GetUsersProps = {
  data: {
    offset: number;
    limit: number;
  };
};

export type UpdateUsernameProps = {
  data: {
    id: string;
    name: string;
  };
};

export type UpdateEmailProps = {
  data: {
    id: string;
    email: string;
  };
};

export type UpdateUserProps = {
  data: {
    id: string;
    email: string;
    name: string;
    isActive: boolean;
    roles: string;
  };
  onOpenChange: (open: boolean) => void;
  handleToast: () => void;
};

export type RegisterProps = {
  data: {
    name: string;
    email: string;
    password: string;
    confirmPassword: string;
  };
  setError: (fieldName: string, errorMessage: string) => void;
};

export type LoginProps = {
  data: {
    email: string;
    password: string;
  };
  setError: (error: any) => void;
};

export type AuthState = {
  loading: boolean;
  userInfo: any | undefined;
  authenticated: boolean;
  role: RoleEnum;
};

export type UserState = {
  loading: boolean;
  userInfo: any | undefined;
  users: any | undefined;
};

export type ForGotPasswordProps = {
  data: {
    email: string;
  };
  setError: (fieldName: string, errorMessage: string) => void;
  resetForm: () => void;
  setMessage: (type: string, message: string) => void;
};

export type ResetPasswordProps = {
  data: {
    password: string;
    confirmPassword: string;
    resetPasswordToken: string | null;
  };
  setError: (fieldName: string, errorMessage: string) => void;
  handleRedirectPage: (path: string) => void;
  setMessage: (type: string, message: string) => void;
};

export type SettingPasswordProps = {
  data: {
    password: string;
    confirmPassword: string;
    resetPasswordToken: string | null;
  };
  setError: (fieldName: string, errorMessage: string) => void;
  handleRedirectPage: (path: string) => void;
};

export type ChangePasswordProps = {
  data: {
    id: string;
    currentPassword: string;
    password: string;
    confirmPassword: string;
  };
  handleHidenPage: () => void;
  handleErrorCurrentPassword: (data: {status: number, message: string}) => void;
};

export type CheckResetPasswordTokenProps = {
  data: {
    resetPasswordToken: string | null;
  };
  handleRedirectPage: (path: string) => void;
  setMessage: (type: string, message: string) => void;
};
