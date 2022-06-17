import { user } from "../models/user";

export const USER_ADDED = "USER_ACTIONS";

export const userAddedAction = (payLoad:user) => {
  return { type: USER_ADDED, payload: payLoad };
};
