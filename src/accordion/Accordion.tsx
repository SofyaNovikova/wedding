import {
  FC,
  PropsWithChildren,
  ReactNode,
  useLayoutEffect,
  useRef,
  useState,
} from "react";
import "./Accordion.css";
import classNames from "classnames";
import { Arrow } from "./Arrow";

type Props = {
  title: ReactNode;
};

export const Accordion: FC<PropsWithChildren<Props>> = ({
  title,
  children,
}) => {
  const [isOpen, setOpen] = useState(false);
  const [height, setHeight] = useState<number | null>(null);
  const contentRef = useRef<HTMLDivElement>();
  const onClick = () => {
    setOpen((open) => !open);
  };
  useLayoutEffect(() => {
    if (isOpen) {
      const newHeight = contentRef.current?.scrollHeight ?? null;
      setHeight(newHeight);
    } else {
      setHeight(null);
    }
  }, [isOpen]);
  return (
    <div
      className={classNames("accordion", {
        open: isOpen,
      })}
    >
      <div className="toggle" onClick={onClick}>
        {title}
        <div className="arrow">
          <Arrow />
        </div>
      </div>
      <div className="content" ref={contentRef} style={{ maxHeight: height }}>
        <div className="text">{children}</div>
      </div>
    </div>
  );
};
