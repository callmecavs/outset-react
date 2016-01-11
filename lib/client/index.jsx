import React from 'react'
import { render } from 'react-dom'
import { Router, Route, Link, browserHistory } from 'react-router'

import Main from './components/main'

render((
  <Router history={ browserHistory }>
    <Route path="/" component={ Main }/>
  </Router>
), document.getElementById('root'))
