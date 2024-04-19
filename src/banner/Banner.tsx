import { CSSProperties, FC, PropsWithChildren } from "react";
import "./Banner.css";

type Props = {
  background: CSSProperties["background"];
};

export const Banner: FC<PropsWithChildren<Props>> = ({
  background,
  children,
}) => {
  return (
      <div className="banner" style={{ background }}>
        {children}
      </div>
  );
};
