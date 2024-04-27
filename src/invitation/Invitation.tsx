import { Banner } from "banner/Banner";
import * as Image from "./we.png";

import './Invitation.css'

export const Invitation = () => {
  return (
    <div className="invitation-container">
      <Banner background="#B2CFB8">
        <div className="invitation-content">
        <img src={Image.default} alt="we" className="invitation-image" />
        <p className="invitation-title">
            Дорогой гость!
        </p>
        <p className="invitation-description">
            Рады пригласить Вас на наше торжество, которое состоится
        </p>
        <p className="invitation-date">
            8 июня
        </p>
        </div>
      </Banner>
    </div>
  );
};
