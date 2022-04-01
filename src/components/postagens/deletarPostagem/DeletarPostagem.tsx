import React, { useEffect, useState } from 'react'
import { Typography, Button, Box, Card, CardActions, CardContent } from "@material-ui/core"
import { buscaId, deleteId } from '../../../services/Service';
import useLocalStorage from 'react-use-localstorage';
import { useHistory, useParams } from 'react-router-dom';

import Postagem from '../../../models/Postagem';
import './DeletarPostagem.css';

function DeletarPostagem() {

  let history = useHistory();
  const { id } = useParams<{ id: string }>()
  const [token, setToken] = useLocalStorage('token')
  const [post, setPosts] = useState<Postagem>()

  useEffect(() => {
    if (token == "") {
      alert("Você precisa estar logado")
      history.push('/login')
    }
  }, [token])

  useEffect(() => {
    if (id !== undefined) {
      findById(id)
    }
  }, [id])

  async function findById(id: string) {
    buscaId(`/postagens/${id}`, setPosts, {
      headers: {
        'Authorization': token
      }
    })
  }

 async function sim() {
    try {
      history.push('/postagens')
      await deleteId(`/postagens/${id}`, {
        headers: {
          'Authorization': token
        }
      })
      alert('Postagem deletada com sucesso')
    } catch(error){
      alert('Erro ao deletar postagem')
    }
  }

  function nao() {
    history.push('/postagens')
  }


  return (
    <>
      <Box m={2}>
        <Card variant="outlined" >
          <CardContent>
            <Box justifyContent="center">
              <Typography color="textSecondary" gutterBottom>
                Postagens
              </Typography>
              <Typography variant="h5" component="h2">
                {post?.titulo}
              </Typography>
              <Typography variant="body2" component="p">
                {post?.texto}
              </Typography>
              <Typography variant="body2" component="p">
                {post?.tema?.descricao}
              </Typography>
              <Typography color="initial">{post?.texto}</Typography>
            </Box>

          </CardContent>

          <CardActions>
            <Box display="flex" justifyContent="start" ml={1.0} mb={2} >
              <Box mx={2}>
                <Button
                  onClick={sim}
                  variant="contained"
                  className="marginLeft"
                  size='large'
                  color="primary">
                  Sim
                </Button>
              </Box>

              <Box>
                <Button
                  onClick={nao}
                  variant="contained"
                  size='large'
                  color="secondary">
                  Não
                </Button>
              </Box>
            </Box>
          </CardActions>
        </Card>
      </Box>
    </>
  );
}
export default DeletarPostagem;