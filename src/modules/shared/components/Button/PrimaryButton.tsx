// create a component in typescript for a primary button

import React, { FC, ReactNode, ButtonHTMLAttributes } from "react";

interface PrimaryButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  className?: string;
}

export const PrimaryButton: FC<PrimaryButtonProps> = ({ children, className = '' }) => {
  return (
    <button className={`bg-crimson-pink hover:bg-crimson-pink-300 font-bold text-xl text-white rounded-lg py-4 px-8 ${className}`}>
      {children}
    </button>
  );
};
