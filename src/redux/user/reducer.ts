import { Action, UserState } from "../../types/redux";
import types from "./type";

const initState = {
  loading: false,
  userInfo: undefined,
  users: undefined,
};

export default function usersReducer(
  state: UserState = initState,
  action: Action
) {
  switch (action.type) {
    case types.GET_USERS: {
      return { ...state, loading: true };
    }

    case types.GET_USERS_SUCCESS: {
      return {
        ...state,
        loading: false,
        users: action.payload.data || undefined,
      };
    }

    case types.GET_USERS_FAILED: {
      return { ...state, loading: false };
    }

    case types.GET_USER: {
      return { ...state, loading: true };
    }

    case types.GET_USER_SUCCESS: {
      return {
        ...state,
        loading: false,
        userInfo: action.payload.data || undefined,
      };
    }

    case types.GET_USER_FAILED: {
      return { ...state, loading: false };
    }

    case types.UPDATE_USERNAME: {
      return { ...state, loading: true };
    }

    case types.UPDATE_USERNAME_SUCCESS: {
      return {
        ...state,
        loading: false,
        userInfo: action.payload.data || undefined,
      };
    }

    case types.UPDATE_USERNAME_FAILED: {
      return { ...state, loading: false };
    }

    case types.UPDATE_EMAIL: {
      return { ...state, loading: true };
    }

    case types.UPDATE_EMAIL_SUCCESS: {
      return {
        ...state,
        loading: false,
        userInfo: action.payload.data || undefined,
      };
    }

    case types.UPDATE_EMAIL_FAILED: {
      return { ...state, loading: false };
    }

    case types.UPDATE_USER: {
      return { ...state, loading: true };
    }

    case types.UPDATE_USER_SUCCESS: {
      return {
        ...state,
        loading: false,
        userInfo: action.payload.data || undefined,
        users: state.users.map((i: any) => {
          if (i.id === action.payload.data.id) {
            return {
              id: action.payload.data.id,
              name: action.payload.data.name,
              email: action.payload.data.email,
              roles: action.payload.data.roles,
              isActive: action.payload.data.isActive,
            }
          }
          return i
          }) || undefined,
      };
    }

    case types.UPDATE_USER_FAILED: {
      return { ...state, loading: false };
    }

    default:
      return state;
  }
}
