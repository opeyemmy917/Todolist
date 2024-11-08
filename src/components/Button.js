import React from 'react'

export const Button = (props) => {
  return (
    <button className={props.color} onClick={props.clickMe}>{props.name}</button>
  )
}
export default Button