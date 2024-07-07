import { useState } from "react"
import CircularSemaphore from "./index"
import BasicLight from "../BasicSemaphore/BasicLight"

const CircularSemaphoreApp = () => {
    const panelSize = 300
    const counterLightSize = Math.round(panelSize * 0.93)
    const basicLightSize = Math.round(panelSize * 0.46)
    const colorGreen = "#0f0"
    const colorRed = "#f00"
    const colorYellow = "#ff0"
    const [counterColor, setCounterColor] = useState<string>(colorGreen)
    const [trafficLightColor, setTrafficLightColor] =
        useState<string>(colorGreen)

    const timerRed = 6000
    const timerGreen = 10000
    const timer = counterColor === colorGreen ? timerGreen : timerRed

    const handleTimeUp = () => {
        if (counterColor === colorGreen) {
            setCounterColor(colorRed)
            setTrafficLightColor(colorRed)
        } else {
            setCounterColor(colorGreen)
            setTrafficLightColor(colorGreen)
        }
    }

    return (
        <CircularSemaphore.Panel size={panelSize}>
            <CircularSemaphore.CounterLight
                size={counterLightSize}
                onTimeUp={handleTimeUp}
                color={counterColor}
                timer={timer}
                triggersOnLight={[
                    {
                        callback: () => {
                            counterColor === colorGreen &&
                                setTrafficLightColor(colorYellow)
                        },
                        light: 9,
                    },
                ]}
            />
            <BasicLight
                size={basicLightSize}
                color={trafficLightColor}
                on={true}
            />
        </CircularSemaphore.Panel>
    )
}

export default CircularSemaphoreApp
