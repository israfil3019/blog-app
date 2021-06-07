import React from "react";
import { useHistory } from "react-router-dom";

const Register = ({ setAuth, auth }) => {
  let history = useHistory();

  const handleSubmit = (event) => {
    event.preventDefault();
    setAuth(!auth);
    history.push("/login");
  };
  return (
    <div>
      <form action="" onSubmit={handleSubmit}>
        <input type="text" name="UserName" id="" />
        <input type="email" name="email" id="" />
        <input type="password" name="password" id="" />
        <input type="submit" value="Login" />
      </form>
    </div>
  );
};

export default Register;
