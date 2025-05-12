import { put } from "redux-saga/effects";

import axios from "axios";
import { call } from "redux-saga/effects";
import {
  saveTodosAction,
  fetchTodosLoadingAction,
  fetchTodosErrorAction,
} from "../Actions/todo";
import { todo } from "../models/todo";

const baseUrl = "https://todo-app-server-1bez.onrender.com";

const getTodos = async () => {
  const response = await axios.get(`${baseUrl}/getTodos`, {
    headers: {
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
  });
  return response.data;
};

const addTodo = async (title: string) => {
  const response = await axios.post(
    `${baseUrl}/addTodo`,
    { title },
    {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    }
  );
  return response.data;
};

const markTodo = async (todo: todo) => {
  const response = await axios.put(
    `${baseUrl}/updateTodo`,
    { id: todo._id, done: !todo.done },
    {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    }
  );
  return response.data;
};

const deleteTodo = async (id: string) => {
  const response = await axios.delete(`${baseUrl}/deleteTodo`, {
    headers: {
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
    data: { id },
  });
  return response.data;
};

export function* getTodosSaga(): Generator<any, void, any> {
  try {
    yield put(fetchTodosLoadingAction());
    const todos = yield call(getTodos);
    if (todos) {
      yield put(saveTodosAction(todos));
    } else {
      throw "Failed to fetch todos";
    }
  } catch (error) {
    yield put(fetchTodosErrorAction("Failed to fetch todos"));
    console.warn(error);
  }
}

export function* addTodoSaga(action: any): Generator<any, void, any> {
  try {
    const response = yield call(addTodo, action.payload);
    if (response) {
      yield call(getTodosSaga);
    } else {
      throw new Error("Failed to add todo");
    }
  } catch (error) {
    console.warn(error);
  }
}

export function* markTodoSaga(action: any): Generator<any, void, any> {
  try {
    const response = yield call(markTodo, action.payload);
    if (response) {
      yield call(getTodosSaga);
    } else {
      throw new Error("Failed to mark todo");
    }
  } catch (error) {
    console.warn(error);
  }
}

export function* deleteTodoSaga(action: any): Generator<any, void, any> {
  try {
    const response = yield call(deleteTodo, action.payload);
    if (response) {
      yield call(getTodosSaga);
    } else {
      throw new Error("Failed to delete todo");
    }
  } catch (error) {
    console.warn(error);
  }
}
