import getUser from "../../../../lib/getUser"

type Params = {
    params: {
        userId: string
    }
}

export default async function UserPage({params: {userId}} : Params){

   const userData: Promise<User> = getUser(userId)
   const user = await userData

    return <>
      <div>
        <p>{user.name}</p>
        <p>{user.email}</p>
        <p>Company:{user.company.name}</p>
      </div>
    </>
}