



function App() {
 
    
  const Bandas = ['Slipknot','Metallica','Exodus']

  const NBA = [{nome: 'Michael Jordan',ano: 1963},{nome: 'Kobe Bryant',ano: 1978}]

  return (  
    <>
    
    <ul>
     {Bandas.map((Banda) => <li key={Banda}>{Banda}</li>)}
</ul>

 <ul>
     {NBA.filter(({ano}) => ano >= 1970).map(({nome, ano}) => (
        <li key={nome}>
              {nome} , {ano}
        </li>


     )
     
     )}
 </ul>
    
    <p>sauhfdasf</p>





    </>
  );

}

 
 
 



export default App;
