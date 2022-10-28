import React from 'react'
import './AuthLayout.css'

interface AuthLayoutProps {
    leftContent?: React.ReactNode,
    rightContent?: React.ReactNode,
}

const AuthLayout = ({
    leftContent,
    rightContent,
}: AuthLayoutProps) => {
  return (
    <div className='auth--layout--wrapper'>
      <div className='auth--left--content'>
        {leftContent ? leftContent : null}
      </div>
        
      <div className='auth--right--content'>
        {rightContent ? rightContent : null}
      </div>
    </div>
  )
}

export default AuthLayout