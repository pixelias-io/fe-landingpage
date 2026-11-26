import { DetailedHTMLProps, FC, InputHTMLAttributes, ReactNode, useId } from 'react'
import { InputGroup } from './InputGroup'
import { Label } from './Label'

type InputProps = {
  children: ReactNode
} & DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>

export const Input: FC<InputProps> = ({ children, ...props }) => {
  const generatedId = useId()
  const fieldId = props.id ?? generatedId
  const className = 'border border-midnight-blue/20 text-midnight-blue/50 rounded-md p-4'

  return (
    <InputGroup>
      <Label htmlFor={fieldId}>{children}</Label>
      <input
        className={className}
        {...props}
        id={fieldId}
      />
    </InputGroup>
  )
}
