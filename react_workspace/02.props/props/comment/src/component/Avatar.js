import React from "react";

Avatar.propTypes = {};

function Avatar(props) {
  return (
    <div>
      <img
        className="Avatar"
        src={props.author.avatarUrl}
        alt={props.author.name}
      />
    </div>
  );
}

export default Avatar;
