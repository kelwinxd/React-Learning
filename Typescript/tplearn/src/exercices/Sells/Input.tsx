import React from 'react'

type inputProps = React.ComponentProps<"input"> & {
    label:string,
    setState:React.Dispatch<React.SetStateAction<string>>
}


const Input = ({label,setState, ...props}:inputProps) => {



  return (
   <>
   <div className="input-date">
   <label htmlFor="" style={{display:"block"}}>{label}</label>
   <input type="date" name="inicio" id="" onChange={({currentTarget}) => setState(currentTarget.value)} {...props} />

   </div>
   </>
  )
}

export default Input