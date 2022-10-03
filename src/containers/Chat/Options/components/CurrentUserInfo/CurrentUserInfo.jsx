import PropTypes from "prop-types";

import "./currentUserInfo.css";

const CurrentUserInfo = ({ currentUser, setSelectedFriend }) => {
  return (
    <div className="current-user-info" onClick={() => setSelectedFriend()}>
      <img src={currentUser?.picture} alt="current-user" />
      <p>{currentUser?.name}</p>
    </div>
  );
};

CurrentUserInfo.prototype = {
  currentUser: PropTypes.any,
  setSelectedFriend: PropTypes.func,
};

export default CurrentUserInfo;
