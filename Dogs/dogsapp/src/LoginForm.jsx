import React from 'react';
import { Link } from 'react-router-dom';
import { TOKEN_POST } from './api';

const LoginForm = () => {
  const [username, setUsername] = React.useState('');
  const [password, setPassword] = React.useState('');

 async function handleSubmit(event) {
    event.preventDefault();

    const {url,options} = TOKEN_POST({
      username:username,
      password:password
    })
   const res = await fetch(url, options)
   const json = await res.json()
   console.log(json)
  }

  return (
    <section>
      <h1>Login</h1>
      <form action="" onSubmit={handleSubmit}>
        <input
          type="text"
          value={username}
          onChange={({ target }) => setUsername(target.value)}
        />
        <input
          type="text"
          value={password}
          onChange={({ target }) => setPassword(target.value)}
        />
        <button>Entrar</button>
      </form>
      <Link to="/login/criar">Cadastro</Link>
    </section>
  );
};

export default LoginForm;
