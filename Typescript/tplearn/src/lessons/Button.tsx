import React from 'react'



type ButtonProps = React.ComponentProps<"button"> & {
    width?:string,
    font?:string,
}

const Button = ({width, font, children, ...props}: ButtonProps) => {
  
    return (
   <button style={{width:width,fontSize:font}} {...props}>
    {children}
   </button>
  )
}

export default Button