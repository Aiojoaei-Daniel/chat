import React from "react";
import { USERS_LIST } from "../../copy";

import "./noUserSelected.css";

const NoUserSelected = () => {
  return (
    <div className="no-user-selected">
      <p>{USERS_LIST.SIGN_IN}</p>
      <p>{USERS_LIST.NO_USERS_MESSAGE}</p>
    </div>
  );
};

export default NoUserSelected;
