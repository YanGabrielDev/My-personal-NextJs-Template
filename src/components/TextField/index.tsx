import { InputHTMLAttributes } from 'react'
import {twMerge} from 'tailwind-merge'
export interface TextFieldProps extends InputHTMLAttributes<HTMLInputElement>{
  className: string
}
export const TextField = ({className, ...props}: TextFieldProps) => {
  return(
      <input {...props}  data-testid="textField" className={twMerge("p-2 rounded border-gray-600 border-2 outline-primary-700", className)}/>
  )
}