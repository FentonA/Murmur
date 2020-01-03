import React from "react";
// import //image from image foolder

const UserAside = ({ profileImageUrl, username, following, followers, favorites, photos }) => (
  <aside className="col-sm-2">
    <div className="panel panel-default">
      <div className="panel-body">
        <img
          src={profileImageUrl}
          alt={username}
          width="200"
          height="200"
          className="img-thumbnail"
        />
      </div>
    </div>
  </aside>
);

export default UserAside;