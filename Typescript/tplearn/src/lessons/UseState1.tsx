import React, { SetStateAction } from 'react'

type useProps = React.ComponentProps<"button"> & {
    increase: React.Dispatch<SetStateAction<number>>
}

const UseState1 = ({increase, children} : useProps) => {

  return (
    <button onClick={() => increase((n) => n + 1)}>
         {children}
    </button>
  )
}

export default UseState1