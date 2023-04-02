import styled from "styled-components";

export const Input = styled.input`
display: flex;
flex-direction: column;
padding: 7px;
margin-bottom: 5px;
min-width: 450px;
gap: 7px;
text-align: center;
font-size: 24px;
`;

export const Form = styled.form`
background: whitesmoke;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
min-width: 500px;
padding: 20px;
margin-bottom: 15px;
border: 1px solid gray;
border-radius: 5px;
box-shadow: 1px 2px 9px 3px rgba(0,0,0,0.7);
`;


export const Button = styled.button`
cursor: pointer;
font-size: 24px;
min-width: 400px;
padding: 10px 30px;
border-radius: 3px;
border: 1px solid grey;
background-color: rgba(197, 182, 235, 0.8);
:hover{
    background-color: green;
    color: white;
    transition: background-color color 250ms cubic-bezier(0.4, 0, 0.2, 1);
}
`