import { Metadata } from "next"
import Link from "next/link"
import '../globals.css'

export const metadata:Metadata = {
    title:'Produtos'
}




export default function Products(){

    const id = 1
    return (
        <div>
            <ul className="flex flex-col">
                <Link href={`/products/${id}`}>Product 1</Link>
                <Link href='/products/2'>Product 2</Link>
                <li>Product 3</li>
            </ul>
        </div>
    )
}