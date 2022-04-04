import React, { useEffect, useState } from 'react';
import { Box, Button, Grid, Typography } from '@material-ui/core';
import { Link, useHistory, useParams } from 'react-router-dom';
import useLocalStorage from 'react-use-localstorage';

import TabPostagem from '../../components/postagens/tabpostagem/TabPostagem';
import ModalPostagem from '../../components/postagens/modalPostagem/ModalPostagem';
import Tema from '../../models/Tema';
import User from '../../models/User';

import './Home.css';

function Home(){

    let history = useHistory();

    const { id } = useParams<{ id: string }>()
    const [token, setToken] = useLocalStorage('token')
    const [temas, setTemas] = useState<Tema[]>([])
    const [user, setUser] = useState<User>()

    useEffect(() => {
        if (token == "") {
          alert("Você precisa estar logado")
          history.push('/login')
        }
      }, [token])
    
    function animaIcone(){
       
    }


    return(
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

                   
                        <Box display="flex" justifyContent="center">

                            <Box>
                                <ModalPostagem />
                            </Box>

                            <Link to='/postagens' className='text-decorator-none'>
                                <Button variant="outlined" className='botao'>

                                    Ver Postagens

                                </Button>
                            </Link>
                        </Box>
                       

                </Grid>
                <Grid item xs={12} alignItems='center' justifyContent='center'>
                    <Box paddingX={70} className='caixa-icone'>
                        <Box className="icone-home"></Box>
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