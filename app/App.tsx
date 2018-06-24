import * as React from "react"
import { hot } from 'react-hot-loader'
import Counter from "./components/Counter"
import {HelloNameForm} from "./components/HelloName"


interface AppProps {
}

const App = ({  }: AppProps) => (
  <div>
    <Counter />
    <br />
    <HelloNameForm />
  </div>
)

export default hot(module)(App)
