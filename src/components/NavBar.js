import React from "react";
import { NavLink } from "react-router-dom";
import { Clock } from "./Clock";

export const NavBar = props => {
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
        <Clock />
      </div>
    </div>
  );
};
