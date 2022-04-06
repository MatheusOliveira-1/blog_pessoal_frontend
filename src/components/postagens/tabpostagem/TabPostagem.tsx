import React, {useState} from 'react'
import { AppBar, Tab, Tabs, Typography, Box } from '@material-ui/core';
import { TabContext, TabPanel } from '@material-ui/lab';
import ListaPostagem from '../listapostagem/ListaPostagem';
import './TabPostagem.css';
import { red } from '@material-ui/core/colors';


function TabPostagem() {
    const [value, setValue] = useState('2')
    function handleChange(event: React.ChangeEvent<{}>, newValue: string){
        setValue(newValue);
    }
  return (
    <>
      <TabContext value={value} >
        <AppBar position="static" className='app-bar'>
          <Tabs centered onChange={handleChange}>
            <Tab label="Todas as postagens" value="1"/>
            <Tab label="Sobre nós" value="2" />
          </Tabs>
        </AppBar>
        <TabPanel value="1" >
          <Box justifyContent="center">
            <ListaPostagem />
          </Box>
        </TabPanel>
     
        <TabPanel value="2" className='background-sobre-nos'>
            <Typography
            gutterBottom 
            component="h5"
            className='titulo-sobre'>
              Sobre-nós
            </Typography>

            <Typography  
            gutterBottom
            className='texto-sobre'>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dignissimos ut eveniet natus totam et, voluptate dicta tempore alias, odio nobis non eius cupiditate minima inventore pariatur! Ipsum itaque consectetur voluptatibus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo velit consequuntur suscipit fugiat, nam quis quod quaerat veritatis et, vel ratione beatae, facere neque! Quo animi porro voluptate saepe deleniti? Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore adipisci, officia aut quidem dolorum deserunt iure dolorem doloribus velit nobis quas consequatur at ullam odit, nesciunt est nulla nihil excepturi!
            </Typography>
          
        </TabPanel>
      </TabContext>
    </>
  );
}
export default TabPostagem;