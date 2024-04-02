'use client'

import { ButtonGroupProps } from 'antd/es/button'
import classNames from 'classnames'
interface ButtonProps {
  type?: "button" | "submit" | "reset" | undefined
  className?: string
  children: React.ReactNode
  icon?: React.ReactElement
  onClick?: VoidFunction
}

export default function Button({children, className, onClick, icon, type='button', ...rest}:ButtonProps) {
  return (
    <button type={type} className={classNames(className, icon ? 'flex items-center border-none' : undefined)} onClick={onClick} {...rest}>
      <div>
      {children}
      </div>
      <div>
        {icon}
      </div>
    </button>
  )
}