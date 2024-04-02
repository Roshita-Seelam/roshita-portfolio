'use client'

import classNames from 'classnames'
interface ButtonProps {
  type?: "button" | "submit" | "reset" | undefined
  className?: string
  children: React.ReactNode
  icon?: React.ReactElement
  onClick?: VoidFunction
}

export default function Button({children, className, onClick, icon, type='button'}:ButtonProps) {
  return (
    <button type={type} className={classNames(className, icon ? 'flex items-center border-none' : undefined)} onClick={onClick}>
      <div>
      {children}
      </div>
      <div>
        {icon}
      </div>
    </button>
  )
}