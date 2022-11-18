import React from 'react'
import Prodetail from './Prodetail';
import Title from './Title';


const Produto = () => {
    const produtos = [
        { nome: 'Notebook', propriedades: ['16gb ram', '512gb'] },
        { nome: 'Smartphone', propriedades: ['2gb ram', '128gb'] },
      ];

    
 
 
    return (
    <>
       <Title text="Produtos"/>
       {produtos.map(
        (produtos) => (
          <Prodetail key={produtos.nome} {...produtos}/>
        ) 


       )}
    </>
  )
}

export default Produto
