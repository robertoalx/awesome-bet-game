import React from 'react'
import { render } from'react-dom'
import App from './component/app'

const hereWillRenderTheApp = document.querySelector('#here-will-render-the-app')

render(
  <App />,
  hereWillRenderTheApp
)