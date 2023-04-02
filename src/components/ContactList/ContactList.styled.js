import styled from "styled-components";

export const List = styled.ul`
display: flex;
flex-direction: column;
align-items: center;

width: 100%;
background: whitesmoke;
font-size: 24px;
padding: 10px 20px;
border: 1px solid gray;
border-radius: 5px;
box-shadow: 1px 2px 9px 3px rgba(0,0,0,0.7);
`

export const ListItem = styled.li`
border: 1px solid #ddd;
  margin-top: -1px; 
  background-color: #f6f6f6;
  padding-left: 12px;
  padding-bottom: 12px;
  font-size: 24px;
  color: black;
  width: 100%;
  display: block
`
