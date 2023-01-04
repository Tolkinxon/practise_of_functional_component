import '../App.css'
import React, { useRef, useState, useEffect } from 'react'

function setDefaultValue() {
  const userCount = localStorage.getItem('count')
  return userCount ? +userCount : 0
}

export default function Timer() {
  const [count, setCount] = useState(setDefaultValue())
  const [isCounting, setIsCounting] = useState(false)
  const timerIdRef = useRef(null) // initial state

  const start = () => {
    setIsCounting(true)
    timerIdRef.current = setInterval(() => {
      setCount((prev) => prev + 1)
    }, 1000)
  }

  const stop = () => {
    setIsCounting(false)
    clearInterval(timerIdRef.current)
  }

  const restart = () => {
    setIsCounting(false)
    setCount(0)
  }

  useEffect(() => {
    console.log('componentDidUpdate')
    localStorage.setItem('count', count)
  }, [count])

  useEffect(() => {
    if(isCounting){
      timerIdRef.current = setInterval(() => {setCount((prev) => prev + 1)}, 1000)
    }

    return () => {      
      console.log('willUnmount');
      timerIdRef.current && clearInterval(timerIdRef.current)
      timerIdRef.current = 0
    }
  }, [isCounting])

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
