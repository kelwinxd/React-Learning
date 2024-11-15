import React from 'react'

type ListItem = {
  id: number;
  description: string;
  quantity: number;
  packed: boolean;
};


type formProps = {
  quant: number,
  setQuant: React.Dispatch<React.SetStateAction<number>>,
  desc:string,
  setDesc: React.Dispatch<React.SetStateAction<string>>,
  list:any
  setList:React.Dispatch<React.SetStateAction<ListItem[]>>,
}


const Form = ({quant,setQuant, desc, setDesc,list,setList}: formProps) => {




function handleSubmit(e:any):void{
    e.preventDefault()
    const newItem = {
      id: Date.now(),
      description: desc, 
      quantity: quant,    
      packed: false
  };
    console.log(newItem)
     setList([...list,newItem])
    
}

  return (
    <form className='form-container' onSubmit={handleSubmit}>
        <label htmlFor="">What do you need for trip?</label>
        <select className='selectform' value={quant}  onChange={(e) => setQuant(Number(e.target.value))}>
          {Array.from({length:20},(_,i) => i + 1).map((num) => (
            <option value={num} key={num}>{num}</option>
          ))}
        </select>
        <input type="text" name="" id="" value={desc} onChange={(e) => setDesc(e.target.value)}/>
        <input type="submit" value="Enviar" />
    </form>
  )
}

export default Form