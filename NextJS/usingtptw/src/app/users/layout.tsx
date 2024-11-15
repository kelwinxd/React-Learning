import React, {ReactNode} from 'react'

const UserDetail = ({children}: {children:ReactNode}) => {
  return (
    <div>
        <h1>Users</h1>
        {children}
    </div>
  )
}

export default UserDetail