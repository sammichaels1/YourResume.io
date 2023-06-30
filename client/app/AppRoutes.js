import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Route, Routes } from "react-router-dom";
import AuthForm from "../features/auth/AuthForm";
import Home from "../features/home/Home";
import About from "../about/about";
import { me } from "./store";

const AppRoutes = () => {
  const isLoggedIn = useSelector((state) => !!state.auth.me.id);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(me());
  }, [dispatch]);

  return (
    <div>
      <Routes>
        <Route exact path="/" element={<Home />} />
        {isLoggedIn ? (
          <>
            {/* <Route exact path="/home" element={<Home />} /> */}
            <Route exact path="/about" element={<About />} />
            {/* <Route exact path="import" element={<Import />} /> */}
            {/* <Route exact path="/copytext" element={<CopyText />} /> */}
            {/* <Route exact path="/Contact" element={<Contact />} /> */}
          </>
        ) : (
          <>
            <Route
              exact
              path="/"
              element={<AuthForm name="login" displayName="Login" />}
            />
            <Route
              exact
              path="/login"
              element={<AuthForm name="login" displayName="Login" />}
            />
            <Route
              exact
              path="/signup"
              element={<AuthForm name="signup" displayName="Sign Up" />}
            />

            {/* <Route exact path="/home" element={<Home />} /> */}
            <Route exact path="/about" element={<About />} />
            {/* <Route exact path="import" element={<Import />} /> */}
            {/* <Route exact path="/copytext" element={<CopyText />} /> */}
            {/* <Route exact path="/Contact" element={<Contact />} /> */}
          </>
        )}
      </Routes>
    </div>
  );
};

export default AppRoutes;
