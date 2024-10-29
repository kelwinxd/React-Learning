import React from 'react'
type checkProps = {
label: string
}
const Checkbox = ({label}:checkProps) => {
const [value,setValue] = React.useState(false)
/*
--Uso Tradicional
const handleChange: React.ChangeEventHandler
<HTMLInputElement>
= (event) => {
setValue(event.currentTarget.checked)
}

*/
return (
<div>
   <label htmlFor="" style={{backgroundColor:value ? "red" : "green"}}>{label}</label>
   <input type="checkbox" name="" id="" checked={value} onChange=
      {({currentTarget}) => setValue(currentTarget.checked)}/>
{/* 
--Uso com Inferência
Se a função for pequena você pode simplesmente coloca-la dentro do elemento, que o typescript automaticamente irá inferir
*/ }
</div>
)
}


export default Checkbox
// Peguei o valor do handlechange passando o mouse sobre o onchange