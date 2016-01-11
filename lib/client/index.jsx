import React from 'react'
import ReactDOM from 'react-dom'
import { Router, Route, Link, browserHistory } from 'react-router'

class App extends React.Component {
  constructor(props) {
    super(props)

    this.state = {

    }
  }

  render() {
    return (
      <h1>outset-react</h1>
    )
  }
}

ReactDOM.render((
  <Router history={ browserHistory }>
    <Route path="/" component={ App }/>
  </Router>
), document.getElementById('root'))
