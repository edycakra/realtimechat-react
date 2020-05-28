import React from "react";

import onlineIcon from "../../icons/onlineIcon.png";

import "./TextContainer.css";

export default function TextContainer({ users }) {
  return (
    <div className="textContainer">
      <div>
        <h1>Realtime Chat App</h1>
        <h3>Open another browser and try to chat in the same room!</h3>
        <p>This app is made by ReactJS, ExpressJS, NodeJS & Socket.io</p>
      </div>
      {users ? (
        <div>
          <hr />
          <h1>{users.length} user(s) in this chat room:</h1>
          <div className="activeContainer">
            <h2>
              {users.map(({ name }) => (
                <div key={name} className="activeItem">
                  {name}
                  <img alt="Online Icon" src={onlineIcon} />
                </div>
              ))}
            </h2>
          </div>
        </div>
      ) : null}
    </div>
  );
}
