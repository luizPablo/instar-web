import styled from 'styled-components'
import { colors } from '../../../../styles/global/colors';

export const DialogHeader = styled.div`
    display: flex;
    flex-direction: column;
    width: 500px;
    padding: 20px;
    height: ${props => props.height || '100px'};
    background-image: linear-gradient(${colors.darkgreen}, ${colors.mediumgreen});
    color: ${colors.lightgreen};
    justify-content: center;
    align-items: center;

    h5{
        text-align: center;
    }
`;

export const DialogContent = styled.div`
    display: flex;
    flex-direction: column;
    width: 500px;
    justify-content: center;
    align-items: center;
    padding: 20px;
`;

export const FormContainer = styled.div`
    height: auto;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

export const Input = styled.input`
    height: 40px;
    width: 100%;
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

export const ActionRow = styled.div`
    display: flex;
    width: 500px;
    justify-content: flex-end;
    align-items: center;
    margin-top: 20px;
    padding-left: 20px;
    padding-right: 20px;
`

export const ActionButton = styled.button`
    height: 40px;
    width: 100px;
    border: none;
    padding: 5px;
    margin-left: 5px;
    color: ${colors.mediumgreen};
    font-weight: bold;
    font-size: 12px;
    opacity: 0.9;
    cursor: pointer;
    background-color: transparent;
    border-bottom: 2px solid transparent;
    transition: 0.4s;

    :hover{
        opacity: 1;
        border-bottom: 2px solid ${colors.green};
    }
`

export const CancelButton = styled.button`
    height: 40px;
    width: 100px;
    border: none;
    padding: 5px;
    margin-left: 5px;
    color: ${colors.mediumgreen};
    font-weight: bold;
    font-size: 12px;
    opacity: 0.9;
    cursor: pointer;
    transition: 0.4s;
    background-color: transparent;
    border-bottom: 2px solid transparent;

    :hover{
        opacity: 1;
        border-bottom: 2px solid ${colors.green};
    }
`