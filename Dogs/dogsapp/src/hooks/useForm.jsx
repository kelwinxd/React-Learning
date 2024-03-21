import React from 'react'

const types = {
  email: {
    regex: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
    message:"Invalid Email",
  }
}



const useForm = (type) => {
  const [value, setValue] = React.useState('')
  const [error, setError] = React.useState(null)


  function onChange({target}){
    if(error)validade(target.value)
    setValue(target.value)
  }

  function validade(value){
    if(type === false)return true
    if(value.length === 0){
            setError('Empty field!')
            return false
    } else if(types[type] && !types[type].regex.test(value)){
      setError(types[type].message)
      return false
    } else {
      setError(null)
      return true
    }
  }



  return {
   value,
   setValue,
   onChange,
   validade:() => validade(value),
   onBlur: () => validade(value),
   error
  }
}

export default useForm