import "@babel/polyfill"

import React from  'react'
import ReactDom from 'react-dom'

import App from './view/main/index.jsx'

ReactDom.render(<App />,  document.getElementById("root"))