import React from 'react'
import Friend from './Friend'
import AddFriend from './AddFriend'

const Friendlist = ({item}) => {

    const [open,setOpen] = React.useState(false)

  return (
    <div className='list'>
        {item.map((i) => (
            <Friend info={i} />
        ))}
          
         <button className='btn-addf' onClick={() => setOpen((a) => !a)}>{open ? "X" : "Add Friend"}</button> 

        {open && <AddFriend />}

    </div>
  )
}

export default Friendlist