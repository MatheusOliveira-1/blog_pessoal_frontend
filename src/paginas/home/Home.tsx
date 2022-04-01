import React, { useEffect, useState } from 'react';
import { Box, Button, Grid, Typography } from '@material-ui/core';
import { Link, useHistory, useParams } from 'react-router-dom';
import useLocalStorage from 'react-use-localstorage';

import TabPostagem from '../../components/postagens/tabpostagem/TabPostagem';
import ModalPostagem from '../../components/postagens/modalPostagem/ModalPostagem';
import Tema from '../../models/Tema';

import './Home.css';

function Home(){

    let history = useHistory();
    const { id } = useParams<{ id: string }>()
    const [token, setToken] = useLocalStorage('token')
    const [temas, setTemas] = useState<Tema[]>([])

    useEffect(() => {
        if (token == "") {
          alert("Você precisa estar logado")
          history.push('/login')
        }
      }, [token])

    return(
        <>
             <Grid container direction="row" justifyContent="center" alignItems="center" className='caixa'>
                <Grid alignItems="center" item xs={6}>
                    <Box paddingX={20}>
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

                   
                        <Box display="flex" justifyContent="center">

                            <Box>
                                <ModalPostagem />
                            </Box>
            
                            <Button variant="outlined" className='botao'>

                                Ver Postagens

                            </Button>
                        </Box>
                  

                </Grid>
                <Grid item xs={6} >
                    <img src="https://i.imgur.com/fHTKIpH.png" alt="" width="500px" height="auto" />
                </Grid>

                <Grid xs={12} className='postagens'>
                    <TabPostagem />
                </Grid>
            </Grid>
        </>
    );
}

export default Home;