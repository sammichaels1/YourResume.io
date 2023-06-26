import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { logout } from "../../app/store";
import { movieQuery, navBarQueryCount } from "./NavbarSlice";

const Navbar = () => {
  const isLoggedIn = useSelector((state) => !!state.auth.me.id);

  return (
    <div>
      <nav className="nav">
        {isLoggedIn ? (
          <div className="container">
            <Link className="home-link" to="/">
            <div className="img">
              <img src="/vendeta.png"/>
            </div>
            </Link>
            <Link className="home-link" to="/">
              Home
            </Link>
                <Link to="/about">About</Link>
                <Link to="/import">Import</Link>
                <Link to="/copytext">Copy Text</Link>
                <Link to="/contact">Contact</Link>
            <button type="button" onClick={logoutAndRedirectHome}>
              Logout
            </button>
          </div>
        ) : (
          <div className="container">
            <Link className="team-link" to="/">
            <div className="img">
              <img className="logo" src="/vendeta.png"/>
            </div>
            </Link>
            <Link className="home-link" to="/">
              Home
            </Link>
                <Link to="/about">About</Link>
                <Link to="/import">Import</Link>
                <Link to="/copytext">Copy Text</Link>
                <Link to="/contact">Contact</Link>
            <Link className="links" to="/login">
              Login
            </Link>
            <Link className="links" to="/signup">
              Sign Up
            </Link>
          </div>
        )}
      </nav>
      <hr />
    </div>
  );
};
export default Navbar;
