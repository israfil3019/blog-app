import React, { useState } from "react";
import Navbar from "../components/Navbar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Dashboard from "../pages/Dashboard";
import NewBlog from "../pages/NewBlog";
import About from "../pages/About";
import Details from "../pages/Details";
import Profile from "../pages/Profile";
import Login from "../pages/Login";
import PrivateRouter from "./PrivateRouter";

const AppRouter = () => {
  const [auth, setAuth] = useState(true);

  const AuthContainer = () => (
    <div>
      <Navbar />
      <PrivateRouter auth={auth} exact path="/" component={Dashboard} />
      <PrivateRouter auth={auth} exact path="/details" component={Details} />
      <PrivateRouter auth={auth} exact path="/about" component={About} />
      <PrivateRouter auth={auth} exact path="/new-blog" component={NewBlog} />
      <PrivateRouter auth={auth} exact path="/profile" component={Profile} />
    </div>
  );
  return (
    <div>
      <Router>
        <Switch>
          <Route
            path="/login"
            exact
            component={() => <Login auth={auth} setAuth={setAuth} />}
          />
          <Route component={AuthContainer} />
        </Switch>
      </Router>
    </div>
  );
};

export default AppRouter;
