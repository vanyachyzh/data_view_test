import React, { ReactNode } from "react";
import "./Button.scss";

type Props = {
  children: ReactNode;
  isDangerous?: boolean;
  onClick?: () => void;
};

const Button: React.FC<Props> = ({ children, isDangerous, onClick }) => {
  return (
    <button
      onClick={onClick}
      className={isDangerous ? "button button--dangerous" : "button"}
    >
      {children}
    </button>
  );
};

export default Button;
