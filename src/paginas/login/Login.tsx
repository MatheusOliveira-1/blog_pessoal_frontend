import { Box, Button, Grid, TextField, Typography } from "@material-ui/core";
import React from "react";
import { Link } from "react-router-dom";
import './Login.css';


function Login() {
  return (
      <Grid container direction='row' justifyContent='center' alignItems='center'>
          <Grid alignItems='center' xs={6}>
              <Box paddingX={20}>
                  <form>
                      <Typography variant='h3' 
                      gutterBottom 
                      color="textPrimary" 
                      component='h3' align='center' 
                      style={{fontWeight: 'bold'}}>
                          Entrar
                        </Typography>
                        <TextField 
                        id='usuario' 
                        label='usuário' 
                        variant='outlined' 
                        name='usuario' 
                        margin="normal" 
                        fullWidth>
                        </TextField>
                        <TextField 
                        id='senha' 
                        label='senha' 
                        variant='outlined' 
                        name='senha' 
                        margin='normal' 
                        type='password'
                        fullWidth>
                        </TextField>
                        <Box>
                            <Link to='/home' className='text-decorator-none'>
                                <Button type='submit' variant='contained' className="button-logar">
                                    Logar
                                </Button>
                            </Link>
                        </Box>
                  </form>
                  <Box display='flex' justifyContent='center' marginTop={2}>
                      <Box marginRight={1}>
                          <Typography 
                          variant="subtitle1" 
                          gutterBottom 
                          align='center'>
                              Não tem uma conta?
                          </Typography>
                      </Box>
                      <Typography 
                      variant="subtitle1" 
                      gutterBottom 
                      align='center'
                      style={{fontWeight:'bold'}}>
                          Cadastre-se
                        </Typography>
                  </Box>
              </Box>
          </Grid>
          <Grid xs={6} style={{
              backgroundImage: `url(https://i.imgur.com/mU1WfVM.jpg)`,
              backgroundRepeat: 'no-repeat', 
              width: 'calc(100vh - 120px - 48px)',
              minHeight: 'calc(100vh - 120px - 108px)',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundColor: '00A3C0',
          }}>
              
          </Grid>
      </Grid>
  )
}

export default Login
