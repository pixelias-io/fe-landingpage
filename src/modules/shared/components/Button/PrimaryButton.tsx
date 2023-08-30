// create a component in typescript for a primary button

import React, { FC, ReactNode, ButtonHTMLAttributes } from "react";
import { BaseButton } from "./BaseButton";

interface PrimaryButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  className?: string;
}

export const PrimaryButton: FC<PrimaryButtonProps> = ({
  children,
  className = "",
  ...props
}) => {
  return (
    <BaseButton
      className={`bg-crimson-pink hover:bg-crimson-pink-300 text-white ${className}`}
      {...props}
    >
      {children}
    </BaseButton>
  );
};
