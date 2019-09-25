import styled, { css } from 'styled-components';
import { colors } from '../../../styles/global/colors';

export const Container = styled.div`
    height: 100vh;
    width: 100vw;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    padding-top: 10vh;
`;

export const Box = styled.div`
    height: ${props => props.height || '300px'};
    width: ${props => props.width || '300px'};
    display: flex;
    flex-direction: column;
    justify-content: ${props => props.justify || 'space-around'};
    align-items: center;
    background-color: ${props => props.color || 'white'};
    border-radius: 5px;
    margin: 10px;
    text-align: center;
    border: 1px solid lightgray;

    ${props => props.borderTop && css`
        border-top: solid 2.5px ${colors.green};
    `}

    ${props => props.borders && css`
        border: 1px solid lightgray;
    `}

    ${props => props.padding && css`
        padding: 20px;
    `}

    h1{
        font-size: 14px;
        font-weight: bolder;
    }

    h2{
        font-size: 11px;
        font-weight: lighter;
    }
`;

export const Name = styled.div`
    display: flex;
    width: 100%;
    justify-content: center;
    align-items: center;

    h1 {
        font-size: 12px;
        font-weight: bold;
        text-transform: uppercase;
        letter-spacing: 15px;
    }
`

export const FormContainer = styled.div`
    height: auto;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: white;
`;

export const Input = styled.input`
    height: 40px;
    width: 80%;
    border: 1px solid lightgray;
    padding: 10px;
    border-radius: 5px;
    margin: 2.5px;
    color: gray;

    :focus {
        border: 2px solid ${colors.green}
    }

    ::placeholder{
        font-style: italic;
    }
`;

export const Button = styled.button`
    height: 40px;
    width: 80%;
    border: 1px solid ${colors.green};
    padding: 10px;
    border-radius: 5px;
    margin: 2.5px;
    background-image: linear-gradient(${colors.darkgreen}, ${colors.mediumgreen});
    color: white;
    font-weight: bold;
    font-size: 12px;
    opacity: 0.9;
    cursor: pointer;

    :active{
        background-image: linear-gradient(${colors.mediumgreen}, ${colors.darkgreen});
    }

    :hover{
        opacity: 1;
    }
`;

export const Image = styled.img`
    width: 200px;
`;