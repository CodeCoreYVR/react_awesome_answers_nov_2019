import React from "react";
import { NavLink } from "react-router-dom";

export const NavBar = ({ currentUser }) => {
  return (
    <div className="ui secondary pointing menu">
      <NavLink exact to="/" className="item">
        Welcome
      </NavLink>
      <NavLink exact to="/questions" className="item">
        Questions
      </NavLink>
      <NavLink exact to="/questions/new" className="item">
        Ask
      </NavLink>
      <div className="right menu">
        {!currentUser && (
          <NavLink exact to="/sign_in" className="ui inverted orange button">
            Sign In
          </NavLink>
        )}
        {currentUser && (
          <div className="item">Hello {currentUser.full_name}</div>
        )}
      </div>
    </div>
  );
};
