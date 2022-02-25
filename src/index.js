import React from 'react'
import { render } from 'react-dom'

// Importing the top-level component
import App from './components/App'

// Importing the styles
import './styles.less'

// 👉 STEP 1 - Import React Router's Router
import { BrowserRouter as Router } from 'react-router-dom';

render(
  // Wrap the <App /> in a provider
  <Router>
    <App />
  </Router>
  , document.querySelector('#root')
)

/**
 * match    -> everything about the url
 * location -> everything about where you are
 * history  -> everything about where you were (or will be...)
 */
