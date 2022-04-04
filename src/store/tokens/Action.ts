/**ADD_token adiciona um token, payload é uma informação do tipo string */
export type Action = { type: 'ADD_token'; payload: string}


export const addToken = (token: string): Action => ({
    type: "ADD_token",
    payload: token
})