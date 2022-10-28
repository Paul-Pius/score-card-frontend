import { type } from '@testing-library/user-event/dist/type'

import React, { Children } from 'react'

interface RightSide {
    children: React.ReactNode
}

const RightAuth = ({
    children,
}: RightSide) => {
  return (
    <div>
        {children}
    </div>
  )
}

export default RightAuth