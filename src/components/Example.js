import React from 'react'
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  justify-content: center;
  background-color: ${p => p.backgroundColor};;
  width: 100%;
  height: 40px;
  text-align: center;
  padding: 8px;
  margin-bottom: 8px;
  margin-top: 8px;

`;

const H1 = styled.h1`
    color: ${p => p.color};
    text-transform: uppercase;
    font-family: "Arial Black", Gadget, sans-serif;
    margin: 0;
`

export default ({text, color, backgroundColor}) => {
    return (
        <Container backgroundColor={backgroundColor}>
            <H1 color={color}>{text}</H1>
        </Container>
    )
};
