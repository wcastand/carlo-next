import React from 'react'

class App extends React.Component {
  state = {
    count: 0,
  }

  next = () => {
    this.setState(s => ({
      count: s.count + 1,
    }))
  }

  prev = () => {
    this.setState(s => ({
      count: s.count - 1,
    }))
  }
  render() {
    console.log(this.state.count)
    return (
      <div>
        <button onClick={() => this.prev()}>-</button>
        <span>{this.state.count}</span>
        <button onClick={() => this.next()}>+</button>
      </div>
    )
  }
}

export default App
