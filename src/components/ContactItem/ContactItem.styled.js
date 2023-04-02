import styled from "styled-components";

export const ContactWrapper = styled.div`
display: flex;
align-items: center;
justify-content: space-between;
padding-right: 10px;
`

export const Button = styled.button`
cursor: pointer;
display: flex;
justify-content: center;
width: 300px;
padding: 10px 15px;
margin-left: 30px;
border-radius: 3px;
border: 1px solid grey;
background-color: rgba(197, 182, 235, 0.8);
align-items: center;
font-size: 24px;
:hover{
    background-color: green;
    color: white;
    transition: background-color color 250ms cubic-bezier(0.4, 0, 0.2, 1);
}
`