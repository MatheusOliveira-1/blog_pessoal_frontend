import { useEffect, useState } from 'react'
import { Box, Card, CardActions, CardContent, Button, Typography } from '@material-ui/core';
import './DeletarTema.css';
import { useHistory, useParams } from 'react-router-dom';
import { buscaId, deleteId } from '../../../services/Service';
import Tema from '../../../models/Tema';
import { useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import { UserState } from '../../../store/tokens/UserReducer';


function DeletarTema() {

  let history = useHistory();
  const { id } = useParams<{ id: string }>()
  const token = useSelector<UserState, UserState['tokens']>(
    (state) => state.tokens
  )
  const [tema, setTema] = useState<Tema>()

  useEffect(() => {
    if (token == "") {
      toast.error('Você precisa estar logado', {
        position: 'top-right',
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: false,
        theme: 'dark',
        progress: undefined
      })
      history.push('/login')
    }
  }, [token])

  useEffect(() => {
    if (id !== undefined) {
      findById(id)
    }
  }, [id])

  async function findById(id: string) {
    buscaId(`/temas/${id}`, setTema, {
      headers: {
        'Authorization': token
      }
    })
  }

  async function sim() {
    try {
      history.push('/temas')
      await deleteId(`/temas/${id}`, {
        headers: {
          'Authorization': token
        }
      })
      toast.success('Tema deletado com sucesso', {
        position: 'top-right',
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: false,
        theme: 'dark',
        progress: undefined
      })
    } catch (error) {
      toast.error('Erro ao deletar tema', {
        position: 'top-right',
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: false,
        theme: 'dark',
        progress: undefined
      })
    }
  }

  function nao() {
    history.push('/temas')
  }

  return (
    <>
      <Box m={2}>
        <Card variant="outlined">
          <CardContent>
            <Box justifyContent="center">
              <Typography color="textSecondary" gutterBottom>
                {tema?.descricao}
              </Typography>
              <Typography color="textSecondary">
                tema
              </Typography>
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

              <Box mx={2}>
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
export default DeletarTema;