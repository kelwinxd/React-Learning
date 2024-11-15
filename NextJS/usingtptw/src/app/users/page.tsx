import React, { ReactNode } from 'react'
import Link from 'next/link'
import getAlluser from '../../../lib/getAlluser'

export default async function UsersPage(){
  const userdata: Promise<User[]> = getAlluser()

  const users = await userdata
  return (
    <section>
         {users.map((i) => (
          <p key={i.id}>
            <Link href={`users/${i.id}`}>{i.name}</Link>
          </p>
         ))}
    </section>
  )
}

