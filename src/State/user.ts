import { Reducer } from "redux";
import { USER_ADDED } from "../Actions/user";
import { user } from "../models/user";

type userStateType = {
  [id: string]: user;
};
export const initialUserState: userStateType = {};

export const userReducer: Reducer<userStateType> = (
  userState = initialUserState,
  action
) => {
  switch (action.type) {
    case USER_ADDED: {
      const newUser = {
        ...userState,
        ...userState,
        [action.payload.id]: action.payload,
      };
      return newUser;
    }
    default: {
      return userState;
    }
  }
};
