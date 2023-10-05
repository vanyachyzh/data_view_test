import React, { ReactNode } from "react";
import "./Button.scss";

type Props = {
  children: ReactNode;
  variant?: "yellow" | "red" | "green";
  onClick?: () => void;
  size?: "small" | "large";
};

const Button: React.FC<Props> = ({ children, variant, onClick, size }) => {
  return (
    <button
      onClick={onClick}
      className={`${variant ? "button--" + variant : ""} ${
        size ? "button--" + size : ""
      } button`}
    >
      {children}
    </button>
  );
};

export default Button;
