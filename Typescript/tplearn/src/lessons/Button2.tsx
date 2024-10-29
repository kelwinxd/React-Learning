import React from 'react'

type btnProps = React.ComponentProps<"button"> & {
  count: Number,
  setCount: React.Dispatch<React.SetStateAction<number>>

  
}

const Button2 = ({children,count,setCount} : btnProps) => {
 
 
  return (
    <button onClick={() => setCount((i) => i + 1)}>{`${children} ${count}`}</button>
  )
}

export default Button2