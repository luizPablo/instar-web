import styled from 'styled-components'
import { colors } from '../../../styles/global/colors'

export const Row = styled.div`
    width: 100%;
    text-align: left;
`

export const PageSession = styled.div`
    width: 100%;

    h1 {
        margin-top: 50px;
        margin-bottom: 10px;
        font-size: 12px;
        font-weight: bold;
        padding-bottom: 5px;
        border-bottom: 1px solid ${colors.green};
        width: 300px; 
    }
`

export const UserContainer = styled.div`
    display: inline-block;
    width: 100px;
    height: 100px;
    margin: 5px;
    border-radius: 10px;
`

export const User = styled.div`
    display: flex;
    width: 100%;
    height: 100%;
    border-radius: 10px;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    border-top: 2px solid ${colors.green};
    cursor: pointer;
    -webkit-box-shadow: 0px 5px 8px -3px rgba(0,0,0,0.2);
    -moz-box-shadow: 0px 5px 8px -3px rgba(0,0,0,0.2);
    box-shadow: 0px 5px 8px -3px rgba(0,0,0,0.2);
    transition: 0.4s;

    h3 {
        font-size: 10px;
        color: ${colors.mediumgreen}
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