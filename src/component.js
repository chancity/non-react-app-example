import React from 'react'
import styled from "styled-components";

const Container = styled.div`
  background-color: black;
  width: 100%;
  height: 39px;
  text-align: center;
  
  h2 {
    color: white;
    line-height: 1.7;
    text-transform: uppercase;
    letter-spacing: 1.2px;
    font-family: "Arial Black", Gadget, sans-serif;
  }
`;

export default ({text}) => {
    return (
        <Container>
            <h2>{text}</h2>
        </Container>
    )
};
