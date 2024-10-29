import React from 'react'

type inputProps = React.ComponentProps<"input"> & {
    label:string
}


const Input = ({label, id, ...props}:inputProps) => {
  return (
    <div style={{display:'flex',flexDirection:'column',width:'500px',gap:'5px',marginBottom:'20px'}}>
        <label htmlFor={id}>{label}</label>
       <input type="text" name={id} id={id} {...props} style={{width:'100%'}} />
    </div>
  )
}

export default Input