import React, { useState, useEffect } from 'react'
import { Outer, Container, Column } from '../../styles/components'
import Header from '../../styles/components/header'
import api from '../../services/api'
import { colors } from '../../styles/global/colors'
import { Row, UserContainer, User, PageSession } from './components'
import { FiPlus, FiUserCheck } from 'react-icons/fi'
import { DialogHeader, DialogContent, FormContainer, Input, ActionRow, CancelButton, ActionButton } from './components/dialog'
import Dialog from '@material-ui/core/Dialog'
import { useToasts } from 'react-toast-notifications'

const ProfileScreen = props => {
    const { addToast } = useToasts()
    const [profile, setProfile] = useState(null)
    const [open, setOpen] = useState(false)
    const [reload, reloadPage] = useState(false)

    const notify = (type, message) => {
        addToast(message, { appearance: type, autoDismiss: true })
    }

    const UserDialog = () => {
        const [username, setUsername] = useState(null)

        const handleClose = () => {
            setOpen(false)
        }

        const addUser = async () => {
            if (username !== null) {
                const response = await api.post(
                    '/graphql',
                    { query: `mutation{ addProfileUser(username: "${username}", profileId: ${profile.id}) }` }
                )

                if (response.status === 200) {
                    const result = response.data.data.addProfileUser

                    if (!result.error) {
                        reloadPage(!reload)
                        setUsername(null)
                        setOpen(false)
                    } else {
                        notify('error', result.message)
                    }
                }
            }
        }

        return (
            <Dialog style={{ borderRadius: 10 }} onClose={handleClose} open={open}>
                <DialogHeader>
                    <h5>Adicionar usuário para o perfil {props.location.state.profile.name}</h5>
                </DialogHeader>
                <DialogContent>
                    <FormContainer>
                        <Input type='text' placeholder='Qual o username do usuário?' onChange={event => setUsername(event.target.value)} />
                    </FormContainer>
                    <ActionRow>
                        <CancelButton onClick={handleClose}>Cancelar</CancelButton>
                        <ActionButton onClick={addUser}>Adicionar</ActionButton>
                    </ActionRow>
                </DialogContent>
            </Dialog>
        )
    }

    useEffect(() => {
        let mounted = true

        const getProfile = async () => {
            const response = await api.post(
                '/graphql',
                { query: `{ showProfile(id: ${props.location.state.profile.id}){ id, name, users{ name, id } } }` }
            )

            if (response.status === 200) {
                const profileDB = response.data.data.showProfile

                if (mounted) {
                    setProfile(profileDB);
                }
            }
        }

        getProfile()

        return () => (
            mounted = false
        )
    }, [props, reload])

    return (
        <Outer>
            <Header title={profile ? 'Perfil: ' + profile.name : 'Aguarde...'} />
            <Container>
                <Column width={'100%'} height={'100%'} justify={'flex-start'}>
                    <PageSession>
                        <h1>Usuários com este perfil</h1>
                    </PageSession>
                    <Row>
                        <UserContainer>
                            <User onClick={() => setOpen(true)}>
                                <FiPlus color={colors.mediumgreen} />
                                <h3>Adicionar</h3>
                            </User>
                        </UserContainer>
                        {profile && profile.users.length > 0 &&
                            profile.users.map(user => (
                                <UserContainer key={Math.random().toString(7)}>
                                    <User>
                                        <FiUserCheck color={colors.mediumgreen} />
                                        <h3>{user.name}</h3>
                                    </User>
                                </UserContainer>
                            ))
                        }
                    </Row>

                </Column>
                <UserDialog />
            </Container>
        </Outer>
    );
}

export default ProfileScreen;
