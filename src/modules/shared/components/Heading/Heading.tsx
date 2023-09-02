import { FC, ReactNode } from "react";
import { HeadingEnum, headingSizeMap } from "./constants";

interface HeadingProps {
  as?: HeadingEnum;
  className?: string;
  children: ReactNode;
}

export const Heading: FC<HeadingProps> = ({
  as = HeadingEnum.H1,
  className = "",
  ...props
}) => {
  const As = as;
  const { size, margin } = headingSizeMap[as];

  return (
    <As className={`font-bold ${size} ${margin} ${className}`} {...props} />
  );
};
