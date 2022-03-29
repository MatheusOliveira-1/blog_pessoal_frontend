import { Box, Grid, TextField, Typography, Button } from "@material-ui/core";
import React from "react";
import { Link } from "react-router-dom";
import './CadastroUsuario.css'


function CadastroUsuario() {
    return (
        <Grid container direction="row" justifyContent="center" alignItems="center">
            <Grid xs={6} className='imagem2'></Grid>
            <Grid xs={6} alignItems='center'>
                <Box padding={10}>
                    <form>
                        <Typography variant='h3'
                            gutterBottom
                            color="textPrimary"
                            component='h3' align='center'
                            className="textos">
                            Cadastrar
                        </Typography>
                        <TextField
                            id='nome'
                            label='nome'
                            variant='outlined'
                            name='nome'
                            margin="normal"
                            fullWidth>
                        </TextField>

                        <TextField
                            id='usuario'
                            label='usuário'
                            variant='outlined'
                            name='usuario'
                            margin='normal'
                            type='password'
                            fullWidth>
                        </TextField>
                        <TextField
                            id='senha'
                            label='senha'
                            variant='outlined'
                            name='senha'
                            margin="normal"
                            fullWidth>
                        </TextField>

                        <TextField
                            id='confirmarSenha'
                            label='Confirmar Senha'
                            variant='outlined'
                            name='confirmarSenha'
                            margin='normal'
                            type='password'
                            fullWidth>
                        </TextField>
                        <Box>
                            <Link to='/login' className='text-decorator-none'>
                                <Button variant='contained' color='secondary' className='btnCancelar'>
                                    Cancelar
                                </Button>
                            </Link>
                            <Button type='submit' variant='contained' className='btnCadastrar'>
                                    Cadastrar
                                </Button>
                        </Box>
                    </form>
                </Box>
            </Grid>

        </Grid>
    );

}

export default CadastroUsuario;