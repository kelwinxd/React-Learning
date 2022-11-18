


function App() {
 

  window.addEventListener('scroll', Scrollh)

  function Scrollh(event){
    console.log(event)
  }

  return (  
    <>
    <div style={{height:'300vh'}}>
     <section style={{backgroundColor:'blue', textAlign:'center'}}>
     
      <button onClick={(event) => console.log(event.target.innerText)}>Comprar</button>

     </section>

    
     </div>
   
    





    </>
  );

}

 
 
 



export default App;
