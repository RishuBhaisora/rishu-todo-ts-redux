import { values } from "lodash";
import { State } from "../Store";

export const studentSelector=(s:State)=>values(s.students)
