
 const produtos = [
  {
    id:1,
    nome:'Play 5',
    preco:'R$ 2000',
    cores: ['#29d8d5','#ff00ff']
  },
  {
    id:2,
    nome:'PC Gamer',
    preco:'R$ 4000',
    cores: ['#ffff00','#990b99']
  }

]



function App() {
 
  const dado = produtos.filter(({preco}) => Number(preco.replace('R$',' ')) > 2500,  )

    



  return (  
    <>
    
     <section>
      {dado.map(({id,nome,preco,cores}) => 
      <div key={id}>
        <h1>{nome}</h1>
        <p>{preco}</p>
        <ul>{cores.map((cor) => (
          <li style={{backgroundColor: cor}}  key={cor}>
            {cor}
          </li>
        ))}</ul>
      </div>
      
      )}

     </section>
    

   
    





    </>
  );

}

 
 
 



export default App;
