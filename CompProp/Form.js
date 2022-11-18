import React from 'react';
import Button from './Button';
import Input from './Input';

const Form = () => {
  return (
   <form>
     <Input id="email" label="email" required style={{fontWeight: "bold"}} />
     <Input id="senha" label="senha" type="password" />


   </form>
  )
}

export default Form
