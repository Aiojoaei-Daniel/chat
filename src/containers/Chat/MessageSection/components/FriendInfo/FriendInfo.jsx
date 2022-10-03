import React from "react";
import PropTypes from "prop-types";

import { phone, video, more } from "../../../../../assets";

import "./friendInfo.css";

const FriendInfo = ({ selectedFriend }) => {
  return (
    <div className="selected-friend-info">
      <div className="info">
        <img src={selectedFriend?.picture} alt="" />
        <p>{selectedFriend?.name}</p>
      </div>
      <div className="contact">
        <img src={phone} alt="phone-pic" />
        <img src={video} alt="video-camera-pic" />
        <img src={more} alt="more-button-pic" />
      </div>
    </div>
  );
};

FriendInfo.prototype = {
  selectedFriend: PropTypes.any,
};

export default FriendInfo;
