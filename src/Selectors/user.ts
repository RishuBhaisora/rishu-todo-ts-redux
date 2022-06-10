import { State } from "../Store";

export const userSelector = (s: State) =>
 Object.keys(s.users)
    .map((t) => s.users[t])
    .filter((t) => t);
    
