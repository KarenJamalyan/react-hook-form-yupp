import styled from "styled-components";


export const SubmitInput = styled.input`
margin: 5px;
padding: 2px 9px;
border-radius: 2px;
width: 175px;
cursor:pointer;
background-color: #ed5991;
color: #ffffff;
border: 2px solid #ed5991;
&:hover{
    background-color: #ffffff;
    color: #ed5991;
};
&:disabled{
    opacity: 0.2;

}
`

export const ErrorMessage = styled.span`
color: #f44336;
`
