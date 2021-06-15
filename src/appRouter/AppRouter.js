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
  const dummyArray = [
    {
      banner:
        "https://www.ilgisel.com/wp-content/uploads/2019/08/html-dersleri.jpg",
      title: "HTML",
      date: "",
      author: "betulkaplan{@gmail.com",
    },
    {
      banner: "https://miro.medium.com/max/3600/1*6ahbWjp_g9hqhaTDSJOL1Q.png",
      title: "JavaScript",
      date: "",
      author: "betulkaplan{@gmail.com",
    },
    {
      banner:
        "https://res.cloudinary.com/practicaldev/image/fetch/s--zPAa0uAq--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://thepracticaldev.s3.amazonaws.com/i/elytski1o23ybosxmors.jpg",
      title: "CSS",
      date: "",
      author: "betulkaplan{@gmail.com",
    },
    {
      banner: "https://hackernoon.com/hn-images/1*HSisLuifMO6KbLfPOKtLow.jpeg",
      title: "React",
      date: "",
      author: "betulkaplan{@gmail.com",
    },
    {
      banner: "",
      title: "Angular",
      date: "",
      author: "betulkaplan{@gmail.com",
    },
    {
      banner: "",
      title: "Vue.js",
      date: "",
      author: "betulkaplan{@gmail.com",
    },
    {
      banner: "",
      title: "Semantic UI",
      date: "",
      author: "",
    },
    {
      banner: "",
      title: "Material UI",
      date: "",
      author: "",
    },
    {
      banner: "",
      title: "Firebase",
      date: "",
      author: "",
    },
  ];

  const AuthContainer = () => (
    <div>
      <PrivateRouter auth={auth} path="/details" component={Details} />
      <PrivateRouter auth={auth} path="/about" component={About} />
      <PrivateRouter auth={auth} path="/new-blog" component={NewBlog} />
      <PrivateRouter auth={auth} path="/profile" component={Profile} />
    </div>
  );
  return (
    <div>
      <Router>
        <MenuAppBar />
        <Switch>
          <Route
            exact
            path="/login"
            component={() => <Login auth={auth} setAuth={setAuth} />}
          />
          <Route>
            <Dashboard post={dummyArray} />
          </Route>
          <Route path="/register" component={Register} />
          <Route component={AuthContainer} />
        </Switch>
      </Router>
    </div>
  );
};

export default AppRouter;
