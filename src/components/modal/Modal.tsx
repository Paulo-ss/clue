"use client";

import { FC, ReactNode } from "react";
import Backdrop from "../backdrop/Backdrop";

interface IProps {
  isOpened: boolean;
  onClose: () => void;
  children: ReactNode;
}

const Modal: FC<IProps> = ({ isOpened, onClose, children }) => {
  return (
    <Backdrop isOpened={isOpened} onClose={onClose}>
      <div className="bg-zinc-100 p-2 flex flex-col justify-center rounded-md shadow-md">
        {children}
      </div>
    </Backdrop>
  );
};

export default Modal;
