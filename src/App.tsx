import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './components/estaticos/navbar/Navbar';
import Home from './paginas/home/Home';
import Login from './paginas/login/Login';
import Footer from './components/estaticos/footer/Footer';
import './App.css';
import CadastroUsuario from './paginas/cadastroUsusario/CadastroUsuario';
import ListaTema from './components/temas/listatema/ListaTema';
import ListaPostagem from './components/postagens/listapostagem/ListaPostagem';

function App() {
  return (
   <Router>
     <Navbar />
        <Switch>
            <div>
              <Route path='/login'>
                <Login />
              </Route>

              <Route exact path='/'>
                <Login />
              </Route>

              <Route path='/home'>
                <Home />
              </Route>

              <Route path='/cadastrousuario'>
                <CadastroUsuario />
              </Route>

              <Route path='/temas'>
                <ListaTema />
              </Route>

              <Route path='/postagens'>
                <ListaPostagem />
              </Route>
              
            </div>
        </Switch>
     <Footer />
   </Router>
  );

}

export default App;
