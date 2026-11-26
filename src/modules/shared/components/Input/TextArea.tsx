import { ReactNode, DetailedHTMLProps, TextareaHTMLAttributes, FC, useId } from 'react'
import { InputGroup } from './InputGroup'
import { Label } from './Label'

type TextareaInputProps = {
  children: ReactNode
} & DetailedHTMLProps<TextareaHTMLAttributes<HTMLTextAreaElement>, HTMLTextAreaElement>

export const TextArea: FC<TextareaInputProps> = ({ children, ...props }) => {
  const generatedId = useId()
  const fieldId = props.id ?? generatedId
  const className = 'border border-midnight-blue/20 text-midnight-blue/50 rounded-md p-4 min-h-[200px]'

  return (
    <InputGroup>
      <Label htmlFor={fieldId}>{children}</Label>
      <textarea
        className={className}
        {...props}
        id={fieldId}
      />
    </InputGroup>
  )
}
