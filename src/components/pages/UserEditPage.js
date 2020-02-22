import React from "react";

import { User } from "../../api/user";

export const UserEditPage = props => {
  const updateUser = event => {
    event.preventDefault();
    const { currentTarget: formNode } = event;
    const fd = new FormData(formNode);

    User.update(fd)
      .then(() => {
        props.history.push("/");
        if (typeof props.onUserUpdate === "function") {
          props.onUserUpdate();
        }
      })
      .catch(err => {
        console.err("Error: ", err);
      });
  };
  return (
    <>
      <h1 className="ui header">Edit User</h1>
      {props.currentUser && (
        <>
          <div className="ui card">
            <div className="image">
              <img src={`${props.currentUser.avatar.url || undefined}`} />
            </div>
            <div className="content">
              <a className="header">{props.currentUser.full_name}</a>
              <div className="meta">
                <span className="date">Joined in 2013</span>
              </div>
              <div className="description">
                Kristy is an art director living in New York.
              </div>
            </div>
            <div className="extra content">
              <a>
                <i className="user icon"></i>
                22 Friends
              </a>
            </div>
          </div>
        </>
      )}
      <form onSubmit={updateUser}>
        <label>Edit Avatar</label>
        <input type="file" name="avatar" />
        <button className="ui blue button" type="submit">
          Save Changes
        </button>
      </form>
    </>
  );
};
