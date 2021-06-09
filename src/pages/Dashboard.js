import React from "react";
import { Link } from "react-router-dom";
import BlogCard from "../components/BlogCard";

const Dashboard = () => {
  return (
    <div>
      <h2>Dashboard</h2>
      <BlogCard />
      <Link to="/new-blog">new</Link>
    </div>
  );
};

export default Dashboard;
