import { AppBar, Box, Toolbar, Typography } from "@material-ui/core";
import { Link } from "react-router-dom";
import React from "react";
import './Navbar.css'

function Navbar() {
    return (
        <>
            <AppBar position="static" style={{backgroundColor: "#1C1C1C", color: "#00A3C0"}}>
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
                     
                        <Box mx={1} className="cursor">
                            <Typography variant="h6" color="inherit">
                                Postagens
                            </Typography>
                        </Box>
                        <Box mx={1} className="cursor">
                            <Typography variant="h6" color="inherit">
                                Temas
                            </Typography>
                        </Box>
                        <Box mx={1} style={{ cursor: "pointer" }}>
                            <Typography variant="h6" color="inherit">
                                Cadastrar Tema
                            </Typography>
                        </Box>
                        <Link to='/login' className='text-decorator-none'>
                        <Box mx={1} className="cursor">
                            <Typography variant="h6" color="inherit">
                                Logout
                            </Typography>
                        </Box>
                        </Link>
                       
                    </Box>

                </Toolbar>
            </AppBar>
        </>
    )
}

export default Navbar;