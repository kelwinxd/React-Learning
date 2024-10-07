type Params = {
    params: {
        prodId: string
    }
}


export default function Info({params} : Params){
    return (
        <div>
            <h1>Product {params.prodId}</h1>
        </div>
    )
}