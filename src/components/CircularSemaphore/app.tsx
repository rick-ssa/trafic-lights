import { useEffect, useRef, useState } from "react"
import { CircularTrafficLight } from "."

const CircularSemaphoreApp = () => {
    //* constants ==================================================================

    const counterLightLenght = 100
    const colorGreen = "#0f0"
    const colorRed = "#f00"
    const colorYellow = "#ff0"
    const timerRed = 6000
    const timerGreen = 10000
    const timerYellow = 2000

    //* hooks ======================================================================

    const [counterColor, setCounterColor] = useState<string>(colorGreen)
    const [timer, setTimer] = useState<number>(timerGreen)
    const [trafficLightColor, setTrafficLightColor] =
        useState<string>(colorGreen)
    const [lightsOn, setLightsOn] = useState<boolean[]>(
        new Array(counterLightLenght).fill(true)
    )
    const timerId = useRef<NodeJS.Timeout>()

    useEffect(() => {
        runTimer(lightsOn)
        return () => clearTimeout(timerId.current)
    }, [trafficLightColor])

    //* timer to each counter lights (depends on timer state and const coutnerLightLength)
    const timerCounterLight = timer / counterLightLenght

    //* functions =====================================================================

    const reset = (color: string, timer: number) => {
        setLightsOn([...lightsOn].map((_) => true))
        setCounterColor(color)
        setTrafficLightColor(color)
        setTimer(timer)
    }

    const getOffNextLight = (counterLights: boolean[]) => {
        const indexOff = counterLights.findIndex((on) => on === true)
        const newCounterLights = [...counterLights]
        newCounterLights[indexOff] = false
        return newCounterLights
    }

    const runTimer = (lightsOn: boolean[]) => {
        if (lightsOn.some((on) => on)) {
            const lights = getOffNextLight(lightsOn)
            clearTimeout(timerId.current)
            timerId.current = setTimeout(() => {
                setLightsOn(lights)
                runTimer(lights)
            }, timerCounterLight)
        } else {
            onTimeUp()
        }
    }

    const onTimeUp = () => {
        switch (trafficLightColor) {
            case colorGreen:
                reset(colorYellow, timerYellow)
                break
            case colorYellow:
                reset(colorRed, timerRed)
                break
            default:
                reset(colorGreen, timerGreen)
                break
        }
    }

    //* component =====================================================================

    return (
        <CircularTrafficLight
            panelSize={300}
            counterColor={counterColor}
            lightsOn={lightsOn}
            trafficLightColor={trafficLightColor}
        />
    )
}

export default CircularSemaphoreApp
