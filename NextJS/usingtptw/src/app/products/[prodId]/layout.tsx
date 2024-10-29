import { Metadata } from "next";
import { ReactNode } from "react";
//Define o titulo da pagina
export const metadata:Metadata = {
     title:'Produtos'
}



export default function productDetails({children}:{children:ReactNode}){

    return (
        <>
           <p>Especificações</p>
           {children}
        </>
     
    )
}