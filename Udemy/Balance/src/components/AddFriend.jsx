import React from 'react'

const AddFriend = () => {
  return (
    <div>
        <form action="" className='form'>
           <div className="name-input">
            <label htmlFor="">Friend Name</label>
            <input type="text" />
           </div>
           <div className="image-input">
            <label htmlFor=""> Image Url</label>
            <input type="text" />
           </div>
           <button>Add</button>
        </form>

     
    </div>
  )
}

export default AddFriend