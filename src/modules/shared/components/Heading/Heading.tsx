import { FC, ReactNode } from "react";
import { HeadingEnum, HeadingSizeUnion, headingSizeMap } from "./constants";

interface HeadingProps {
  as?: HeadingSizeUnion;
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
