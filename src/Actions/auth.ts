export const AUTH_LOGIN = "AUTH_LOGIN";
export const AUTH_SIGNUP = "AUTH_SIGNUP";
export const AUTH_LOGOUT = "AUTH_LOGOUT";
export const AUTH_LOGIN_SUCCESS = "AUTH_LOGIN_SUCCESS";
export const AUTH_SIGNUP_SUCCESS = "AUTH_SIGNUP_SUCCESS";
export const AUTH_LOGIN_LOADING = "AUTH_LOGIN_LOADING";
export const AUTH_SIGNUP_LOADING = "AUTH_SIGNUP_LOADING";
export const AUTH_LOGIN_FAILURE = "AUTH_LOGIN_FAILURE";
export const AUTH_SIGNUP_FAILURE = "AUTH_SIGNUP_FAILURE";
export const RESET_AUTH_TOAST_STATE = "RESET_AUTH_TOAST_STATE";
export const authLogin = (email: string, password: string) => {
  return { type: AUTH_LOGIN, payload: { email, password } };
};

export const authLoginLoading = (loading: boolean) => {
  return { type: AUTH_LOGIN_LOADING, payload: { loading } };
};

export const authLoginSuccess = (token: string) => {
  return { type: AUTH_LOGIN_SUCCESS, payload: { token } };
};

export const authLoginFailure = () => {
  return { type: AUTH_LOGIN_FAILURE };
};

export const authSignup = (name: string, email: string, password: string) => {
  return { type: AUTH_SIGNUP, payload: { name, email, password } };
};

export const authSignupLoading = (loading: boolean) => {
  return { type: AUTH_SIGNUP_LOADING, payload: { loading } };
};

export const authSignupSuccess = () => {
  return { type: AUTH_SIGNUP_SUCCESS };
};

export const authSignupFailure = () => {
  return { type: AUTH_SIGNUP_FAILURE };
};

export const authLogout = () => {
  return { type: AUTH_LOGOUT };
};

export const resetAuthToastState = () => {
  return { type: RESET_AUTH_TOAST_STATE };
};
