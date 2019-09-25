import styled from 'styled-components'

export const Outer = styled.div`
    display: flex;
    width: 100%;
    height: 100%;
    min-height: 100vh;
    align-items: center;
    justify-content: center;
    background-color: #f2f2f2;
`

export const Container = styled.div`
    display: flex;
    width: 100%;
    height: auto;
    min-height: 100%;
    align-items: flex-start;
    justify-content: center;
    background-color: #f2f2f2;
    padding-top: 200px;
    padding-left: 10%;
    padding-right: 10%;
`

export const Column = styled.div`
    display: flex;
    flex-direction: column;
    width: ${ props => props.width || '200px' };
    justify-content: ${ props => props.justify || 'center' };
    align-items: ${ props => props.align || 'center' };
`;

export const Row = styled.div`
    padding: ${props => props.padding || '25px'};
    display: flex;
    flex-direction: row;
    width: ${ props => props.width || '100%' };
    justify-content: ${ props => props.justify || 'center' };
    align-items: ${ props => props.align || 'center' };
`;