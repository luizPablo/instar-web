import styled from 'styled-components'
import { colors } from '../../global/colors'

export const HeaderContainer = styled.div`
    display: flex;
    height: 120px;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    top: 0;
    position: fixed;
    -webkit-box-shadow: 0px 5px 8px -3px rgba(0,0,0,0.2);
    -moz-box-shadow: 0px 5px 8px -3px rgba(0,0,0,0.2);
    box-shadow: 0px 5px 8px -3px rgba(0,0,0,0.2);
`;

export const Header = styled.div`
    display: flex;
    height: 80px;
    background-image: linear-gradient(${colors.darkgreen}, ${colors.mediumgreen});
    justify-content: space-between;
    align-items: center;
    width: 100%;
    padding-left: 10%;
    padding-right: 10%;
`

export const HeaderTitle = styled.div`
    display: flex;
    height: 40px;
    justify-content: center;
    align-items: center;
    width: 100%;
    padding-left: 10%;
    padding-right: 10%;
    background-color: #fff;
    
    h1 {
        font-size: 12px;
        text-transform: uppercase;
        font-weight: bold;
        margin-left: 5px;
        letter-spacing: 5px;
        color: ${colors.mediumgreen};
    }
`

export const HeaderColumn = styled.div`
    width: 33.33%;
    height: 100%;
    display: flex;
    align-items: ${ props => props.align || 'center'};
    justify-content: ${ props => props.justify || 'center'};
`

export const UserContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
`

export const UserInfo = styled.div`
    display: flex;
    width: 100%;
    justify-content: flex-start;
    align-items: center;
    cursor: pointer;

`

export const Identification = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    margin-left: 10px;
    
    h1 {
        font-size: 12px;
        color: #f2f2f2;
        font-weight: bold;
    }

    h2 {
        font-size: 10px;
        font-weight: lighter;
        color: #f2f2f2;
    }
`

export const Name = styled.h1`
    font-size: 18px;
    color: ${colors.lightgreen};
    margin-left: 5px;
    letter-spacing: 5px;
    text-transform: uppercase;
    cursor: pointer;
`

export const Button = styled.button`
    cursor: pointer;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    height: 40px;
    width: 120px;
    border: none;
    background-color: transparent;
    font-size: 12px;
    font-weight: bold;
    color: #f2f2f2;
    text-transform: uppercase;
    border-radius: 10px;
    transition: 0.3s;

    :hover {
        background-color: #f2f2f2a0;
        color: ${colors.mediumgreen};
    }

    :active {
        background-color: #ffffff;
        color: ${colors.mediumgreen};
    }
`