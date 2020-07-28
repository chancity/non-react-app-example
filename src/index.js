import { h, render } from 'preact';
import styled from "styled-components";

const BlackDiv = styled.div`
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

const BlackComponent = ({text}) => {
    return (
        <BlackDiv>
            <h2>{text}</h2>
        </BlackDiv>
    )
};


const renderComponent = (elementId, component, props) => {
    const element = document.getElementById(elementId);
    if(element) {
        render(h(component, props, null), element);
    }
};

window.NonReactApp = {
    renderComponent,
    blackComponent: BlackComponent
}

