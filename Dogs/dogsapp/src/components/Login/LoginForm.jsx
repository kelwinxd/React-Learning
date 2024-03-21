import React from 'react'
import Input from '../Forms/Input'
import Button from '../Forms/Button'
import useForm from '../../hooks/useForm'
import styles from './LoginForm.module.css'
import { TOKEN_POST } from '../../api'

const LoginForm = () => {

  const user = useForm()
  const password = useForm()

  console.log(user.value)

  async function handleSubmit(event) {
    event.preventDefault();
      
    //if(user.validade() & password.validade())
    const {url, options} = TOKEN_POST({
      user: user.value,
      password: password.value,


    })


    const response = await fetch(url,options)
    const json = await response.json()
    window.localStorage.setItem('token', json.token)

    console.log(json)
      
  }

  return (
    <div className={styles.container}>
        <form  onSubmit={handleSubmit}>
          
          <Input type="text" label="Username" name="username" {...user} />
          <Input type="password" label="Password" name="password" {...password}/>
          
          <Button >Register</Button>
          
        </form>
      
    </div>
  )
}

export default LoginForm