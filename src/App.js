import './App.css'
import React, { useRef, useState, useEffect } from 'react'

export default function App() {
  const [count, setCount] = useState(0)
  const [isCounting, setIsCounting] = useState(false)
  const timerIdRef = useRef(null) // initial state

  const start = () => {
    setIsCounting(true)
    timerIdRef.current = setInterval(() => {setCount((prev) => prev + 1)}, 1000)

  }

  const stop = () => {
    setIsCounting(false)
    clearInterval(timerIdRef.current)
  }

  const restart = () => {
    setIsCounting(false)
    setCount(0)
    clearInterval(timerIdRef.current)
  }

  useEffect(()=>{
    console.log('componentDidMount');
    const data = localStorage.getItem('item')
    setCount(+data)
  },[])

  useEffect(()=>{
    console.log('componentDidUpdate');
    localStorage.setItem('item', count)
  },[count])

  return (
    <div className="container">
      <h2>{count}</h2>
      {!isCounting ? (
        <button onClick={start}>start</button>
      ) : (
        <button onClick={stop}>stop</button>
      )}

      <button onClick={restart}>restart</button>
    </div>
  )
}
