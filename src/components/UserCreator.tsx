import { ChangeEvent, FC, memo, useState } from "react";
import Button from "./Button";
import { connect } from "react-redux";
import { user } from "../models/user";
import { State } from "../Store";
import { userAddedAction } from "../Actions/user";


type UserCreateFormProps = {
  addUser: (payLoad: user) => void;
};

const UserCreateForm: FC<UserCreateFormProps> = ({
  addUser,
}) => {
  const [input, changeInput] = useState("");
  const [showUserCreateForm, updateUserCreateForm] = useState(true);


  const userAdd = (event: ChangeEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (input) {
      addUser({ id: input, name: input });
      updateUserCreateForm(!showUserCreateForm);
      changeInput("");
    }
  };

  const inputValue = (props: ChangeEvent<HTMLInputElement>) => {
    changeInput(props.target.value);
  };
  const toggleForm = () => {
    updateUserCreateForm(!showUserCreateForm);
    changeInput("");
  };
  return (
    <>
      {showUserCreateForm && (
        <div className="pl-10 ">
          <Button
            onClick={toggleForm}
            theme="third"
            input="+ Add a User"
          ></Button>
        </div>
      )}
      {!showUserCreateForm && (
        <div className="flex flex-col  p-5 border-2 max-w-screen-md space-y-4 rounded-md ">
          <form onSubmit={userAdd}>
            <div className="space-y-4">
              <h1 className="font-bold text-xl"> Create a User</h1>

              <input
                value={input}
                placeholder="Add User"
                onChange={inputValue}
                className="border-2 max-w-screen-md  p-2 rounded-md "
              ></input>
            </div>
            <div className="pt-4 flex space-x-2 ">
              <Button type="submit" input="Save"></Button>

              <Button
                onClick={toggleForm}
                input="Cancel"
                theme="fourth"
              ></Button>
            </div>
          </form>
        </div>
      )}
    </>
  );
};

UserCreateForm.defaultProps = {};


const userAddMapper = {
  addUser: userAddedAction,
};

export default connect(undefined, userAddMapper)(memo(UserCreateForm));
