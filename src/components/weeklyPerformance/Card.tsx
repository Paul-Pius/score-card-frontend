import React from 'react'   
import { ScoreCardBody } from "../../styling/css"
type CardProps = {
 children: any
}
// padding: 2rem 2.5rem;
const Card = (props: CardProps) => {
 return (
  <ScoreCardBody>
   {props.children}
  </ScoreCardBody>
 )
} 
export default Card