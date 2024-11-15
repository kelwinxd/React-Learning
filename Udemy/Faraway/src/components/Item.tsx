import { useRef } from "react"
import './components.css'

const Item = ({item, onDelete, onUpdate}:any) => {

  const checkbox = useRef<HTMLInputElement>(null)
 
  function handleCheck(){
    if(checkbox.current){
      checkbox.current.checked = !checkbox.current.checked
      onUpdate(item.id)
    }
  }
  return (
    <div key={item.id} className="item" onClick={handleCheck}>
        <input ref={checkbox} type="checkbox" value={item.packed} onChange={() => onUpdate(item.id)} className="check"/>
        <li style={item.packed ? {textDecoration:"line-through"} : {}}>{item.quantity} <span>{item.description}</span></li>
        <button onClick={() => onDelete(item.id)}>X</button>
    </div>
  )
}

export default Item