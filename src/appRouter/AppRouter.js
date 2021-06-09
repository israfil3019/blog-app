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
      <MenuAppBar />
      <PrivateRouter auth={auth} exact path="/" component={Dashboard} />
      <PrivateRouter auth={auth} path="/details" component={Details} />
      <PrivateRouter auth={auth} path="/about" component={About} />
      <PrivateRouter auth={auth} path="/new-blog" component={NewBlog} />
      <PrivateRouter auth={auth} path="/profile" component={Profile} />
    </div>
  );
  return (
    <div>
      <Router>
        <Switch>
          {/* <Route exact path="/" component={Dashboard} /> */}
          <Route
            path="/login"
            component={() => <Login auth={auth} setAuth={setAuth} />}
          />

          <Route path="/register" component={Register} />
          <Route component={AuthContainer} />
        </Switch>
      </Router>
    </div>
  );
};

export default AppRouter;
