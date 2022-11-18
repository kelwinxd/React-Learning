



function App() {
 
 //Data e ano
  function ano(){
  const data = new Date().getFullYear()
  return data
 }
 // Estilo 
const estilo = {
  color:'blue',
  fontSize:'10rem'
}

const mario = {
  cliente: 'Mario',
  idade: 27,
  compras: [
    {nome:'notebook', preco: '800'}
  ]
}
  

  return (  
    <>
    
    
    
    
    <label htmlFor="nome"> </label>
    <input type="text" id="input"></input>
    <input type="submit" value="enviar"></input>
     <div id="div"></div>
     <p>sauigdiusagd</p>

     <p style = {estilo}>{ano()}</p>






    </>
  );

}

 
 
 



export default App;
