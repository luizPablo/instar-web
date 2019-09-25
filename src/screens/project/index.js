import React, { useState, useEffect } from 'react'
import { Outer, Container, Column } from '../../styles/components'
import Header from '../../styles/components/header'
import api from '../../services/api'
import { colors } from '../../styles/global/colors'
import { Row, UserProfile, ProfileContainer, Profile, PageSession } from './components'
import { FiPlus, FiUser } from 'react-icons/fi'
import { DialogHeader, DialogContent, FormContainer, Input, ActionRow, CancelButton, ActionButton } from './components/dialog'
import Dialog from '@material-ui/core/Dialog'
import { withRouter } from 'react-router-dom'

const ProjectScreen = props => {
    const [project, setProject] = useState(null)
    const [open, setOpen] = useState(false)
    const [reload, reloadPage] = useState(false)

    const ProfileDialog = () => {
        const [profileName, setProfileName] = useState(null)

        const handleClose = () => {
            setOpen(false)
        }

        const createProject = async () => {
            if (profileName !== null) {
                const response = await api.post(
                    '/graphql',
                    { query: `mutation{ storeProfile(input: { name: "${profileName}", projectId: ${project.id} }){ name } }` }
                )

                if (response.status === 200) {
                    reloadPage(!reload)
                    setProfileName(null)
                    setOpen(false)
                }
            }
        }

        return (
            <Dialog style={{ borderRadius: 10 }} onClose={handleClose} open={open}>
                <DialogHeader>
                    <h5>Novo perfil para {props.location.state.project.name}</h5>
                </DialogHeader>
                <DialogContent>
                    <FormContainer>
                        <Input type='text' placeholder='Qual o nome do novo perfil?' onChange={event => setProfileName(event.target.value)} />
                    </FormContainer>
                    <ActionRow>
                        <CancelButton onClick={handleClose}>Cancelar</CancelButton>
                        <ActionButton onClick={createProject}>Criar</ActionButton>
                    </ActionRow>
                </DialogContent>
            </Dialog>
        )
    }

    const managerProfile = profile => {
        props.history.push('/profile', { profile: profile })
    }

    useEffect(() => {
        let mounted = true

        const getProject = async () => {
            const response = await api.post(
                '/graphql',
                { query: `{ showProject(id: ${props.location.state.project.id}){ id, name, profiles{ id, name } } }` }
            )

            if (response.status === 200) {
                const projectDB = response.data.data.showProject

                if (mounted) {
                    setProject(projectDB);
                }
            }
        }

        getProject()

        return () => (
            mounted = false
        )
    }, [props, reload])

    return (
        <Outer>
            <Header title={project ? project.name : 'Aguarde...'} />
            <Container>
                <Column width={'100%'} height={'100%'} justify={'flex-start'}>
                    <UserProfile>
                        <h1>Perfil: {props.location.state.owner ? 'Dono' : props.location.state.project.profiles[0].name}</h1>
                    </UserProfile>

                    <PageSession>
                        <h1>Perfis deste projeto</h1>
                    </PageSession>

                    <Row>
                        {props.location.state.owner &&
                            <ProfileContainer>
                                <Profile onClick={() => setOpen(true)}>
                                    <FiPlus color={colors.mediumgreen} />
                                    <h3>Novo</h3>
                                </Profile>
                            </ProfileContainer>
                        }
                        {project && project.profiles.length > 0 &&
                            project.profiles.map(profile => (
                                <ProfileContainer key={Math.random().toString(7)}>
                                    <Profile onClick={props.location.state.owner ? () => managerProfile(profile) : () => { }}>
                                        <FiUser  color={colors.mediumgreen} />
                                        <h3>{profile.name}</h3>
                                    </Profile>
                                </ProfileContainer>
                            ))
                        }
                    </Row>

                </Column>
                <ProfileDialog />
            </Container>
        </Outer>
    );
}

export default withRouter(ProjectScreen)
