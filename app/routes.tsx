import * as React from "react"
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import App from "./App"
import Counter from "./components/Counter"
import {HelloName} from "./components/HelloName"

const routes = (
  <Router>
    <Switch>
      <Route exact path="/" component={App} />
      <Route path="/hello" component={HelloName} />
    </Switch>
  </Router>
)

export default routes
