import * as React from "react"
import { Link } from "react-router-dom"

function extractNameFromParams(params) {
  return params.match(/\?name\=(\w+)$/)[1]
}

const HelloName = (props) => {
  return <h1>Hello {extractNameFromParams(props.location.search)}</h1>
}

class HelloNameForm extends React.Component<any, any> {
  state = {
    value: ""
  }

  render() {
    return <div>
      <label>What's your name?</label>
      <input
        type="text"
        value={this.state.value}
        onChange={this.handleChange}
        placeholder="Enter your name.."
      /><br/>

      <Link to={`/hello?name=${this.state.value}`}>Let us say hello!</Link>
    </div>
  }

  private handleChange = (event) => {
    this.setState({ value: event.target.value })
  }
}


export {
  HelloName,
  HelloNameForm
}
