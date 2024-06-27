import { useState } from "react"
import "./App.css"
import Light from "./components/Lights/BasicLight"

function App() {
    const [on, setOn] = useState(false)
    return (
        <div className="App">
            <Light on={on} color="#f00" size={75} />
            <p />
            <Light on={on} color="#ff0" size={75} />
            <p />
            <Light on={on} color="#0f0" size={75} />
            <p />
            <button onClick={() => setOn(!on)}>
                {on ? "desligar" : "ligar"}
            </button>
        </div>
    )
}

export default App
