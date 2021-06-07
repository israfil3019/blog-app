import React from "react";

const Navbar = () => {
  return (
    <div>
      <nav>
        <a href="/">Dashboard</a>
        <a href="/details">Details</a>
        <a href="/about">About</a>
        <a href="/new-blog">New</a>
        <a href="/profile">Profile</a>
        <a href="/login">Logout</a>
      </nav>
    </div>
  );
};

export default Navbar;
