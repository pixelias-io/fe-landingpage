// create a component in typescript for a primary button

import React, { FC, ReactNode, ButtonHTMLAttributes } from "react";
import { BaseButton } from "./BaseButton";

interface SecondaryButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  className?: string;
}

export const SecondaryButton: FC<SecondaryButtonProps> = ({
  children,
  className = "",
  ...props
}) => {
  return (
    <BaseButton
      className={`border border-crimson-pink hover:bg-crimson-pink-100 text-crimson-pink ${className}`}
      {...props}
    >
      {children}
    </BaseButton>
  );
};
