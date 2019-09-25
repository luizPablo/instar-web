import React, { useState, useEffect } from 'react'
import { withRouter } from 'react-router-dom'
import { Header, HeaderColumn, UserContainer, UserInfo, Button, Name, Identification, HeaderContainer, HeaderTitle } from './styles'
import { FiUser, FiLogOut } from 'react-icons/fi'
import api from '../../../services/api'

const MainHeader = props => {
    const [user, setUser] = useState(null)

    const logout = async () => {
        const out = await api.get('/logout')
        if (out.data.auth === false) {
            props.history.push('/')
        }
    }

    useEffect(() => {
        let mounted = true
        const getUser = async () => {
            const response = await api.post(
                '/graphql',
                { query: `{ user{ name, username } }` }
            )

            if (response.status === 200) {
                if (mounted) {
                    setUser(response.data.data.user)
                }
            }
        }

        getUser()

        return () => {
            mounted = false
        }
    }, [])

    return (
        <HeaderContainer>
            <Header>
                <HeaderColumn justify={'flex-start'}>
                    <UserContainer>
                        <UserInfo>
                            <FiUser color={'#f2f2f2'} size={25} />
                            <Identification>
                                <h1>{user ? user.name : ''}</h1>
                                <h2>{user ? user.username : ''}</h2>
                            </Identification>
                        </UserInfo>
                    </UserContainer>
                </HeaderColumn>

                <HeaderColumn align={'center'}>
                    <Name onClick={() => props.history.push('/')}>instar</Name>
                </HeaderColumn>

                <HeaderColumn justify={'flex-end'}>
                    <Button onClick={logout}><FiLogOut size={25} /> Sair</Button>
                </HeaderColumn>
            </Header>
            <HeaderTitle>
                <h1>{props.title}</h1>
            </HeaderTitle>
        </HeaderContainer>
    );
}

export default withRouter(MainHeader)