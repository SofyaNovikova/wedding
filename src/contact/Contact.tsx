import { CSSProperties, FC, PropsWithChildren } from "react";
import * as SergeyImage from "./sergey.png";
import * as SonyaImage from "./sonya.png";

import "./Contact.css";

type Props = {
  backgroundColor: CSSProperties["backgroundColor"];
};

const Circle: FC<PropsWithChildren<Props>> = ({
  backgroundColor,
  children,
}) => (
  <div className="circle" style={{ backgroundColor }}>
    {children}
  </div>
);

export const Contact = () => {
  return (
    <div className="container">
      <p className="title">Свяжитесь с нами</p>
      <p className="text">
        В случае возникновения любых вопросов связывайтесь с нами по телефону, в
        вайбер или телеграм{" "}
      </p>
      <div className="contact">
        <Circle backgroundColor="#B7C2C3">
          <img className="sergey-photo photo" src={SergeyImage.default} alt="Sergey" />
        </Circle>
        <div className="info sergey-info">
          <p className="title">Сергей</p>
          <a className="phone" href="tel:+375297321253">+375-29-732-12-53</a>
        </div>
      </div>
      <div className="contact">
        <div className="info sonya-info">
          <p className="title">Sonya</p>
          <a className="phone" href="tel:+375293030547">+375-29-303-05-47</a>
        </div>
        <Circle backgroundColor="#E49E91">
          <img className="sonya-photo photo" src={SonyaImage.default} alt="Sonya" />
        </Circle>
      </div>
    </div>
  );
};
