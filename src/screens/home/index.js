import React, { useState, useEffect } from 'react'
import { Outer, Container, Column } from '../../styles/components'
import Header from '../../styles/components/header'
import api from '../../services/api'
import { Row, ProjectContainer, Project } from './components'
import { FiPlus, FiUsers } from 'react-icons/fi'
import { colors } from '../../styles/global/colors'
import { DialogHeader, DialogContent, FormContainer, Input, ActionRow, CancelButton, ActionButton } from './components/dialog'
import Dialog from '@material-ui/core/Dialog'
import { withRouter } from 'react-router-dom'

const HomeScreen = props => {
    const [open, setOpen] = useState(false)
    const [reload, reloadPage] = useState(false)
    const [projects, setProjects] = useState([])
    const [otherProjects, setOtherProjects] = useState([])

    const ProjectDialog = (props) => {
        const [projectName, setProjectName] = useState(null)

        const handleClose = () => {
            setOpen(false)
        }

        const createProject = async () => {
            if (projectName !== null) {
                const response = await api.post(
                    '/graphql',
                    { query: `mutation{ storeProject(input: { name: "${projectName}" }){ name } }` }
                )

                if (response.status === 200) {
                    reloadPage(!reload)
                    setProjectName(null)
                    setOpen(false)
                }
            }
        }

        return (
            <Dialog style={{ borderRadius: 10 }} onClose={handleClose} open={open}>
                <DialogHeader>
                    <h5>Novo Projeto</h5>
                </DialogHeader>
                <DialogContent>
                    <FormContainer>
                        <Input type='text' placeholder='Qual o nome do projeto?' onChange={event => setProjectName(event.target.value)} />
                    </FormContainer>
                    <ActionRow>
                        <CancelButton onClick={handleClose}>Cancelar</CancelButton>
                        <ActionButton onClick={createProject}>Criar</ActionButton>
                    </ActionRow>
                </DialogContent>
            </Dialog>
        )
    }

    const manageProject = project => {
        props.history.push('/project', { project: project, owner: true })
    }

    const toProject = project => {
        props.history.push('/project', { project: project, owner: false })
    }

    useEffect(() => {
        let mounted = true
        const getProjects = async () => {
            const response = await api.post(
                '/graphql',
                { query: `{ showProjects{ id, name } }` }
            )

            if (response.status === 200) {
                const projectsDB = response.data.data.showProjects
                const updatedProjects = []
                projectsDB.map(project => (
                    updatedProjects.push(project)
                ))

                if (mounted) {
                    setProjects(updatedProjects);
                }
            }
        }

        const getOtherProjects = async () => {
            const response = await api.post(
                '/graphql',
                { query: `{ showOtherProjects{ id, name, profiles{ id, name } } }` }
            )

            if (response.status === 200) {
                const projectDB = response.data.data.showOtherProjects

                if (mounted) {
                    setOtherProjects(projectDB);
                }
            }
        }

        getProjects()
        getOtherProjects()

        return () => (
            mounted = false
        )

    }, [reload])

    return (
        <Outer>
            <Header title={'meus projetos'} />
            <Container>
                <Column width={'100%'} height={'100%'} justify={'flex-start'}>
                    <Row>
                        <ProjectContainer>
                            <Project onClick={() => setOpen(true)}>
                                <FiPlus color={colors.mediumgreen} size={50} />
                                <h3>Novo Projeto</h3>
                            </Project>
                        </ProjectContainer>
                        {projects.length > 0 &&
                            projects.map(project => (
                                <ProjectContainer key={Math.random().toString(7)} onClick={() => manageProject(project)}>
                                    <Project>
                                        <FiUsers color={colors.mediumgreen} size={50} />
                                        <h3>{project.name}</h3>
                                    </Project>
                                </ProjectContainer>
                            ))
                        }
                        {otherProjects.length > 0 &&
                            otherProjects.map(project => (
                                <ProjectContainer key={Math.random().toString(7)} onClick={() => toProject(project)}>
                                    <Project>
                                        <FiUsers color={colors.mediumgreen} size={50} />
                                        <h3>{project.name}</h3>
                                    </Project>
                                </ProjectContainer>
                            ))
                        }
                    </Row>
                </Column>
            </Container>
            <ProjectDialog />
        </Outer>
    );
}

export default withRouter(HomeScreen);
