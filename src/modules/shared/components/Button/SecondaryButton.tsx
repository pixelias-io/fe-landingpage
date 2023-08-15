// create a component in typescript for a primary button

import React, { FC, ReactNode, ButtonHTMLAttributes } from "react";

interface SecondaryButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  className?: string;
}

export const SecondaryButton: FC<SecondaryButtonProps> = ({ children, className = '', ...props }) => {
  return (
    <button className={`border border-crimson-pink hover:bg-crimson-pink-100 font-bold text-xl text-crimson-pink rounded-lg py-4 px-8 ${className}`} {...props}>
      {children}
    </button>
  );
};
