import React from 'react'
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: ${p => p.backgroundColor};;
  width: 100%;
  height: 40px;
  text-align: center;
  padding: 8px;
  margin-bottom: 8px;
  margin-top: 8px;

`;

const P = styled.p`
    height: max-content;
    color: ${p => p.fontColor};
    text-transform: uppercase;
    font-family: "Arial Black", Gadget, sans-serif;
    margin: 0;
    font-size: 32px;
`

export default ({text, color, backgroundColor}) => (
    <Container backgroundColor={backgroundColor}>
        <P fontColor={color}>{text}</P>
    </Container>
);
