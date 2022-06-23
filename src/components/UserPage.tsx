import { FC, memo, useEffect } from "react";
import { connect } from "react-redux";
import { studentsFetch } from "../Actions/students";
import { user } from "../models/user";
import { studentSelector } from "../Selectors/student";
import { userSelector } from "../Selectors/user";
import { State } from "../Store";
import Button from "./Button";
import H3 from "./H3";
import UserCreator from "./UserCreator";

type UserPageProps = {
  userList: user[];
  getUsers: () => any;
  studentsList: any;
};

const UserPage: FC<UserPageProps> = ({ userList, getUsers, studentsList }) => {
  useEffect(() => {
    getUsers();
  }, []);

  return (
    <div className="bg-green-800 h-screen w-sceen">
      <div className="pl-10 pt-4 space-x-3">
        <UserCreator></UserCreator>
      </div>
      <div className="p-3">
        <h1 className="text-white text-2xl font-bold ">API Students List</h1>
        {studentsList.map((s: any) => (
          <H3 key={s.cell}>{s.name.last}</H3>
        ))}
      </div>

      <ul className="text-xl font-bold max-w-screen-md list-decimal p-5 pl-10 ">
        <h1 className="text-white text-2xl font-bold ">Users List</h1>
        {userList.map((e) => (
          <li
            className="bg-slate-400 text-white rounded-md mt-2 p-2"
            key={e.id}
          >
            {e.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

UserPage.defaultProps = {};

const mapDispatchToProps = {
  getUsers: studentsFetch,
};

const listMapper = (s: State) => {
  return { userList: userSelector(s), studentsList: studentSelector(s) };
};

export default connect(listMapper, mapDispatchToProps)(memo(UserPage));
