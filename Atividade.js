



function Atividade() {
 
 const gabi = {
  cliente: 'gabi',
  idade: '24',
  compras: [{nome:'notebook',preco: 'R$ 2500'},{nome:'guitarra', preco: 'R$ 1500'}],
  ativa: false,
 }
 
 
 const dados = gabi;
 const total = dados.compras.map(item => Number(item.preco.replace("R$"," "))).reduce((a, b) => a + b)

 /*function msg(){
  const mensagem = document.getElementById('msg')
  if(total > 10000){
    mensagem.innerText = "Voce está gastando muito"
  } else {
    mensagem.innerText = "Voce está em dia"
  }
 }*/
/* total > 1000 && 'Frase' Também serve        */
  return (  
    <>
     
    <p>Nome: {dados.cliente}</p>
    <p>Total: {total}</p>
    {total > 10000 ? 'voce está gastanto muito' : ' '}
  
    <p>Situação:<span style={{color: dados.ativa ? 'green' : 'red'}}>{dados.ativa ? 'ativa' : 'inativa'}</span></p>


    
    





    </>
  );

}

 
 
 



export default Atividade;
