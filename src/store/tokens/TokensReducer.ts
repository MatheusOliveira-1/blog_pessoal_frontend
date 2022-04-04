import { Action } from "./Action";

export interface TokenState {
    tokens: string
}

export const initialState = {
    tokens:""
}

export const tokensReducer = (state: TokenState = initialState, action: Action) => {
    switch(action.type){
        case "ADD_token":{
            return { tokens: action.payload }
        }

        default:
            return state
    }
}