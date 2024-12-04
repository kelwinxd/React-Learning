import React, { useState } from 'react'
import Logo from './components/Logo'
import Form from './components/Form'
import List from './components/List'
import Item from './components/Item'
import './App.css'
import '../src/components/components.css'
import Footer from './components/Footer'


const initialItems = [
  {
    id:1,
    description:"Passports",
    quantity:2,
    packed:false
  },
  {
    id:2,
    description:"Passports",
    quantity:2,
    packed:false
  },

]

const App = () => {

  const [quant,useQuant] = useState<number>(5)
  const [value,setvalue] = useState<string>("")
  const [list,setList] = useState(initialItems)
  const [sort,setSort] = useState("input")
   
  function deleteItem(id:any){
       setList(i=> i.filter(i=> i.id !== id))
  }

  function updateItem(id:any){
            setList(i => i.map(it => it.id === id ? {...it,packed:!it.packed} : it))
  }


  // Sort
  let items = [] as {
    id: number;
    description: string;
    quantity: number;
    packed: boolean;
  }[];

  if(sort === "input") items = list
  else if(sort === "description") items = list.slice().sort((a,b) => a.description.localeCompare(b.description))
  else if(sort === "packed") items = list.slice().sort((a,b) => Number(a.packed) - Number(b.packed))

  return (
    <div>
      <Logo />
      <Form quant={quant} setQuant={useQuant} desc={value} setDesc={setvalue} list={list} setList={setList} />

      <List>
        <ul>
          {items.map((i) => (
            <Item item={i} key={i.id} onDelete={deleteItem} onUpdate={updateItem}/>

          ))}
        </ul>
      </List>

     

      <div className='sort'>
        <select value={sort} className='selectsort' onChange={e=> setSort(e.target.value)}>
          <option value="input">Sort by input</option>
          <option value="description">Sort by description</option>
          <option value="packed">Sort by Packed</option>
        </select>
        <button onClick={() => {setList([])}}>Clear List</button>
      </div>
      <Footer items={list}/>
    </div>
    
  )
}

export default App