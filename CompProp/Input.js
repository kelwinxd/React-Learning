import React from 'react'

const Input = ({label, id, ...remainder}) => {
  return (
    <>
    <label htmlFor={id}>{label}</label>
    <input id={id} type="text" {...remainder}/>


    </>
  )
}

export default Input
