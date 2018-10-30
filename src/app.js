import "@babel/polyfill"

import React from  'react'
import ReactDom from 'react-dom'

import App from './view/main/index'

const render = (Component) => {
    ReactDom.render(<Component />, document.getElementById("root"))
}

render(App)

if(module.hot) {
    module.hot.accept('./view/main/index.jsx', () => {
        render(App);
    })
}