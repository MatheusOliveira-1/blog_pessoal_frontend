import axios from 'axios';
import { url } from 'inspector';

export const api = axios.create({
    baseURL: 'https://blogmatheusoliveiradev.herokuapp.com'
})

    export const login = async(url: any, dados: any, setDados: any)=> {
        const resposta = await api.post(url, dados)
        setDados(resposta.data.token)
    }

    export const cadastroUsuario = async(url: any, dados: any, setDados: any)=> {
        const resposta = await api.post(url, dados)
        setDados(resposta.data)
    }