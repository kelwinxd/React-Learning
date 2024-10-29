





const initialState = "hello"

//boilerplate 
function reducer (state = initialState,action){
    if(action.type === 'somar'){
       return state + " dispatched baby!"
    }
    return state
}



const store = Redux.createStore(reducer)
let state = store.getState()

//retornando normal
console.log(state)

//dispatch modifica o estado
store.dispatch({type:'somar'})

//para atualizar o valor deve sempre pegar denovo o state
state = store.getState()
console.log(state)