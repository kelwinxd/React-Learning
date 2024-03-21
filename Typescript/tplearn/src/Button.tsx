import React from 'react'

type ButtonProps = {
    width?: string,
    onClick: () => void,
    children?:React.ReactNode
}

const Button = (props: ButtonProps) => {
  
    return (
   <button onClick={props.onClick} style={{width:props.width}}>
    {props.children}
   </button>
  )
}

export default Button