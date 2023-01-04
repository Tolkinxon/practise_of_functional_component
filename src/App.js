import Timer from './components/Timer'
import React, {useState}from 'react'
import './App.css'

export default function App () {

    const [isTimer, setIsTimer] = useState(false)

    return (
        <div>
            <button onClick={() => {setIsTimer(!isTimer)}}> toggleClicker</button>
            { isTimer && <Timer />}
        </div>
    )
}