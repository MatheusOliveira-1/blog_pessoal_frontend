import React, { useState } from "react";
import { AppBar, Box, Toolbar, Typography } from "@material-ui/core";
import { Link, useHistory } from "react-router-dom";

import './Navbar.css'
import { useDispatch, useSelector } from "react-redux";
import { addToken } from "../../../store/tokens/Action";
import { TokenState } from "../../../store/tokens/TokensReducer";

function Navbar() {

    const token = useSelector<TokenState, TokenState['tokens']>(
        (state) => state.tokens
    )

    const dispatch = useDispatch()
    
    let history = useHistory()

    function goLogout(){
        dispatch(addToken(''))
        alert('Usuário deslogado')
        history.push('/login')
    }

    var navbarComponent

    if(token !== ""){
        navbarComponent =
        <AppBar position="static" style={{backgroundColor: "#1C1C1C", color: "#00FFFF"}}>
                <Toolbar variant="dense">
                    <Box className="cursor" >
                        <Typography variant="h5" color="inherit">
                            Blog Pessoal
                        </Typography>
                    </Box>

                    <Box display="flex" justifyContent="start">
                        
                        <Link to='/home' className='text-decorator-none'>
                            <Box mx={1} className="cursor">
                            <Typography variant="h6" color="inherit">
                                Home
                            </Typography>
                            </Box>
                        </Link>

                        <Link to='/postagens' className='text-decorator-none'>
                            <Box mx={1} className="cursor">
                                <Typography variant="h6" color="inherit">
                                    Postagens
                                </Typography>
                            </Box>
                        </Link>
                        
                        <Link to='/temas' className='text-decorator-none'>
                            <Box mx={1} className="cursor">
                                <Typography variant="h6" color="inherit">
                                    Temas
                                </Typography>
                            </Box>
                        </Link>

                        <Link to='/formularioTema' className='text-decorator-none'>
                            <Box mx={1} className='cursor'>
                                <Typography variant="h6" color="inherit">
                                    Cadastrar Tema
                                </Typography>
                            </Box>
                        </Link>

                        <Box mx={1} className="cursor" onClick={goLogout}>
                            <Typography variant="h6" color="inherit">
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