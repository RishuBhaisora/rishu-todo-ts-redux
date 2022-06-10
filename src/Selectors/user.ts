import { values } from "lodash";
import { createSelector } from "reselect";
import { State } from "../Store";

export const userState = (s: State) => s.users;

export const userSelector = createSelector(userState, (users) =>
  values(users).filter((t) => t)
);
