import { type } from '@testing-library/user-event/dist/type'

import React, { Children } from 'react'

interface LeftSide {
    children: React.ReactNode
}

const LeftAuth = ({
    children,
}: LeftSide) => {
  return (
    <div>
        {children}
    </div>
  )
}

export default LeftAuth