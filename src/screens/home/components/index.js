import styled from 'styled-components'
import { colors } from '../../../styles/global/colors'

export const Row = styled.div`
    text-align: center;
`

export const ProjectContainer = styled.div`
    display: inline-block;
    width: 300px;
    height: 200px;
    margin: 5px;
    border-radius: 10px;
    -webkit-box-shadow: 0px 5px 8px -3px rgba(0,0,0,0.2);
    -moz-box-shadow: 0px 5px 8px -3px rgba(0,0,0,0.2);
    box-shadow: 0px 5px 8px -3px rgba(0,0,0,0.2);
`

export const Project = styled.div`
    display: flex;
    width: 100%;
    height: 100%;
    border-radius: 10px;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    border-top: 2px solid ${colors.green};
    cursor: pointer;
    transition: 0.4s;

    h3 {
        font-size: 12px;
        color: ${colors.mediumgreen};
    }

    :hover {
        background-image: linear-gradient(${colors.darkgreen}, ${colors.mediumgreen});
        svg {
            stroke: ${colors.green};
        }

        h3{
            color: ${colors.green};
        }
    }
`