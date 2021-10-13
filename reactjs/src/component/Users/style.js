import styled from 'styled-components';

const StyledInput = styled.input`
    border: 1px solid red;
    width: 100%;
`;

const StyledTitle = styled.h2`
    font-size: ${props => props.fontSize || '34px'};
    color: red;
`;


const StyledList = styled.ul`
    list-style: none;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;

    li{
        display: flex;

        align-items: center;
        flex-direction: column;
        justify-content: center;
        color: ${props => props.color || 'yellow'};

    }
`;


export {StyledInput, StyledTitle, StyledList};