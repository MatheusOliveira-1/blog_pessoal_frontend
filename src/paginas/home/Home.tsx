import { Box, Button, Grid, Paper, Typography } from '@material-ui/core';
import React from 'react';
import './Home.css';

function Home(){
    return(
        <>
             <Grid container direction="row" justifyContent="center" alignItems="center" style={{ backgroundColor: "#000000" }}>
                <Grid alignItems="center" item xs={6}>
                    <Box paddingX={20} height="calc(100vh - 120px - 145px)">
                        <Typography variant="h3" gutterBottom color="textPrimary" component="h3" align="center" style={{ color: "#00A3C0", fontWeight: "bold" }}>Seja bem vinde!</Typography>
                        <Typography variant="h5" gutterBottom color="textPrimary" component="h5" align="center" style={{ color: "#00A3C0", fontWeight: "bold" }}>Expresse aqui os seus pensamentos e opiniões!</Typography>
                    </Box>
                    <Box display="flex" justifyContent="center">
                        <Box marginRight={1}>
                        </Box>
                        <Button variant="outlined" style={{ borderColor: "white", backgroundColor: "#1C1C1C", color: "#00A3C0", fontWeight: "bold"}}>Ver Postagens</Button>
                    </Box>
                </Grid>
                <Grid item xs={6} >
                    <img src="https://i.imgur.com/fHTKIpH.png" alt="" width="500px" height="auto" />
                </Grid>
                <Grid xs={12} style={{ backgroundColor: "white" }}>
                </Grid>
            </Grid>
        </>
    );
}

export default Home;