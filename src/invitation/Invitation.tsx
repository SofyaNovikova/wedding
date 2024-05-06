import { Banner } from "banner/Banner";
import * as Image from "./we.png";

import "./Invitation.css";
import { getUser } from "lib/get-user-id";
import { Guest } from "typings/types";
import classNames from "classnames";
import { Sex } from "constants/constants";

const getInvitationTitle = (user: Guest | null) => {
  if (user === null) {
    return "Дорогой гость!";
  }
  const { name, single, sex } = user;
  if (single === true) {
    return sex === Sex.female ? `Дорогая ${name}!` : `Дорогой ${name}!`;
  }
  return `Дорогие ${name}!`;
};

const getPronoun = (user: Guest | null) => {
  if (user === null) {
    return "тебя";
  }
  const { single } = user;
  if (single === true) {
    return "тебя";
  }
  return "вас";
};

const getSize = (user: Guest | null) => {
  if (user === null) {
    return "l";
  }
  const { name } = user;
  if (name.length > 30) {
    return "s";
  }
  if (name.length > 20) {
    return "m";
  }
  return "l";
};

export const Invitation = () => {
  const user = getUser();
  return (
    <div className="invitation-container">
      <Banner background="#B2CFB8">
        <div className="invitation-content">
          <img src={Image.default} alt="we" className="invitation-image" />
          <p className={classNames("invitation-title", getSize(user))}>
            {getInvitationTitle(user)}
          </p>
          <p className="invitation-description">
            Рады пригласить {getPronoun(user)} на наше торжество, которое
            состоится
          </p>
          <p className="invitation-date">8 июня</p>
        </div>
      </Banner>
    </div>
  );
};
