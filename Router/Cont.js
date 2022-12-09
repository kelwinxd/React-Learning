import React from 'react'

const Cont = () => {
  
   const [form, setForm] = React.useState({
    name:'',
    email:'',

   })

function Hsub(event){
event.preventDefault()
console.log(event)
}

function Hchange({target}){
   const {id, value} = target;
   console.log(id,value)
   setForm({...form, [id]:value})
}
  
    return (
    <>
    <div style={{backgroundColor:'Green'}}>
     <h2>Contact Us</h2>

     <form onSubmit={Hsub}>
      <label htmlFor='name'>Name</label>
       <input type="text" value={form.name} id="name" onChange={Hchange}/>
        <label htmlFor='email'>Email</label>
       <input type="email" value={form.email} id="email" onChange={Hchange}/>
       <button>Send</button>
     </form>
     <p>{form.email}</p>
    </div>
    </>
  )
}

export default Cont
