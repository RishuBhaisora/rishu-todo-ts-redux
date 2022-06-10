import { createSelector } from "reselect";
import { State } from "../Store";

export const userState = (s: State) => s.users;

export const userSelector = createSelector(userState, (users) =>
  Object.keys(users)
    .map((user) => users[user])
    .filter((t) => t)
);
