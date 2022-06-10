import { FC, memo } from "react";
import { connect } from "react-redux";
import { user } from "../models/user";
import { userSelector } from "../Selectors/user";
import { State } from "../Store";
import UserCreator from "./UserCreator";

type UserPageProps = {
  userList: user[];
};

const UserPage: FC<UserPageProps> = ({ userList }) => {
  return (
    <div className="bg-green-800 h-screen w-sceen">
      <div className="pl-10 pt-4">
        <UserCreator></UserCreator>
      </div>
      <ul className="text-xl font-bold  list-outside p-5 pl-10 ">
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

const listMapper = (s: State) => {
  return { userList: userSelector(s) };
};

export default connect(listMapper)(memo(UserPage));
