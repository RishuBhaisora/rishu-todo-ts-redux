import { createSelector } from 'reselect';
import { State } from "../Store";

// Basic selectors
export const getAuthState = (state: State) => state.authState;

// Login selectors
export const isLoginLoading = createSelector(
  getAuthState,
  (authState) => authState.isLoginLoading
);
export const isLoginSuccess = createSelector(
  getAuthState,
  (authState) => authState.isLoginSuccess
);
export const isLoginFailure = createSelector(
  getAuthState,
  (authState) => authState.isLoginFailure
);

// Signup selectors
export const isSignupLoading = createSelector(
  getAuthState,
  (authState) => authState.isSignupLoading
);
export const isSignupSuccess = createSelector(
  getAuthState,
  (authState) => authState.isSignupSuccess
);
export const isSignupFailure = createSelector(
  getAuthState,
  (authState) => authState.isSignupFailure
);

// Authentication selectors
export const tokenSelector = createSelector(
  getAuthState,
  (authState) => authState.token
);
