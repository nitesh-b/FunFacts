
export interface Fact {
    id: string
    fact : string
    
}
interface FunFactState{
    facts : Fact[]
}

const initialState : FunFactState = {
    facts : []
}

const funfactReducer = (state: FunFactState = initialState, action: Fact) => {
return {
    ...state,
    facts: [...state.facts, action]
}
}

export default funfactReducer