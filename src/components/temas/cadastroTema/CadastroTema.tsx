import React, { ChangeEvent, useEffect, useState } from "react";
import { Container, Typography, TextField, Button } from "@material-ui/core";
import { useHistory, useParams } from "react-router-dom";
import useLocalStorage from "react-use-localstorage";

import Tema from "../../../models/Tema";
import { buscaId, post, put } from "../../../services/Service";

function CadastroTema() {

    let history = useHistory();
    const { id } = useParams<{ id: string }>()
    const [token, setToken] = useLocalStorage('token')
    const [tema, setTema] = useState<Tema>({
        id: 0,
        descricao: ''
    })

    useEffect(() => {
        if (token == "") {
            alert("Você precisa estar logado")
            history.push('/login')
        }
    }, [token])

    useEffect(() => {
        if (id !== undefined) {
            findById(id)
        }
    }, [id])

    async function findById(id: string) {
        buscaId(`/temas/${id}`, setTema, {
            headers: {
                'Authorization': token
            }
        })
    }

    function updatedTema(e: ChangeEvent<HTMLInputElement>) {
        setTema({
            ...tema,
            [e.target.name]: e.target.value,
            postagem:[{}]
        })

    }

    async function onSubmit(e: ChangeEvent<HTMLFormElement>) {
        e.preventDefault()

        if (id !== undefined) {
            try {
                console.log(tema)
                await put(`/temas`, tema, setTema, {
                    headers: {
                        'Authorization': token
                    }
                })
                console.log("Retorno" + tema)
                alert('Tema atualizado com sucesso!')
                back()
            } catch (error) {
                console.log(error)
                alert('Erro ao atualizar tema, por favor verifique os campos')
            }
        } else {
            try {
                await post('/temas', tema, setTema, {
                    headers: {
                        'Authorization': token
                    }
                })
                alert('Tema cadastrado com sucesso')
                back()
            } catch (error) {
                alert('Erro ao cadastrar tema, por favor verifique os campos.')
            }
        }
    }

    function back() {
        history.push('/temas')
    }

    return (
        <Container maxWidth='sm' className="topo">
            <form onSubmit={onSubmit}>
                <Typography
                    variant="h3"
                    color="textSecondary"
                    component="h1"
                    align="center">

                    Cadastro de Temas

                </Typography>

                <TextField
                    value={tema.descricao}
                    onChange={(e: ChangeEvent<HTMLInputElement>) => updatedTema(e)}
                    id="descricao"
                    label="descrição"
                    variant="outlined"
                    name="descricao"
                    margin="normal"
                    fullWidth
                />

                <Button
                    type="submit"
                    variant="contained"
                    color="primary">
                    Finalizar
                </Button>

            </form>
        </Container>
    )
}

export default CadastroTema;