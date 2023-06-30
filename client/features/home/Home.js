import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link, useParams } from "react-router-dom";

const Home = (props) => {
  const username = useSelector((state) => state.auth.me?.username);
  const dispatch = useDispatch();

  return (
    <div>
      <div className="home-text-container">
        <div>
        <h1 className="your-resume">Your Resume.io</h1>
        </div>
        <div>
        <h3 className="home-text">Discover True North, Unleash Your Resume's</h3>
        <h3 className="home-text">Hidden Potential</h3>
        </div>
        <button className="update-btn" type="button">Update Now!</button>
      </div>
      <div className="img">
        <img className="resume-logo" src="/resumelogo.png" />
      </div>
      <div className="home-container">
        <div className="genres"></div>
        <div className="App">{/* <MovieTrailer></MovieTrailer> */}</div>
      </div>
    </div>
  );
};

export default Home;
