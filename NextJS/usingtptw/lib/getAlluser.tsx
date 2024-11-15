export default async function getAlluser(){
    const res = await fetch('https://jsonplaceholder.typicode.com/users')
    if(!res.ok) throw new Error('failed error bitch')

    return res.json()
}