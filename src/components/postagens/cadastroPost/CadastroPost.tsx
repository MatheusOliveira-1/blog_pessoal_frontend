import { Box, Button, Container, FormControl, FormHelperText, InputLabel, MenuItem, Select, TextField, Typography } from '@material-ui/core';
import React, { ChangeEvent, useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useHistory, useParams } from 'react-router-dom';
import Postagem from '../../../models/Postagem';
import Tema from '../../../models/Tema';
import { busca, buscaId, post, put } from '../../../services/Service';
import { UserState } from '../../../store/tokens/UserReducer';
import './CadastroPost.css'
import { toast } from 'react-toastify';

function CadastroPost() {

    let history = useHistory();
    const { id } = useParams<{ id: string }>();
    const [temas, setTemas] = useState<Tema[]>([])
    const token = useSelector < UserState, UserState["tokens"]> (
        (state) => state.tokens
    );

    useEffect(() => {
        if (token === "") {
            toast.error('Você precisa estar logado',{
                position: 'top-right',
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: false,
                draggable: false,
                theme: 'dark',
                progress: undefined
            })
            history.push('/login')
        }
    }, [token])

    const [tema, setTema] = useState<Tema>({
        id: 0,
        descricao: ""
    })

    const [postagem, setPostagem] = useState<Postagem>({
        id: 0,
        titulo: "",
        texto: "",
        data:'',
        tema: null
    })

    useEffect(() => {
        setPostagem({
            ...postagem,
            tema: tema
        })
    }, [tema])

    useEffect(() => {
        getTemas()
        if (id !== undefined) {
            findByIdPostagem(id)
        }
    }, [id])

    async function getTemas() {
        await busca("/temas", setTemas, {
            headers: {
                "Authorization": token
            }
        })
    }

    async function findByIdPostagem(id: string) {
        await buscaId(`postagens/${id}`, setPostagem, {
            headers: {
                "Authorization": token
            }
        })
    }

    function updatedPostagem(e: ChangeEvent<HTMLInputElement>) {
        setPostagem({
            ...postagem,
            [e.target.name]: e.target.value,
            tema: tema
        })
    }

    async function onSubmit(e: ChangeEvent<HTMLFormElement>) {
        e.preventDefault()

        if (id !== undefined) {
            try {
                await put(`/postagens`, postagem, setPostagem, {
                    headers: {
                        "Authorization": token
                    }
                })
                toast.success('Postagem atualizada com sucesso!',{
                    position: 'top-right',
                    autoClose: 2000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: false,
                    draggable: false,
                    theme: 'dark',
                    progress: undefined
                })
                back()
            } catch (error) {
                console.log(`Error: ${error}`)
                toast.error('Erro ao atualizar postagem, por favor verifique os campos.',{
                    position: 'top-right',
                    autoClose: 2000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: false,
                    draggable: false,
                    theme: 'dark',
                    progress: undefined
                })
    
            }
        } else {
            try {
                await post(`/postagens`, postagem, setPostagem, {
                    headers: {
                        "Authorization": token
                    }
                })
                toast.success('Postagem cadastrada com sucesso!',{
                    position: 'top-right',
                    autoClose: 2000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: false,
                    draggable: false,
                    theme: 'dark',
                    progress: undefined
                })
                back()
            } catch (error) {
                console.log(`Error: ${error}`)
                toast.error('Erro ao cadastrar postagem, por favor verifique os campos.',{
                    position: 'top-right',
                    autoClose: 2000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: false,
                    draggable: false,
                    theme: 'dark',
                    progress: undefined
                });
            }
        }
        
    }


    function back() {
        history.push("/")
        history.push("/postagens")
    }

    var textoCadAtualiza

    if (id == undefined) {
        textoCadAtualiza =
            <Typography
                variant="h3"
                color="textSecondary"
                component="h1"
                align="center" >
                Cadastro de Postagem
            </Typography>

    } else {
        textoCadAtualiza =
        <Typography
            variant="h3"
            color="textSecondary"
            component="h1"
            align="center" >
            Atualização de Postagem
        </Typography>
    }

    return (
        <Container maxWidth="sm" className="topo">
            <form onSubmit={onSubmit}>
                <Box>
                    {textoCadAtualiza}
                </Box>
                <TextField
                    value={postagem.titulo}
                    onChange={(e: ChangeEvent<HTMLInputElement>) => updatedPostagem(e)}
                    id="titulo"
                    label="titulo"
                    variant="outlined"
                    name="titulo"
                    margin="normal"
                    fullWidth />

                <TextField
                    value={postagem.texto}
                    onChange={(e: ChangeEvent<HTMLInputElement>) => updatedPostagem(e)}
                    id="texto"
                    label="texto"
                    name="texto"
                    variant="outlined"
                    margin="normal"
                    rows={5}
                    fullWidth />

                <FormControl >
                    <InputLabel id="demo-simple-select-helper-label">Tema </InputLabel>
                    <Select
                        labelId="demo-simple-select-helper-label"
                        id="demo-simple-select-helper"
                        onChange={(e) => buscaId(`/temas/${e.target.value}`, setTema, {
                            headers: {
                                'Authorization': token
                            }
                        })}>
                        {
                            temas.map(tema => (
                                <MenuItem value={tema.id}>{tema.descricao}</MenuItem>
                            ))
                        }
                    </Select>
                    <FormHelperText>Escolha um tema para a postagem</FormHelperText>
                    <Button type="submit" variant="contained" color="primary">
                        Finalizar
                    </Button>
                </FormControl>
            </form>
        </Container>
    )
}
export default CadastroPost;