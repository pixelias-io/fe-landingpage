import {
  DetailedHTMLProps,
  FC,
  InputHTMLAttributes,
  ReactNode,
} from "react";
import { InputGroup } from "./InputGroup";
import { Label } from "./Label";

type InputProps = {
  children: ReactNode;
} & DetailedHTMLProps<
  InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
>

export const Input: FC<InputProps> = ({ children, ...props }) => {
  const className = "border border-midnight-blue/20 text-midnight-blue/50 rounded-md p-4";

  return (
    <InputGroup>
      <Label htmlFor={props.name}>{children}</Label>
      <input className={className} {...props} />
    </InputGroup>
  );
};
