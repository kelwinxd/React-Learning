import React from 'react'
import './Todo.css'

const Todo = () => {
  const [task, setTask] = React.useState("")
  const [items, setItems] = React.useState([])
 

 function addTask(event){
  
  
    setTask(event.target.value)
  


  
 }

 function toggleComplete(index){
       const updateItems = items.map((item,i) => {
        if(i === index){
          return {...item, complete: !item.complete}
        }

        return item
       })

       setItems(updateItems)
 }
  
 function renderTask(){

  if(task.trim() === ""){
    alert('you should write something')
  } else {
    setItems([...items,{task:task, complete:false}])
    setTask("")
  }
 
 }

 function removeTask(id){
  setItems(items.filter((_, index) => index != id))
 }
  
  return (
    <>
    <div className="btns">

    <form action="">
        <input type="text" name="" id="" onChange={addTask} value={task} />
    </form>

    <button onClick={renderTask}>Add Task</button>
    </div>
        
    <div className="render">
    <ul className='listtodo'>
      {items.map((item,index) => (
        <li key={index}>{item.task} <div className="btns2"><button onClick={() => toggleComplete(index)} className={item.complete ? 'green' : 'red'}>{item.complete ? 'complete' : 'todo'}</button> <button onClick={() => removeTask(index)}>Remover</button></div></li>
      ))}
    </ul>
    </div>
    </>

  )
}

export default Todo