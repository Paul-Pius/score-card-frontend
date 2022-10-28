import React from 'react'
import './EmptyOrPopulatedStack.css'
// import logo from '../../components/images/logo.png';

interface IStack {
    topContent?: React.ReactNode
    bottomContent?: React.ReactNode
}

const EmptyOrPopulatedStack = ({topContent, bottomContent}: IStack) => {
  return (
    <div className='emptyStack'>
        {topContent ? topContent : null}
        {bottomContent ? bottomContent : null}   
    </div>
  )
}

export default EmptyOrPopulatedStack;