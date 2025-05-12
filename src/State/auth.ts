import {
  AUTH_LOGIN_SUCCESS,
  AUTH_LOGIN_FAILURE,
  AUTH_LOGOUT,
  AUTH_SIGNUP_SUCCESS,
  AUTH_SIGNUP_FAILURE,
  AUTH_SIGNUP_LOADING,
  RESET_AUTH_TOAST_STATE,
} from "../Actions/auth";

import { AUTH_LOGIN_LOADING } from "../Actions/auth";

// Auth state types
export interface AuthState {
  isLoginLoading: boolean;
  isLoginSuccess: boolean;
  isLoginFailure: boolean;
  isSignupLoading: boolean;
  isSignupSuccess: boolean;
  isSignupFailure: boolean;
  token: string | null;
}

// Initial auth state
export const initialAuthState: AuthState = {
  isLoginLoading: false,
  isLoginSuccess: false,
  isLoginFailure: false,
  isSignupLoading: false,
  isSignupSuccess: false,
  isSignupFailure: false,
  token: localStorage.getItem("token"),
};

// Auth reducer
export const authReducer = (
  state = initialAuthState,
  action: any
): AuthState => {
  switch (action.type) {
    case AUTH_LOGIN_LOADING:
      return {
        ...state,
        isLoginLoading: true,
        isLoginSuccess: false,
        isLoginFailure: false,
      };
    case AUTH_LOGIN_SUCCESS:
      return {
        ...state,
        isLoginLoading: false,
        isLoginSuccess: true,
        isLoginFailure: false,
        token: action.payload.token,
      };
    case AUTH_LOGIN_FAILURE:
      return {
        ...state,
        isLoginLoading: false,
        isLoginSuccess: false,
        token: null,
        isLoginFailure: true,
      };

    case AUTH_SIGNUP_LOADING:
      return {
        ...state,
        isSignupLoading: true,
        isSignupSuccess: false,
        isSignupFailure: false,
      };

    case AUTH_SIGNUP_SUCCESS:
      return {
        ...state,
        isSignupLoading: false,
        isSignupSuccess: true,
        isSignupFailure: false,
      };

    case AUTH_SIGNUP_FAILURE:
      return {
        ...state,
        isSignupLoading: false,
        isSignupSuccess: false,
        isSignupFailure: true,
      };

    case RESET_AUTH_TOAST_STATE:
      return {
        ...state,
        isLoginSuccess: false,
        isLoginFailure: false,
        isSignupSuccess: false,
        isSignupFailure: false,
      };

    case AUTH_LOGOUT:
      localStorage.removeItem("token");
      return {
        ...state,
        isLoginLoading: false,
        isLoginSuccess: false,
        isLoginFailure: false,
        isSignupLoading: false,
        isSignupSuccess: false,
        isSignupFailure: false,
        token: null,
      };
    default:
      return state;
  }
};
