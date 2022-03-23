import React from "react";
import { Box, Grid, Typography } from "@material-ui/core";
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';

function Footer() {
    return (
        <>
            <Grid container direction="row" justifyContent="center" alignItems="center">
                <Grid alignItems="center" item xs={12}>
                    <Box style={{ backgroundColor: "#1C1C1C", height: "120px" }}>
                        <Box paddingTop={1} display="flex" alignItems="center" justifyContent="center">
                            <Typography variant="h5" align="center" gutterBottom style={{ color: "#00A3C0" }}>Siga-nos nas redes sociais </Typography>
                        </Box>
                        <Box display="flex" alignItems="center" justifyContent="center">
                            <a href="https://github.com/MatheusOliveira-1/" target="_blank">
                                <GitHubIcon style={{ fontSize: 60, color: "#00A3C0" }} />
                            </a>
                            <a href="https://www.linkedin.com/in/mo-dev/" target="_blank">
                                <LinkedInIcon style={{ fontSize: 60, color: "#00A3C0" }} />
                            </a>
                        </Box>
                    </Box>
                    <Box style={{ backgroundColor: "#363636", height: "60px" }}>
                        <Box paddingTop={1}>
                            <Typography variant="subtitle2" align="center" gutterBottom style={{ color: "#00A3C0" }} >© 2020 Copyright:</Typography>
                        </Box>
                        <Box>
                            <a target="_blank" href="https://brasil.generation.org">
                                <Typography variant="subtitle2" gutterBottom style={{ color: "#007997", textDecoration: "none" }} align="center">brasil.generation.org</Typography>
                            </a>
                        </Box>
                    </Box>
                </Grid>
            </Grid>
        </>
    )
}

export default Footer;