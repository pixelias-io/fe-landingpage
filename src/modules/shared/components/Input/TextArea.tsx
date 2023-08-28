import {
  ReactNode,
  DetailedHTMLProps,
  TextareaHTMLAttributes,
  FC,
} from "react";
import { InputGroup } from "./InputGroup";
import { Label } from "./Label";

type TextareaInputProps = {
  children: ReactNode;
} & DetailedHTMLProps<
  TextareaHTMLAttributes<HTMLTextAreaElement>,
  HTMLTextAreaElement
>;

export const TextArea: FC<TextareaInputProps> = ({ children, ...props }) => {
  const className = "border border-midnight-blue/20 text-midnight-blue/50 rounded-md p-4 min-h-[200px]";

  return (
    <InputGroup>
      <Label htmlFor={props.name}>{children}</Label>
      <textarea aria-label={props.name} className={className} {...props} />
    </InputGroup>
  );
};
