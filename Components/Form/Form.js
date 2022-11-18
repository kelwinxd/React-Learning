import React from 'react';
import Input from './Input';
import Button from './Button';

const Form = () => {
  return (
    <form>
       <label>Escreva seu nome</label>
        <Input />
        <p>
        <label>Sua senha</label>
        <Input />
            
            </p>
        <Button />

    </form>
  )
}

export default Form