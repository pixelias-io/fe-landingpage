
import React, { FC, ReactNode, ButtonHTMLAttributes } from "react";

interface BaseButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  className?: string;
}

export const BaseButton: FC<BaseButtonProps> = ({ children, className = '', ...props }) => {
  return (
    <button className={`font-bold text-xl rounded-lg py-4 px-8 ${className}`} {...props}>
      {children}
    </button>
  );
};
