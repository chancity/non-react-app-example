import ReactDOM from 'react-dom'
import React from 'react'

export default (
    elementId,
    component,
    props
) => {
    const element = document.getElementById(elementId);
    if (element) {
        ReactDOM.render(React.createElement(component, props, null), element);
    }
};
