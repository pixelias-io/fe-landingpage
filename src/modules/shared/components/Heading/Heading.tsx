import { FC, ReactNode } from "react";

const headingSizeMap = {
  h1: {
    size: "xl:text-6xl text-4xl",
    margin: "mb-12"
  },
  h2: {
    size: "text-4xl",
    margin: "mb-12"
  },
  h3: {
    size: "text-2xl",
    margin: "mb-8"
  },
  h4: {
    size: "text-xl",
    margin: "mb-4"
  },
  h5: {
    size: "text-l",
    margin: "mb-4"
  },
  h6: {
    size: "text-m",
    margin: "mb-2"
  },
};

interface HeadingProps {
  as?: keyof typeof headingSizeMap;
  className?: string;
  children: ReactNode;
}

export const Heading: FC<HeadingProps> = ({
  as = "h1",
  className = "",
  ...props
}) => {
  const As = as;
  const { size, margin } = headingSizeMap[as];

  return (
    <As className={`font-bold ${size} ${margin} ${className}`} {...props} />
  );
};
