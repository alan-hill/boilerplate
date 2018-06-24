import * as React from "react"
import { connect } from "react-redux"

import { AppState } from "../../reducers"
import { CounterActions } from "../../actions"

export class Counter extends React.Component<
  & CounterStateProps 
  & CounterDispatchProps, 
  null
> {

  render() {
    return <div>
      <span className="Counter-Value">{this.props.value}</span> <br />
      <button onClick={() => this.props.handleIncrement(this.props.value)}>+</button>
      <button onClick={() => this.props.handleDecrement(this.props.value)}>-</button>
    </div>
  }
}

interface CounterStateProps {
  value: number
}

interface CounterDispatchProps {
  handleIncrement: (value: number) => void
  handleDecrement: (value: number) => void
}

const mapStateToProps = (state: AppState) => ({
  value: state.app.value
})
// TODO: bug.. should be (dispatch: Dispatch<AppState>)
const mapDispatchToProps = (dispatch: any) => ({
  handleIncrement: (value) => dispatch(CounterActions.incrementCounter(value)),
  handleDecrement: (value) => dispatch(CounterActions.decrementCounter(value))
})

export default connect<CounterStateProps, CounterDispatchProps>(mapStateToProps, mapDispatchToProps)(Counter)
