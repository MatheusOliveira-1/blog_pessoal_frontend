import React, { useState } from "react";
import { AppBar, Box, Toolbar, Typography } from "@material-ui/core";
import { Link, useHistory } from "react-router-dom";

import './Navbar.css'
import { useDispatch, useSelector } from "react-redux";
import { addToken } from "../../../store/tokens/Action";
import { TokenState } from "../../../store/tokens/TokensReducer";
import { toast } from "react-toastify";

function Navbar() {

    const token = useSelector<TokenState, TokenState['tokens']>(
        (state) => state.tokens
    )

    const dispatch = useDispatch()
    
    let history = useHistory()

    function goLogout(){
        dispatch(addToken(''))
        toast.info('Usuário deslogado com sucesso!!!',{
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

    var navbarComponent

    if(token !== ""){
        navbarComponent =
        <AppBar position="static" className="navBar-style">
                <Toolbar variant="dense">
                        <Box>
                            <Typography variant="h5" className="cursor">
                                Blog Pessoal
                            </Typography>
                        </Box>

                        <Box display="flex" justifyContent="start">
                            
                            <Link to='/home' className='text-decorator-none'>
                                <Box mx={1} >
                                <Typography variant="h6" className="cursor">
                                    Home
                                </Typography>
                                </Box>
                            </Link>

                            <Link to='/postagens' className='text-decorator-none'>
                                <Box mx={1}>
                                    <Typography variant="h6" className="cursor">
                                        Postagens
                                    </Typography>
                                </Box>
                            </Link>
                            
                            <Link to='/temas' className='text-decorator-none'>
                                <Box mx={1}>
                                    <Typography variant="h6" className="cursor">
                                        Temas
                                    </Typography>
                                </Box>
                            </Link>

                            <Link to='/formularioTema' className='text-decorator-none'>
                                <Box mx={1} >
                                    <Typography variant="h6" className="cursor">
                                        Cadastrar Tema
                                    </Typography>
                                </Box>
                            </Link>

                            <Box mx={1} onClick={goLogout}>
                                <Typography variant="h6" className="cursor">
                                    Logout
                                </Typography>
                            </Box>
                            
                        </Box>

                </Toolbar>
            </AppBar>
    }

    return (
        <>
            { navbarComponent }
        </>
    )
}

export default Navbar;