import { useEffect, useState } from 'react';
import { Box, Button, Grid, Typography } from '@material-ui/core';
import { Link, useHistory, useParams } from 'react-router-dom';

import TabPostagem from '../../components/postagens/tabpostagem/TabPostagem';
import ModalPostagem from '../../components/postagens/modalPostagem/ModalPostagem';
import Tema from '../../models/Tema';
import User from '../../models/User';

import './Home.css';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import { UserState } from '../../store/tokens/UserReducer';
import { addToken } from "../../store/tokens/Action";

function Home() {

    let history = useHistory();

    /** token = store.tokens */
    const token = useSelector<UserState, UserState['tokens']>(
        (state) => state.tokens
    )

    const dispatch = useDispatch()

    useEffect(() => {
        if (token == "") {
            toast.error('Você precisa estar logado', {
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

    function goLogout() {
        dispatch(addToken(''))
        toast.info('Usuário deslogado com sucesso!!!', {
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

    var clique = 0
    var botoesEsquerda

    function exibeBotoes() {
        
        
        clique += 1

        if (clique % 2 === 0) {
            botoesEsquerda = 'nada'

        } else {
            botoesEsquerda = 
            <Box className='btns-esquerda'>
                        <Box display="flex" justifyContent="right">
                            <Link to='/postagens' className='text-decorator-none'>
                                <Button variant="outlined" className='btn-ver-postagens'>
                                    Ver Postagens
                                </Button>
                            </Link>
                        </Box>
                        <Box display="flex" justifyContent="right">
                            <Link to='/temas' className='text-decorator-none'>
                                <Button variant="outlined" className='btn-ver-temas'>
                                    Ver Temas
                                </Button>
                            </Link>
                        </Box>
                        <Box display="flex" justifyContent="right">
                            <Button variant="outlined" className='btn-logout' onClick={goLogout}>
                                Logout
                            </Button>
                        </Box>
                    </Box>
        }

        console.log('numero de cliques ' + clique)
        console.log('% ' + clique % 2)
        console.log('Deve renderizar ' + botoesEsquerda)
        console.log(botoesEsquerda)

    }




    return (
        <>
            <Grid container direction="row" justifyContent="center" alignItems="center" className='caixa'>
                <Grid alignItems="center" item xs={12}>
                    <Box paddingX={20} >
                        <Typography variant="h3"
                            gutterBottom color="textPrimary"
                            component="h3" align="center"
                            className='titulo'>
                            Seja bem vinde!
                        </Typography>

                        <Typography variant="h5"
                            gutterBottom color="textPrimary"
                            component="h5"
                            align="center"
                            className='titulo'>
                            Expresse aqui os seus pensamentos e opiniões!
                        </Typography>
                    </Box>

                </Grid>

                <Grid xs={4}>
                    {botoesEsquerda}
                </Grid>

                <Grid item xs={4} alignItems='center' justifyContent='center'>
                    <Box onClick={exibeBotoes} className='icone-interact'>

                    </Box>
                </Grid>
                <Grid xs={4}>
                    <Box className='btns-direita'>
                        <Box>
                            <ModalPostagem />
                        </Box>
                        <Box display="flex" justifyContent="left">
                            <Link to='/postagens' className='text-decorator-none'>
                                <Button variant="outlined" className='btn-novo-tema'>
                                    Novo Tema
                                </Button>
                            </Link>
                        </Box>
                    </Box>

                </Grid>


                <Grid xs={12} className='postagens'>
                    <TabPostagem />
                </Grid>
            </Grid>
        </>
    );
}

export default Home;