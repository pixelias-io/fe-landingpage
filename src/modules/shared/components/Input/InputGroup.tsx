import { FC, ReactNode } from "react";

export const InputGroup: FC<{ children: ReactNode }> = ({ children }) => (
  <div className="flex flex-col">{children}</div>
);
