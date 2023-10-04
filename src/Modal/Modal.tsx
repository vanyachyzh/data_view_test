import React, { ReactNode } from "react";
import "./Modal.scss";

type Props = {
  children: ReactNode;
  footer: ReactNode;
};

const Modal: React.FC<Props> = ({ footer, children }) => {
  return (
    <div className="modal">
      {children}
      <div className="modal__footer">{footer}</div>
    </div>
  );
};

export default Modal;
