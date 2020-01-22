import React from 'react'
import ReactDom from'react-dom'
import App from './component/app'

const hereWillRenderTheApp = document.querySelector('#here-will-render-the-app')

ReactDom.render(
  <App />,
  hereWillRenderTheApp
)