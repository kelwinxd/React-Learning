import React from 'react'
import UseFetch from './UseFetch'

type Produto = {
    id: string;
    nome: string;
    descricao: string;
    quantidade: number;
    preco: number;
    internacional: boolean;
  };

const AppFetch = () => {
  const prod = UseFetch<Produto[]>("https://data.origamid.dev/produtos/")


  return (
    <div>AppFetch</div>
  )
}

export default AppFetch