"use client";

import { FC, MouseEvent, ReactNode } from "react";

interface IProps {
  children: ReactNode;
  isOpened: boolean;
  onClose: () => void;
}

const Backdrop: FC<IProps> = ({ children, isOpened, onClose }) => {
  const handleClose = (e: MouseEvent) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  if (!isOpened) {
    return null;
  }

  return (
    <div
      className="fixed inset-0 flex flex-col justify-center items-center w-screen h-screen bg-zinc-800 bg-opacity-90 z-40"
      onClick={handleClose}
    >
      {children}
    </div>
  );
};

export default Backdrop;
