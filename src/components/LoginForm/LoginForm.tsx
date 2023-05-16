import { useState } from "react";
import LoginFormStyled from "./LoginFormStyled";

interface UserCredentials {
  username: string;
  password: string;
}

const LoginForm = (): JSX.Element => {
  const initialUserCredentials: UserCredentials = {
    username: "",
    password: "",
  };
  const [userCredentials, setUserCredentials] = useState(
    initialUserCredentials
  );

  const onChangeData = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUserCredentials({
      ...userCredentials,
      [event.target.id]: event.target.value,
    });
  };
  return (
    <LoginFormStyled>
      <form className="form" autoComplete="off">
        <h2>Login</h2>
        <div className="form__control">
          <label className="form__label" htmlFor="username">
            Username:{" "}
          </label>
          <input
            onChange={onChangeData}
            className="form__input"
            type="text"
            id="username"
            required
            value={userCredentials.username}
          />
        </div>
        <div className="form__control">
          <label className="form__label" htmlFor="password">
            Password:{" "}
          </label>
          <input
            onChange={onChangeData}
            className="form__input"
            type="password"
            id="password"
            required
            value={userCredentials.password}
          />
        </div>
        <button className="form__button" type="submit">
          Login
        </button>
      </form>
    </LoginFormStyled>
  );
};

export default LoginForm;
