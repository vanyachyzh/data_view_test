import React, { ReactNode } from "react";
import "./Modal.scss";

type Props = {
  children: ReactNode;
  footer: ReactNode;
  open: boolean;
};

const Modal: React.FC<Props> = ({ footer, children, open }) => {
  if (!open) {
    return null;
  }

  return (
    <div className="modal">
      <div className="modal__body">{children}</div>
      <div className="modal__footer">{footer}</div>
    </div>
  );
};

export default Modal;
