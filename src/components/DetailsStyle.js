import styled from "styled-components";

export const DetailsList = styled.div`
    margin: 0 auto;
    padding-top: 20px;
    width: 800px;
    display: flex;
    justify-content: space-between;
    margin-bottom: 20px;
`;

export const Label = styled.label`
    cursor: pointer;
    padding: 5px;
    background-color: lightgrey;
    border: 2px solid grey;
    border-radius: 5px;
    font-weight: 500;
    user-select: none;
`;

export const Input = styled.input`
    visibility: hidden;
    &:checked + label {
        background-color: grey;
        border: 2px solid darkslategray;
    }
`;

export const Detail = styled.div``;