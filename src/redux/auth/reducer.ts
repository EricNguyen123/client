import { Action, AuthState } from "../../types/redux";
import types from "./type";
import { RoleEnum } from "../../common/general";

const initState = {
  loading: false,
  userInfo: undefined,
  authenticated: false,
  role: RoleEnum.CUSTOM,
  registered: false,
};

export default function authReducer(
  state: AuthState = initState,
  action: Action
) {
  switch (action.type) {
    case types.REGISTER: {
      return { ...state, loading: true };
    }

    case types.REGISTER_SUCCESS: {
      return {
        ...state,
        loading: false,
        userInfo: action.payload.data?.user || undefined,
        registered: true,
      };
    }

    case types.REGISTER_FAILED: {
      return { ...state, loading: false };
    }

    case types.LOGIN: {
      return { ...state, loading: true };
    }

    case types.LOGIN_SUCCESS: {
      return {
        ...state,
        loading: false,
        userInfo: action.payload.data?.user || undefined,
        role: action.payload.role,
        authenticated: true,
      };
    }

    case types.LOGIN_FAILED: {
      return { ...state, loading: false };
    }

    case types.LOGIN_WITH_GOOGLE: {
      return { ...state, loading: true };
    }

    case types.LOGIN_WITH_GOOGLE_SUCCESS: {
      return {
        ...state,
        loading: false,
        userInfo: action.payload.data?.user || undefined,
        role: action.payload.role,
        authenticated: true,
      };
    }

    case types.LOGIN_WITH_GOOGLE_FAILED: {
      return { ...state, loading: false };
    }

    case types.LOGOUT_SUCCESS: {
      return initState;
    }

    case types.FORGOT_PASSWORD: {
      return { ...state, loading: true };
    }

    case types.FORGOT_PASSWORD_SUCCESS: {
      return {
        ...state,
        loading: false,
      };
    }

    case types.FORGOT_PASSWORD_FAILED: {
      return {
        ...state,
        loading: false,
      };
    }

    case types.RESET_PASSWORD: {
      return {
        ...state,
        loading: true,
      };
    }

    case types.RESET_PASSWORD_SUCCESS: {
      return {
        ...state,
        loading: false,
      };
    }

    case types.RESET_PASSWORD_FAILED: {
      return {
        ...state,
        loading: false,
      };
    }

    case types.SETTING_PASSWORD: {
      return {
        ...state,
        loading: true,
      };
    }

    case types.SETTING_PASSWORD_SUCCESS: {
      return {
        ...state,
        loading: false,
      };
    }

    case types.SETTING_PASSWORD_FAILED: {
      return {
        ...state,
        loading: false,
      };
    }

    case types.CHANGE_PASSWORD: {
      return { ...state, loading: true };
    }

    case types.CHANGE_PASSWORD_SUCCESS: {
      return {
        ...state,
        loading: false,
      };
    }

    case types.CHANGE_PASSWORD_FAILED: {
      return {
        ...state,
        loading: false,
      };
    }

    default:
      return state;
  }
}
