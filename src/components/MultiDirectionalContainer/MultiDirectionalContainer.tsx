import React, { ReactNode, useRef, useState } from "react";
import IPosition from "../../types/Position";
import {
  DownArrowIcon,
  NextArrowIcon,
  PrevArrowIcon,
  UpArrowIcon,
} from "../Icons";
import "./MultiDirectionalContainer.scss";

type Props = {
  children: ReactNode;
  position: IPosition;
  setPosition: (position: React.SetStateAction<IPosition>) => void;
};

const MultiDirectionalContainer: React.FC<Props> = ({
  position,
  setPosition,
  children,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const moveChildren = (x: number, y: number) => {
    setPosition((prev) => ({ ...prev, x, y }));
  };

  //   useEffect(() => {
  //     if (containerRef.current) {
  //       const containerWidth = containerRef.current.offsetWidth;
  //       const containerHeight = containerRef.current.offsetHeight;
  //       setPosition((prev) => ({
  //         ...prev,
  //         x: containerWidth / 2,
  //         y: containerHeight / 2,
  //       }));
  //     }
  //   }, []);

  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true);
    const { clientX, clientY } = e;
    setPosition((prev) => ({ ...prev, x: clientX, y: clientY }));
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return;

    const { clientX, clientY } = e;
    setPosition((prev) => ({ ...prev, x: clientX, y: clientY }));
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  return (
    <div className="multi-container" ref={containerRef}>
      <div
        className="multi-container__children"
        style={{
          top: position.y,
          left: position.x,
          transform: `scale(${position.z}%) translate(-50%, -50%)`,
        }}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
      >
        {children}
      </div>
      <button
        className="multi-container__button--prev multi-container__button"
        onClick={() => moveChildren(position.x - 10, position.y)}
      >
        <PrevArrowIcon />
      </button>
      <button
        className="multi-container__button--next multi-container__button"
        onClick={() => moveChildren(position.x + 10, position.y)}
      >
        <NextArrowIcon />
      </button>
      <button
        className="multi-container__button--up multi-container__button"
        onClick={() => moveChildren(position.x, position.y - 10)}
      >
        <UpArrowIcon />
      </button>
      <button
        className="multi-container__button--down multi-container__button"
        onClick={() => moveChildren(position.x, position.y + 10)}
      >
        <DownArrowIcon />
      </button>
    </div>
  );
};

export default MultiDirectionalContainer;
