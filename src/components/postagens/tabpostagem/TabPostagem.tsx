import React, {useState} from 'react'
import { AppBar, Tab, Tabs, Typography, Box } from '@material-ui/core';
import { TabContext, TabPanel } from '@material-ui/lab';
import ListaPostagem from '../listapostagem/ListaPostagem';
import './TabPostagem.css';


function TabPostagem() {
    const [value, setValue] = useState('2')
    function handleChange(event: React.ChangeEvent<{}>, newValue: string){
        setValue(newValue);
    }
  return (
    <>
      <TabContext value={value} >
        <AppBar position="static" className='app-bar'>
          <Tabs centered onChange={handleChange} >
            <Tab className='tabs' label="Todas as postagens" value="1"/>
            <Tab className='tabs' label="Sobre nós" value="2" />
          </Tabs>
        </AppBar>
        <TabPanel value="1" className='postagens-panel'>
          <Box justifyContent="center">
            <ListaPostagem />
          </Box>
        </TabPanel>
     
        <TabPanel value="2" className='background-sobre-nos'>
          <Box className='glass'>
          <Typography
            gutterBottom 
            variant='h5'
            className='titulo-sobre'>
              Sobre nós
            </Typography>

            <Typography  
            gutterBottom
            className='texto-sobre'>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dignissimos ut eveniet natus totam et, voluptate dicta tempore alias, odio nobis non eius cupiditate minima inventore pariatur! Ipsum itaque consectetur voluptatibus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo velit consequuntur suscipit fugiat, nam quis quod quaerat veritatis et, vel ratione beatae, facere neque! Quo animi porro voluptate saepe deleniti? Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore adipisci, officia aut quidem dolorum deserunt iure dolorem doloribus velit nobis quas consequatur at ullam odit, nesciunt est nulla nihil excepturi!
            </Typography>
          </Box>
           
          
        </TabPanel>
      </TabContext>
    </>
  );
}
export default TabPostagem;