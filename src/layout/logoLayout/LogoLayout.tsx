import React from 'react'
import './LogoLayout.css'

interface LogoLayoutProps {
    leftLogo?: React.ReactNode,
    rightLogo?: React.ReactNode,
}

const LogoLayout = ({
    leftLogo,
    rightLogo,
}: LogoLayoutProps) => {
  return (
    <div className='logo--layout--wrapper'>
        <div className='logo--left--content'>
            {leftLogo ? leftLogo : null}
        </div>

        <div className='logo--right--content'>
            {rightLogo ? rightLogo : null}
        </div>
    </div>
  )
}

export default LogoLayout