import React, { createRef, useEffect, useState } from 'react'
import ReactLoading from 'react-loading'
import { colors } from '../../styles/global/colors'
import { useToasts } from 'react-toast-notifications'
import { auth } from '../../services/auth'
import api from '../../services/api'
import { Container, Box, Input, Button, FormContainer, Name } from './components'

const App = props => {
    const { addToast } = useToasts()
    const [username, setUsername] = useState(null)
    const [password, setPassword] = useState(null)
    const [loading, setLoading] = useState(false)
    const [checked, setChecked] = useState(false)
    const inputFocus = createRef()

    const notify = (type, message) => {
        addToast(message, { appearance: type, autoDismiss: true })
    }

    const signin = async () => {
        setLoading(true)
        if (username && password) {
            const response = await api.post('/auth', { username: username, password: password })

            if (response.data.auth) {
                props.history.push('/home')
            } else {
                setLoading(false)
                notify('error', response.data.message)
            }
        } else {
            setLoading(false)
            notify('error', 'Você precisa preencher os dois campos: usuário e senha')
        }

    }

    useEffect(() => {
        auth.verifyAuth().then(() => {
            if (auth.isAuthenticated) {
                props.history.push('/home')
            } else {
                setChecked(true)
            }
        })
        // eslint-disable-next-line
    }, [])

    useEffect(() => {
        if (checked) {
            inputFocus.current.focus()
        }
        // eslint-disable-next-line
    }, [checked, loading])

    if (checked) {
        return (
            <Container>
                <Box justify={'center'} height={'100px'} color={'transparent'} borders padding>
                    <h1>Bem-vindo ao Instar</h1>
                    <h2>Entre com suas credencias para ter acesso às funcionalidades</h2>
                </Box>

                <Box borderTop>
                    <Name>
                        <h1>instar</h1>
                    </Name>
                    <FormContainer>
                        <Input ref={inputFocus} focus type='text' placeholder='Usuário' onChange={event => setUsername(event.target.value)} />
                        <Input type='password' placeholder='Senha' onChange={event => setPassword(event.target.value)} />
                        <Button disabled={loading} onClick={signin}>Autenticar</Button>
                    </FormContainer>
                </Box>
                {loading && <ReactLoading type={'spin'} color={colors.green} height={'30px'} width={'30px'} />}
            </Container>
        );
    } else {
        return (
            <div></div>
        );
    }
}

export default App;
