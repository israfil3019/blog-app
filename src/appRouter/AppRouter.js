import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Dashboard from "../pages/Dashboard";
import NewBlog from "../pages/NewBlog";
import About from "../pages/About";
import Details from "../pages/Details";
import Profile from "../pages/Profile";
import Login from "../pages/Login";
import PrivateRouter from "./PrivateRouter";
import MenuAppBar from "../components/Navbar";
import Register from "../pages/Register";

const AppRouter = () => {
  const [auth, setAuth] = useState(false);

  const AuthContainer = () => (
    <div>
      <PrivateRouter auth={auth} exact path="/details" component={Details} />
      <PrivateRouter auth={auth} exact path="/about" component={About} />
      <PrivateRouter auth={auth} exact path="/new-blog" component={NewBlog} />
      <PrivateRouter auth={auth} exact path="/profile" component={Profile} />
      {/* <PrivateRouter auth={auth} exact path="/" component={Dashboard} /> */}
    </div>
  );
  return (
    <div>
      <Router>
        <MenuAppBar />
        <Switch>
          <Route
            path="/login"
            component={() => <Login auth={auth} setAuth={setAuth} />}
          />
          <Route path="/register" component={Register} />
          <Route exact path="/" component={Dashboard} />
          <Route component={AuthContainer} />
        </Switch>
      </Router>
    </div>
  );
};

export default AppRouter;
