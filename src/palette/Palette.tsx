import { CSSProperties, FC } from "react";

import "./Palette.css";

type Props = {
  color: CSSProperties["color"];
};

const Block: FC<Props> = ({ color }) => (
  <div className="palette-block" style={{ backgroundColor: color }} />
);

const palette = ["#FEC08F", "#F6B4B4", "#F9E6A5", "#B2CFB8"];

export const Palette = () => {
  return (
    <div className="container">
      <p className="title">Дресс код</p>
      <p className="text">
        В случае хорошей погоды праздник будет проходить под открытым небом.
        Рекомендуем вам учитывать это при выборе костюма. Вам необязательно придерживаться выбранной палитры: главное, чтобы вам было комфортно
      </p>
      <p className="text">
        Также на площадке будут зонтики и пледы, если погода нарушит наши планы
      </p>
      <div className="palette">
        {palette.map((color) => (
          <Block color={color} />
        ))}
      </div>
    </div>
  );
};
