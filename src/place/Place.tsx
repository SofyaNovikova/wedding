import { Banner } from "banner/Banner";
import * as TreeImage from "./tree.png";
import * as InstaIcon from "./instagram.png";
import * as MapIcon from "./map.png";
import "./Place.css";

export const Place = () => {

  return (
    <div className="place-container">
      <p className="title">Место проведения</p>
      <Banner background="#F9E6A5">
        <div className="place-content">
          <p className="text">
            Праздник состоится на территории усадьбы "Ганка". Мы свяжемся с вами
            заранее, чтобы договориться о трансфере к месту проведения.
          </p>
          <div className="links">
            <a className="link" href="https://www.instagram.com/usadbaganka/" target="blank" rel="noreferrer">
                <img className="icon instagram" src={InstaIcon.default} alt="insta" />
            </a>
            <a className="link" href="https://yandex.by/maps/-/CDVoj-9a" target="_blank" rel="noreferrer">
                <img className="icon map" src={MapIcon.default} alt="map" />
            </a>
          </div>
        </div>
      </Banner>
      <img src={TreeImage.default} alt="oak" className="tree-image" />
    </div>
  );
};
