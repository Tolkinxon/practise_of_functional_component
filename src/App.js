import './App.css'
import React, {useRef, useState} from 'react'

export default function App () {

  const [count, setCount] = useState(0)
  const [isCounting, setisCounting] = useState(false)
  const timerIdRef = useRef(null) // initial state


  start = () => {
    this.setState({ isCounting: true })

    this.int = setInterval(() => {
      this.setState({ count: this.state.count + 1 })
    }, 1000)
  }

  stop = () => {
    this.setState({ isCounting: false })
    clearInterval(this.int)
  }

  restart = () => {
    this.setState({ isCounting: false, count: 0 })
    clearInterval(this.int)
  }

  // componentDidMount() {
  //   console.log('componentDidMount')
  //   const his = localStorage.getItem('second')
  //   this.setState({count: +his})
  // }

  // componentDidUpdate() {
  //   console.log('componentDidUpdate')
  //   localStorage.setItem('second', this.state.count)
  // }

  // componentWillUnmount(){
  //   console.log('componentWillUnmount')
  //   clearInterval(this.int)
  // }

  return (
    <div className="container">
      <h2>{this.state.count}</h2>
      {!this.state.isCounting ? (
        <button onClick={this.start}>start</button>
      ) : (
        <button onClick={this.stop}>stop</button>
      )}

      <button onClick={this.restart}>restart</button>
    </div>
  )
}


