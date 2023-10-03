import React, { ReactNode } from "react";
import "./Button.scss";

type Props = {
  children: ReactNode;
  variant?: "yellow" | "red" | "green";
  onClick?: () => void;
};

const Button: React.FC<Props> = ({ children, variant, onClick }) => {
  return (
    <button
      onClick={onClick}
      className={`${variant ? "button--" + variant : ""} button`}
    >
      {children}
    </button>
  );
};

export default Button;
