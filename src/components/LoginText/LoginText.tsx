import React from 'react'
import './LoginText.css'

type LoginTextProps = {
    children: React.ReactNode
}

const LoginText = ({
    children,
}: LoginTextProps) => {
  return (
    <div className='login--text'>
      {
        <p>
          {children ? children : null}
        </p>
      }
    </div>
  )
}

export default LoginText