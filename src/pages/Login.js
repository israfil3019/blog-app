import React from "react";
import { useHistory } from "react-router-dom";

const Login = ({ setAuth, auth }) => {
  let history = useHistory();

  const handleSubmit = (event) => {
    event.preventDefault();
    setAuth(!auth);
    history.push("/");
  };
  return (
    <div>
      <form action="" onSubmit={handleSubmit}>
        <input type="text" name="UserName" id="" />
        <input type="password" name="password" id="" />
        <input type="submit" value="Login" />
      </form>
    </div>
  );
};

export default Login;
