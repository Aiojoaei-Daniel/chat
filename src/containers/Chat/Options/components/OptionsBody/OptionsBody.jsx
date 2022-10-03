import React from "react";

import { OPTIONS } from "../copy";
import {
  chat,
  contact,
  favorite,
  info,
  plus,
  setting,
  trash,
} from "../../../../../assets";

import "./optionsBody.css";

const OptionsBody = () => {
  return (
    <div className="options">
      <p>
        <img
          src={plus}
          style={{ width: "27px", height: "27px", objectFit: "cover" }}
          alt="plus-pic"
        />
        {OPTIONS.NEW_CONVERSATION}
      </p>
      <p>
        <img
          src={chat}
          style={{ width: "20px", height: "20px", objectFit: "cover" }}
          alt="chat-pic"
        />
        {OPTIONS.CHAT}
      </p>
      <p>
        <img
          src={contact}
          style={{ width: "18px", height: "18px", objectFit: "cover" }}
          alt="contact-pic"
        />
        {OPTIONS.CONTACTS}
      </p>
      <p>
        <img
          src={trash}
          style={{ width: "25px", height: "25px", objectFit: "cover" }}
          alt="trash-pic"
        />
        {OPTIONS.DELETED}
      </p>
      <p>
        <img
          src={favorite}
          style={{ width: "25px", height: "25px", objectFit: "cover" }}
          alt="favorite-pic"
        />
        {OPTIONS.FAVORITE}
      </p>
      <p>
        <img
          src={setting}
          style={{ width: "20px", height: "20px", objectFit: "cover" }}
          alt="setting-pic"
        />
        {OPTIONS.SETTING}
      </p>
      <p>
        <img
          src={info}
          style={{ width: "20px", height: "20px", objectFit: "cover" }}
          alt="info-pic"
        />
        {OPTIONS.ABOUT_US}
      </p>
    </div>
  );
};

export default OptionsBody;
