import axios from "axios";
import { call, put } from "redux-saga/effects";
import {
  authLoginFailure,
  authLoginLoading,
  authLoginSuccess,
  authSignupFailure,
  authSignupLoading,
  authSignupSuccess,
} from "../Actions/auth";
const baseUrl = "https://todo-app-server-1bez.onrender.com";

const authLogin = async (email: string, password: string) => {
  const response = await axios.post(`${baseUrl}/signin`, {
    email,
    password,
  });
  return response.data;
};

const authSignup = async (name: string, email: string, password: string) => {
  const response = await axios.post(`${baseUrl}/signup`, {
    name,
    email,
    password,
  });
  return response.data;
};

export function* authLoginSaga(action: any): Generator<any, void, any> {
  try {
    yield put(authLoginLoading(true));
    const response = yield call(
      authLogin,
      action.payload.email,
      action.payload.password
    );
    if (response) {
      localStorage.setItem("token", response.token);
      yield put(authLoginSuccess(response.token));
    } else {
      throw new Error("Failed to login");
    }
  } catch (error) {
    yield put(authLoginFailure());
    console.warn(error);
  }
}

export function* authSignupSaga(action: any): Generator<any, void, any> {
  try {
    yield put(authSignupLoading(true));
    const response = yield call(
      authSignup,
      action.payload.name,
      action.payload.email,
      action.payload.password
    );

    if (response) {
      yield put(authSignupSuccess());
    } else {
      throw new Error("Failed to signup");
    }
  } catch (error) {
    yield put(authSignupFailure());
    console.warn(error);
  }
}
